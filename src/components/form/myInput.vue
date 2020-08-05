<template>
  <el-input @blur="updateForm(item.key,model)" v-model.trim="model"
            :placeholder="`请输入${item.value}`" :type="item.inputType || 'text'"
            clearable size="mini" maxlength="20"></el-input>
</template>

<script>
import mixin from './mixin'

export default {
  name: "myInput",
  mixins: [mixin],
  watch: {
    'form': {
      immediate: true,
      handler(n) {
        this.model = n[this.item.key]
      }
    }
  },
  data() {
    return {
      model: ''
    }
  },
}
</script>

<style scoped>

</style>