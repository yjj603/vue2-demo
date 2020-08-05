<template>
  <el-select v-model="model" filterable size="mini" clearable
             @change="()=>{
               updateForm(item.key,model)
               item.method(form)
             }" :placeholder="`请选择${item.value}`">
    <el-option v-for="(ite,index) in option"
               :key="index" :label="ite[item.params.label]"
               :value="ite[item.params.value]"></el-option>
  </el-select>
</template>

<script>
import mixin from './mixin'

export default {
  name: "mySelect",
  mixins: [mixin],
  data() {
    return {
      model: ''
    }
  },
  computed:{
    option(){
      return this.item.option()
    }
  },
  watch: {
    'form': {
      immediate: true,
      handler(n) {
        this.model = n[this.item.key]
      }
    }
  },
}
</script>

<style scoped>

</style>