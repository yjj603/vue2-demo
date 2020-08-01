<template>
  <el-select v-model="value_[item.key]" filterable size="mini" clearable
             @change="()=>{
               $emit('input',value_)
               item.method(value_)
             }" :placeholder="`请选择${item.value}`">
    <el-option v-for="(ite,index) in item.option()"
               :key="index" :label="item.params?ite[item.params.label]:ite"
               :value="ite[item.params.value]"></el-option>
  </el-select>
</template>

<script>
import mixin from './mixin'
export default {
  name: "mySelect",
  mixins: [mixin]
}
</script>

<style scoped>

</style>