<template>
  <el-select v-model="model" size="mini" :remote-method="remoteMethod" :loading="loading"
             filterable remote reserve-keyword :placeholder="`请输入${item.value}查询`"
             :disabled="item.disabled(form)"
             @change="(val)=>{
               updateForm(item.key,model)
               item.method()
             }" clearable>
    <el-option v-for="(ite,index) in option"
               :key="index" :label="ite[item.params.label]"
               :value="ite[item.params.value]"></el-option>
  </el-select>
</template>

<script>
import mixin from './mixin'

export default {
  name: "mySelectRemote",
  mixins: [mixin],
  data() {
    return {
      loading: false,
      option: [],
      model: ''
    }
  },
  computed: {
    ciList() {
      return this.$store.state.getData[this.item.key]
    },
  },
  watch: {
    'ciList': {
      immediate: true,
      handler: function (n) {
        this.option = n
      }
    },
    'form': {
      immediate: true,
      handler(n) {
        this.model = n[this.item.key]?n[this.item.key]._id:''
      }
    }
  },
  methods: {
    debounce(func, wait = 50) {
      let timer = 0
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, wait)
      }
    },
    getData: function (query) {
      return this.debounce(async () => {
        this.loading = true
        const {data: data} = await this.$axios.get(`${this.item.key}/getAll`, {
          params: {
            query
          }
        })
        this.loading = false
        this.option = data
      }, 500)()
    },
    remoteMethod: function (query) {
      if (query) {
        this.getData(query)
      } else {
        this.option = []
      }
    }
  }
}
</script>

<style scoped>

</style>