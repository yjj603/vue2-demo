<template>
  <div>
    <h4>{{ $store.state.pool.obj[$route.params.ci].name }}列表</h4>
    <div class="tool">
      <el-input size="mini" placeholder="请输入内容" v-model="sel.value" class="tool-item" style="width: 400px">
        <el-select v-model="sel.type" slot="prepend" placeholder="请选择" style="width: 150px">
          <el-option v-for="(item,index) in $store.state.config[$route.params.ci].search" :key="index"
                     :label="item.value"
                     :value="item.key"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
      <el-button type="primary" round size="mini" class="tool-item" @click="$router.push({
      name:'create',
      params:{
        ci:$route.params.ci
      }
      })">创建
      </el-button>
      <el-button type="danger" round size="mini" class="tool-item">删除</el-button>
    </div>
    <div style="margin-top: 20px">
      <el-table border :data="table.data" :loading="table.loading" size="mini"
                @selection-change="(val)=>{table.check = val}">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" width="55" label="#"></el-table-column>
        <el-table-column label="名称" sortable>
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column sortable v-for="(item,index) in $store.state.config[$route.params.ci].table" :key="index"
                         :label="item.value">
          <template slot-scope="scope">
            {{ item.view(scope.row) }}
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "tableList",
  data() {
    return {
      sel: {
        type: 'name',
        value: ''
      },
      table: {
        data: [],
        loading: false,
        check: []
      }
    }
  }
}
</script>

<style scoped lang="scss">
.tool {
  display: flex;

  .tool-item {
    margin-right: 15px;
  }
}
</style>