<template>
  <div>
    <h4>{{ $store.state.pool.obj[$route.params.ci].name }}修改</h4>
    <div>
      <el-form ref="form" :inline="true" :model="form" label-width="100px" :rules="$store.state.rules">
        <el-form-item :label="item.value" v-for="(item,index) in $store.state.config[$route.params.ci].create"
                      :key="index" :prop="item.key">
          <component :item="item" :is="is(item)"></component>
        </el-form-item>
        <br>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" size="small">提交</el-button>
          <el-button @click="cancel" size="small">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import poolMixin from "@/views/pool/poolMixin";

export default {
  name: "update",
  mixins: [poolMixin],
  async created() {
    const {data: data} = await this.$axios.get(`${this.$route.params.ci}/getOne`, {
      params: {
        id: this.$route.params.id
      }
    })
    this.form = data
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          const data = await this.$axios.post(`${this.$route.params.ci}/update`,
              this.form
          )
          if (data.code === 200) {
            this.$message({
              message: '恭喜你，这是一条成功消息',
              type: 'success',
              offset: 70
            });
            this.$store.dispatch('getOneOption', {
              ci: this.$route.params.ci
            })
            this.cancel()
          }
        } else {
          return false
        }
      })
    },
  }
}
</script>

<style scoped>

</style>