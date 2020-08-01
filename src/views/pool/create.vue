<template>
  <div>
    <h4>{{ $store.state.pool.obj[$route.params.ci].name }}创建</h4>
    <div>
      <el-form ref="form" :inline="true" :model="form" label-width="100px">
        <el-form-item :label="item.value" v-for="(item,index) in $store.state.config[$route.params.ci].create"
                      :key="index">
          <myComponent v-model="form" :item="item"></myComponent>
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
export default {
  name: "create",
  data() {
    return {
      form: {}
    }
  },
  created() {

  },
  methods: {
    async onSubmit() {
      const data = await this.$axios.post('server/create',
          JSON.stringify(this.form)
      )
      console.log(data)
    },
    cancel() {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped>

</style>