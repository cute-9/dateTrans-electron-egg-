<template>
  <div>
    <el-table
      :data="tableData"
      style="min-width: 400px"
      height="450px"
      :header-cell-style="tableHeaderStyle"
      class="contain-table"
      @cell-click="cellClick"
      :cell-class-name="tableCellClassName"
      border
    >
      <el-table-column label="中文名称" prop="name">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.name"
            placeholder="请选择"
            v-if="scope.row.show"
          >
          </el-input>
          <el-button v-else type="primary" size="mini" @click="addData"
            >新增</el-button
          >
        </template>
      </el-table-column>
      <el-table-column prop="value" label="英文名称">
        <template slot-scope="scope">
            <el-input
            v-if="scope.row.show"
            v-model="scope.row.keyWord"
            placeholder="请输入关键字"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="keyWord" label="字段类型">
        <template slot-scope="scope">
          <el-input
            v-if="scope.row.show"
            v-model="scope.row.keyWord"
            placeholder="请输入关键字"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="keyWord" label="备注">
        <template slot-scope="scope">
          <el-input
            v-if="scope.row.show"
            v-model="scope.row.keyWord"
            placeholder="请输入关键字"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="80px">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.show"
            type="danger"
            size="mini"
            @click="deleteData(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="btn">
        <el-button>提交</el-button>
        <el-button>取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          name: "",
          value: "",
          show: true,
          keyWord: "",
        },
        {
          id: "2",
          show: false,
          name: "",
          value: "",
          keyWord: "",
        },
      ],
    };
  },
  methods: {
    // 头部样式修改
    tableHeaderStyle({ row, column, rowIndex }) {
      if (rowIndex === 0) {
        return `padding:0px`;
      }
    },
    // 给数据赋值索引
    tableCellClassName({ row, column, rowIndex, columnIndex }) {
      row.index = rowIndex;
      column.index = columnIndex;
    },
    // 当前点击行
    cellClick(row) {
      // console.log(row, "event");
      this.hightIndex = row.id;
      this.hightName = row.name;
    },
    // 表格新增数据
    addData() {
      let length = this.tableData.length - 1;
      let id = Number(
        Math.random().toString().substr(3, length) + Date.now()
      ).toString(36);
      this.tableData.splice(length, 0, {
        id: id,
        show: true,
        name: "",
        value: "",
        keyWord: "",
      });
    },
    // 表格删除数据
    deleteData(id) {
      // console.log(id, "id");
      this.tableData = this.tableData.filter((obj) => obj.id != id);
    },
  },
};
</script>

<style lang="less" scoped>
  ::v-deep .el-table .el-table__cell {
    // padding: 20px 0;
    border-right: 1px solid #fff !important;
  }
  ::v-deep.el-table--border ::v-deep .el-table__cell {
    border-right: 1px solid #fff !important;
    // padding: 20px 0 !important;
  }
  ::v-deep .el-table th.el-table__cell>.cell {
    padding: 10px 10px !important;
  }
</style>
