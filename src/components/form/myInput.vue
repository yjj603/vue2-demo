<template>
  <el-input @blur="$emit('input',value_)" v-model.trim="value_[item.key]"
            :placeholder="`请输入${item.value}`" :type="item.inputType || 'text'"
            clearable size="mini" maxlength="20"></el-input>
</template>

<script>
import mixin from './mixin'

export default {
  name: "myInput",
  mixins: [mixin]
}
</script>

<style scoped>

</style>