"use strict";(self["webpackChunkproject_01"]=self["webpackChunkproject_01"]||[]).push([[192],{1192:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var o=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.Loading,expression:"Loading"}],staticClass:"content"},[e.visible?t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.backClick}},[t("i",{staticClass:"el-icon-refresh-right"}),e._v(" 返回")]):e._e(),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.addClick("directory")}}},[t("i",{staticClass:"el-icon-circle-plus-outline"}),e._v(" 新增目录")]),t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){return e.addClick("add")}}},[t("i",{staticClass:"el-icon-circle-plus-outline"}),e._v(" 上传文件")]),t("el-table",{staticClass:"table",attrs:{data:e.tableData,height:"700",border:""}},[e._v(" > "),t("el-table-column",{attrs:{type:"index",width:"50",label:"序号",index:e.indexMethod}}),t("el-table-column",{attrs:{prop:"docName",label:"文件名",width:"200"}}),t("el-table-column",{attrs:{prop:"downLoadPath",label:"路径"}}),t("el-table-column",{attrs:{prop:"name",label:"路径类型",width:"100",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("p",[e._v(e._s(a.row.isFile?"文件":"文件夹"))])]}}])}),t("el-table-column",{attrs:{prop:"",label:"操作",width:"220",align:"center"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.isFile?t("el-button",{attrs:{type:"success",size:"mini"},on:{click:function(t){return e.btnClick(a.row,"view")}}},[e._v("查看")]):e._e(),a.row.isFile?e._e():t("el-button",{attrs:{type:"warning",size:"mini"},on:{click:function(t){return e.btnClick(a.row,"show")}}},[e._v("展开")]),t("el-button",{attrs:{disabled:!a.row.isFile,type:"primary",size:"mini"},on:{click:function(t){return e.btnClick(a.row,"down")}}},[e._v("下载")]),t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.btnClick(a.row,"delete")}}},[e._v("删除")])]}}])})],1),t("el-pagination",{staticStyle:{"margin-top":"10px","text-align":"center"},attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e.dialogVisible?t("el-dialog",{attrs:{title:"新增",visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("formEdit",{attrs:{docPath:e.docPath,addType:e.addType},on:{handleClose:e.handleClose}})],1):e._e()],1)},i=[],l=a(2168),s=function(){var e=this,t=e._self._c;return t("div",{directives:[{name:"loading",rawName:"v-loading",value:e.Loading,expression:"Loading"}],staticClass:"add-content"},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"130px",rules:e.formRules}},[t("el-form-item",{attrs:{label:"新增类型"}},[t("el-select",{attrs:{placeholder:"请选择新增类型",disabled:""},model:{value:e.form.value,callback:function(t){e.$set(e.form,"value",t)},expression:"form.value"}},[t("el-option",{attrs:{label:"新增目录",value:"directory"}},[e._v("新增目录")]),t("el-option",{attrs:{label:"上传文件",value:"add"}},[e._v("上传文件/文件夹")])],1)],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"directory"==e.addType,expression:"addType == 'directory'"}],attrs:{label:"目录地址"}},[t("el-input",{attrs:{placeholder:"请输入目录名称，例如：path",disabled:!0},model:{value:e.form.pathLocal,callback:function(t){e.$set(e.form,"pathLocal",t)},expression:"form.pathLocal"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"directory"==e.addType,expression:"addType == 'directory'"}],attrs:{label:"目录名称",prop:"path"}},[t("el-input",{attrs:{placeholder:"请输入目录名称，例如：path"},model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"add"==e.addType,expression:"addType == 'add'"}],attrs:{label:"当前目录地址"}},[t("el-input",{attrs:{placeholder:"请输入文件名,例如path",disabled:""},model:{value:e.form.pathLocal,callback:function(t){e.$set(e.form,"pathLocal",t)},expression:"form.pathLocal"}})],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"add"==e.addType,expression:"addType == 'add'"}],attrs:{label:"本地文件路径",prop:"path"}},[t("el-input",{attrs:{placeholder:"请输入文件地址"},model:{value:e.form.localFolderPath,callback:function(t){e.$set(e.form,"localFolderPath",t)},expression:"form.localFolderPath"}})],1),t("el-form-item",{attrs:{align:"center"}},[t("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")]),t("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)],1)],1)},r=[],n={props:{docPath:{type:String,default:"/"},addType:{type:String,default:""}},data(){return{form:{value:"",pathLocal:"/",path:"",localFolderPath:""},formRules:{path:[{required:!0,message:"请输入文件夹名",trigger:"blur"}],localFolderPath:[{required:!0,message:"请输入文件地址",trigger:"blur"}]},Loading:!1}},mounted(){this.form.value=this.addType,this.form.pathLocal=this.docPath?this.docPath+"/":"/"},watch:{"form.path":{handler(e){this.form.pathLocal=`${this.docPath?this.docPath+"/":"/"}${e}`},deep:!0}},methods:{onSubmit(){let e="directory"==this.form.value?l.gJ:l.dC,t="directory"==this.form.value?{path:this.form.pathLocal}:{path:this.docPath,localFolderPath:encodeURIComponent(this.form.localFolderPath)};this.Loading=!0,e(t).then((e=>{const{responseCode:t,responseMsg:a}=e;this.Loading=!1,200==t?(this.$message.success(a),this.$emit("handleClose")):this.$message.error(a)}))},cancel(){this.$emit("handleClose")}}},d=n,c=a(1001),h=(0,c.Z)(d,s,r,!1,null,"c7b46c9c",null),p=h.exports,u={components:{formEdit:p},data(){return{tableData:[],indexMethod:1,total:0,currentPage:1,pageSize:20,visible:!1,backName:"",Loading:!0,fileUrl:"",docPath:"",dialogVisible:!1,addType:""}},created(){this.getInfo(),console.log(this.$axios)},methods:{getInfo(e){this.Loading=!0;let t={path:e||"",pageNum:this.currentPage,pageSize:this.pageSize};(0,l.QU)(t).then((e=>{const{data:t,responseCode:a}=e;this.Loading=!1,200==a&&(t.pageList.forEach((e=>{e.isFile||(e["hasChildren"]=!0)})),this.tableData=t.pageList,this.total=t.totalNum)})).catch((()=>{this.Loading=!1,this.$message.error("网络错误，请稍后重试！")}))},handleClose(){this.dialogVisible=!1,this.getInfo(this.docPath)},handleSizeChange(e){this.pageSize=e,this.getInfo(this.docPath)},handleCurrentChange(e){this.currentPage=e,this.getInfo(this.docPath)},load(e,t,a){console.log(e,"tree");let o=[];(0,l.QU)({path:e.docPath}).then((e=>{const{data:t,responseCode:i}=e;this.Loading=!1,200==i&&(t.pageList.forEach((e=>{e.isFile||(e["hasChildren"]=!0)})),o=t.pageList,a(o))}))},btnClick(e,t){if(console.log(e),"delete"==t)this.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,l.xl)({path:e.docPath}).then((e=>{const{responseCode:t,responseMsg:a}=e;200==t?(this.$message.success(a),this.getInfo(this.docPath)):this.$message.error(a)}))})).catch((()=>{this.$message({type:"info",message:"已取消删除"})}));else if(e.isFile){var a=(screen.height-622)/2,o=(screen.width-1e3)/2;switch(console.log(o,"ileft"),t){case"view":window.open(`${window.serverconfig.ip}hdfs/getHdfsFilePlay?path=${e.docPath}`,"_blank",`height=622, width=1000 top=${a},left=${o},toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no `);break;case"down":window.open(e.downLoadPath,"_blank");break}}else this.visible=!0,this.docPath=e.docPath,this.getInfo(e.docPath)},backClick(){this.visible=!1,this.pageSize=20,this.currentPage=1,this.docPath="",this.getInfo()},addClick(e){this.addType=e,this.dialogVisible=!0}}},m=u,f=(0,c.Z)(m,o,i,!1,null,"0a3ef2f4",null),g=f.exports},2168:function(e,t,a){a.d(t,{QU:function(){return i},dC:function(){return l},gJ:function(){return s},xl:function(){return r}});var o=a(4471);function i(e){return(0,o.Z)({url:"hdfs/getHdfsCatalog",method:"get",params:e})}function l(e){return(0,o.Z)({url:"hdfs/uploadFilesToHdfs",method:"get",params:e})}function s(e){return(0,o.Z)({url:"hdfs/createHdfsDirectory",method:"get",params:e})}function r(e){return(0,o.Z)({url:"hdfs/deleteHdfsPath",method:"get",params:e})}}}]);