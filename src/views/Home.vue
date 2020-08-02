<template>
  <el-container class="min-height">
    <el-header>
      <homeHead></homeHead>
    </el-header>
    <el-container class="min-height">
      <el-aside width="200px" class="min-height">
        <homeAside></homeAside>
      </el-aside>
      <el-main class="min-height">
        <router-view :key="$route.fullPath"></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import homeAside from '@/components/home/home-aside'
import homeHead from '@/components/home/home-head'

export default {
  name: "Home",
  components: {
    homeAside,
    homeHead
  },
  created() {
    this.$store.dispatch('getOption')
  }
}
</script>

<style scoped>
.min-height {
  min-height: 100%;
}
</style>