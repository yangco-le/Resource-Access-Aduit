<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input v-model="listQuery.filepath" placeholder="FilePath" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-select v-model="listQuery.sort" style="width: 140px" class="filter-item" @change="handleFilter">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key" />
      </el-select>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        Search
      </el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">
        Export
      </el-button>
      <el-checkbox v-model="showUid" class="filter-item" style="margin-left:15px;" @change="tableKey=tableKey+1">
        uid
      </el-checkbox>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80" :class-name="getSortClass('id')">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="LogTime" width="160px" align="center">
        <template slot-scope="{row}">
          <!-- <span>{{ row.timestamp | parseTime('{y}-{m}-{d} {h}:{i}') }}</span> -->
          <span>{{ row.logtime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="FilePath" min-width="150px">
        <template slot-scope="{row}">
          <span class="link-type" @click="handleUpdate(row)">{{ row.filepath }}</span>
          <!-- <el-tag>{{ row.type | typeFilter }}</el-tag> -->
        </template>
      </el-table-column>
      <el-table-column label="Username" width="110px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.username }}</span>
        </template>
      </el-table-column>
      <el-table-column v-if="showUid" label="Uid" width="60px" align="center">
        <template slot-scope="{row}">
          <!-- <span style="color:red;">{{ row.uid }}</span> -->
          <span>{{ row.uid }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Command" align="center" width="100px">
        <template slot-scope="{row}">
          <span>{{ row.command }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Pid" align="center" width="95">
        <template slot-scope="{row}">
          <span v-if="row.pid" class="link-type" @click="handleFetchPv(row.pid)">{{ row.pid }}</span>
          <span v-else>0</span>
        </template>
      </el-table-column>
      <el-table-column label="Result" align="center" class-name="status-col" width="120">
        <template slot-scope="{row}">
          <el-tag :type="row.result | statusFilter">
            {{ row.result }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="120" class-name="small-padding fixed-width">
        <template slot-scope="{row,$index}">
          <el-button v-if="row.status!='deleted'" size="mini" type="danger" @click="handleDelete(row, $index)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="fetchData" />

  </div>
</template>

<script>


const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]

export default {
  name: 'Mainpage',
  data () {
    return {
      tableKey: 0,
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      },
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showUid: false,
      temp: {
        id: undefined,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
      },
      dialogFormVisible: false,
      dialogStatus: '',
      textMap: {
        update: 'Edit',
        create: 'Create'
      },
      dialogPvVisible: false,
      pvData: [],
      rules: {
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
      },
      downloadLoading: false
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      
    },
    handleFilter() {

    },
    handleModifyStatus(row, status) {

    },
    sortChange(data) {

    },
    sortByID(order) {

    },
    resetTemp() {

    },
    createData() {

    },
    handleUpdate(row) {

    },
    updateData() {

    },
    handleDelete(row, index) {

    },
    handleDownload() {

    },
    formatJson(filterVal) {

    },
    getSortClass: function(key) {
      const sort = this.listQuery.sort
      return sort === `+${key}` ? 'ascending' : 'descending'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background-color: #ffffff;
  color: rgb(63, 58, 58);
  text-align: center;
  line-height: 80px;
  border-bottom: 1px solid rgb(211, 200, 200);
}

.m-header {
  height: 80px !important;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  min-height: 400px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-submenu {
  background-color: rgb(255, 255, 255);
}

.board {
  position: relative;
  min-height: 30%;
}

.el-card {
  width: 555px;
  height: 555px;
  margin-left: 3em;
  float: left;
}

.inline-block {
  display: inline-block;
}
</style>