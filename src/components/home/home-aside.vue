<template>
  <el-menu
      class="menu"
      default-active="pool"
      background-color="#19384f"
      text-color="#ffffff"
      active-text-color="#66c0f4"
      @select="handleSelect">
    <el-menu-item index="pool">
      <span slot="title">Pool</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "home-aside",
  methods:{
    handleSelect(key){
      this.$router.push({
        name:key
      })
    }
  }
}
</script>

<style scoped>
.menu{
  height: 100%;
  color: #ffffff;
}
</style>