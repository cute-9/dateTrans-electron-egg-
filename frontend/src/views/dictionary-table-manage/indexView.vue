<!-- 数据库管理 -->
<template>
  <div v-loading="loading" class="content">
    <el-button type="primary" size="mini" @click="btnClick('add')">
      <i class="el-icon-circle-plus-outline"></i>
      新增</el-button
    >
    <div class="table">
      <el-table :data="tableData" border height="100%">
        <el-table-column
          type="index"
          width="50"
          label="序号"
          :index="indexMethod"
        >
        </el-table-column>
        <el-table-column prop="id" label="编号"> </el-table-column>
        <el-table-column prop="chName" label="中文名称"> </el-table-column>
        <el-table-column prop="enName" label="英文名称"> </el-table-column>
        <el-table-column prop="fieldType" label="字段类型">
          <!-- <template slot-scope="scope">
            <el-tag :type="scope.row.stateType">{{
              scope.row.taskStateName
            }}</el-tag>
          </template> -->
        </el-table-column>
        <el-table-column prop="notes" label="备注">
        </el-table-column>
        <el-table-column prop="createTime" label="开始时间" >
        </el-table-column>
        <!-- <el-table-column prop="" label="操作" width="220" align="center">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="btnClick('view', scope.row)"
              >查看</el-button
            >
          </template>
        </el-table-column> -->
      </el-table>
    </div>

    <el-pagination
      style="margin-top: 10px; text-align: center"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
    <el-dialog
      v-if="dialogVisible"
      title="新增"
      width="800px"
      :visible.sync="dialogVisible"
    >
      <formEdit @handleClose="handleClose" />
    </el-dialog>
  </div>
</template>

<script>
import formEdit from "./formEdit.vue";
import { getAllFields } from "@/api/dictionaryManage";
export default {
  components: {
    formEdit,
  },
  data() {
    return {
      tableData: [],
      indexMethod: 1,
      loading: true,
      total: 0,
      currentPage: 1,
      pageSize: 20,
      dialogVisible: false,
    };
  },
  created() {
    // 初始化数据
    this.getInfo();
  },
  methods: {
    // 分页
    handleSizeChange(val) {
      this.pageSize = val;
      this.getInfo();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getInfo();
    },
    // 按钮点击
    btnClick(type, row) {
      switch (type) {
        case "add":
          this.dialogVisible = true;
          break;
      }
    },
    // 获取信息
    getInfo() {
      let params = {
        pageNum: this.currentPage,
        pageSize: this.pageSize,
      };
      getAllFields(params)
        .then((res) => {
          this.loading = false;
          const { data, responseCode } = res;
          if (responseCode == 200) {
            this.total = data.total;
            data.list.forEach(item=>{
                item.createTime=this.getTime(item.createTime)
            })
            this.tableData = data.list;
          }
        })
        .catch((err) => {
          console.log(err, "rr");
          this.loading = false;
          this.$message.error("网络错误,请稍后重试!");
        });
    },
    // 新增弹窗关闭
    handleClose() {
      this.dialogVisible = false;
      this.getInfo();
    },
    getTime(times){
        var date = new Date(times);
      var y = date.getFullYear();
	  var m = date.getMonth() + 1;
	  m = m < 10 ? ('0' + m) : m;
	  var d = date.getDate();
 	  d = d < 10 ? ('0' + d) : d;
      var h = date.getHours();
	  var minute = date.getMinutes();
	  minute = minute < 10 ? ('0' + minute) : minute;
	 return  y + '-' + m + '-' + d; 

    },
  },
};
</script>

<style lang="less" scoped>
.content {
  height: 100%;
}
.table {
  width: 100%;
  height: calc(100% - 100px);
  margin-top: 10px;
}
</style>
