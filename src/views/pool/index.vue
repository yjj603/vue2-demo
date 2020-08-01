<template>
  <div class="pool">
    <div v-for="(item,index) in $store.state.pool.arr" :key="index" @click="$router.push({
      name:'tableList',
      params:{
        ci:item.key
      }
    })">{{item.name}}</div>
  </div>
</template>

<script>
export default {
name: "idnex"
}
</script>

<style scoped lang="scss">
.pool{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  >div{
    width: 30%;
    height: 200px;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    border: 1px solid rgb(102, 192, 244);
    margin-bottom: 15px;
  }
  >div:not(:nth-child(3n)){
    margin-right: 15px;
  }
}
</style>