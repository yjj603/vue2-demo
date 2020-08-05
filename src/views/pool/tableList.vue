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
        <el-button slot="append" icon="el-icon-search" @click="getList()"></el-button>
      </el-input>
      <el-button type="primary" round size="mini" class="tool-item" @click="$router.push({
      name:'create',
      params:{
        ci:$route.params.ci
      }
      })">创建
      </el-button>
      <el-button type="danger" round size="mini" class="tool-item" :disabled="!table.check.length" @click="del">删除
      </el-button>
    </div>
    <div style="margin-top: 20px" v-loading="loading">
      <el-table border :data="table.data" :loading="table.loading" size="mini"
                @selection-change="(val)=>{table.check = val}" style="margin-bottom: 20px">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" width="55" label="#"></el-table-column>
        <el-table-column label="名称" sortable>
          <template slot-scope="scope">
            <router-link :to="{
              name:'update',
              params: {
                ci:$route.params.ci,
                id:scope.row._id
              }
            }">{{ scope.row.name }}
            </router-link>
          </template>
        </el-table-column>
        <el-table-column sortable v-for="(item,index) in $store.state.config[$route.params.ci].table" :key="index"
                         :label="item.value">
          <template slot-scope="scope">
            {{ item.view(scope.row) }}
          </template>
        </el-table-column>
      </el-table>
      <el-pagination background layout="total,sizes,prev,pager,next" :page-size="1"
                     :page-sizes="[1,2,10]" :total="table.total" @current-change="handleCurrentChange"
                     @size-change="handleSizeChange"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "tableList",
  data() {
    return {
      loading: true,
      sel: {
        type: 'name',
        value: ''
      },
      table: {
        data: [],
        loading: false,
        check: [],
        total: 0
      },
      pagination: {
        page: 1,
        size: 1
      }
    }
  },
  created() {
    this.getList()
  },
  methods: {
    handleSizeChange(v) {
      this.pagination.size = v
      this.getList()
    },
    handleCurrentChange(v) {
      this.pagination.page = v
      this.getList()
    },
    async getList() {
      const find = this.sel.value ? {
        key: this.sel.type,
        value: this.sel.value
      } : {}
      const {data: data} = await this.$axios.get(`${this.$route.params.ci}/get`, {
        params: {
          ...find,
          ...this.pagination
        }
      })
      this.table.data = data.res
      this.table.total = data.total
      this.loading = false
    },
    async del() {
      const ids = this.table.check.map(v => v._id)
      await this.$axios.post(`${this.$route.params.ci}/delete`, ids)
      await this.getList()
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