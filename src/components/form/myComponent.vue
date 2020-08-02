<template>
  <component :is="comp" v-model="value" :item="item"></component>
</template>

<script>
export default {
  name: "formComponent",
  props: {
    value: {},
    item: {},
  },
  data() {
    return {
      comp: ''
    }
  },
  created() {
    const str = this.item.type
    this.comp = () => import(`./my${str.replace(str[0], str[0].toUpperCase())}`)
  }
}
</script>

<style scoped>

</style>