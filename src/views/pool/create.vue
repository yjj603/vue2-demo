<template>
  <div>
    <h4>{{ $store.state.pool.obj[$route.params.ci].name }}创建</h4>
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
  name: "create",
  mixins: [poolMixin],
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          const data = await this.$axios.post(`${this.$route.params.ci}/create`,
              this.form
          )
          if (data.code === 200) {
            this.$message({
              message: '恭喜你，这是一条成功消息',
              type: 'success',
              offset: 70
            });
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