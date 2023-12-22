"use strict";(self["webpackChunkproject_01"]=self["webpackChunkproject_01"]||[]).push([[930],{8930:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=function(){var e=this,t=e._self._c;return t("div",[t("div",[t("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[t("el-tab-pane",{attrs:{label:"全文搜索",name:"first"}}),t("el-tab-pane",{attrs:{label:"高级搜索",name:"second"}})],1),t("div",{staticClass:"form-contain"},[t("el-form",{directives:[{name:"show",rawName:"v-show",value:"first"==this.activeName,expression:"this.activeName == 'first'"}],ref:"form1",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,rules:e.formInlinesRules}},[t("el-form-item",{attrs:{label:"数据类型",prop:"indexName"}},[t("el-select",{attrs:{placeholder:"请选择索引名"},model:{value:e.formInline.indexName,callback:function(t){e.$set(e.formInline,"indexName",t)},expression:"formInline.indexName"}},e._l(e.optionsFirst,(function(e,a){return t("el-option",{key:e+a,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",{attrs:{label:""}},[t("el-input",{attrs:{placeholder:"请输入关键字"},model:{value:e.formInline.keyWord,callback:function(t){e.$set(e.formInline,"keyWord",t)},expression:"formInline.keyWord"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("search")}}},[e._v("查询")])],1)],1),t("el-form",{directives:[{name:"show",rawName:"v-show",value:"second"==this.activeName,expression:"this.activeName == 'second'"}],ref:"form2",attrs:{model:e.formInlines,"label-width":"80px",rules:e.formInlinesRules2}},[t("el-form-item",{staticStyle:{"margin-bottom":"20px"},attrs:{label:"数据类型",prop:"indexName"}},[t("el-select",{attrs:{placeholder:"请选择索引名"},on:{change:e.change},model:{value:e.formInlines.indexName,callback:function(t){e.$set(e.formInlines,"indexName",t)},expression:"formInlines.indexName"}},e._l(e.optionsSeconed,(function(e,a){return t("el-option",{key:e+a,attrs:{label:e,value:e}})})),1)],1),t("el-form-item",[t("el-table",{staticClass:"contain-table",staticStyle:{"min-width":"400px"},attrs:{data:e.tableData,height:"450px","header-cell-style":e.tableHeaderStyle,"cell-class-name":e.tableCellClassName,border:""},on:{"cell-click":e.cellClick}},[t("el-table-column",{attrs:{label:"字段名",prop:"name"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.show?t("el-select",{attrs:{placeholder:"请选择"},model:{value:a.row.name,callback:function(t){e.$set(a.row,"name",t)},expression:"scope.row.name"}},e._l(e.options,(function(e){return t("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1):t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.addData}},[e._v("新增")])]}}])}),t("el-table-column",{attrs:{prop:"value",label:"匹配机制"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.show?t("el-cascader",{attrs:{options:e.numMap(a.row.name)},on:{change:e.handleChange},model:{value:a.row.value,callback:function(t){e.$set(a.row,"value",t)},expression:"scope.row.value"}}):e._e()]}}])}),t("el-table-column",{attrs:{prop:"keyWord",label:"关键字"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.show?t("el-input",{attrs:{placeholder:"请输入关键字"},model:{value:a.row.keyWord,callback:function(t){e.$set(a.row,"keyWord",t)},expression:"scope.row.keyWord"}}):e._e()]}}])}),t("el-table-column",{attrs:{label:"操作",width:"80px"},scopedSlots:e._u([{key:"default",fn:function(a){return[a.row.show?t("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(t){return e.deleteData(a.row.id)}}},[e._v("删除")]):e._e()]}}])})],1)],1),t("el-form-item",{staticStyle:{"text-align":"center"}},[t("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.onSubmit("hight")}}},[e._v("查询")])],1)],1)],1),e.dialogVisible?t("el-dialog",{attrs:{title:"查看",visible:e.dialogVisible,width:"100%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[e.dialogVisible?t("tableView",{attrs:{indexName:e.indexName,formData:e.formData,tableUrl:e.tableUrl,tableType:e.tableType}}):e._e()],1):e._e()],1)])},l=[],i=(a(560),a(6557)),r=a(7683),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"content"},[t("el-table",{staticClass:"table",attrs:{data:e.tableData,height:"100%",border:""}},[t("el-table-column",{attrs:{type:"index",width:"50",label:"序号",index:e.indexMethod}}),e._l(e.thead,(function(e,a){return t("el-table-column",{key:a+e,attrs:{prop:e,label:e}})}))],2),t("el-pagination",{staticStyle:{"margin-top":"10px","text-align":"center"},attrs:{"current-page":e.currentPage,"page-sizes":[5,10,20],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},s=[],d={props:{tableType:{type:String,default:""},formData:{type:Object,default:()=>({})},indexName:{type:String,default:""}},data(){return{thead:[],tableData:[],total:0,currentPage:0,pageSize:5,indexMethod:1}},created(){this.getThead(),this.getInfo()},methods:{getThead(){(0,r.Pw)({indexName:this.indexName}).then((e=>{const{data:t,responseCode:a}=e;if(this.options=[],200==a){var n;const e=(t,a)=>{if(t instanceof Object)for(let l in t)l!=a?e(t[l],a):n=t[l];return n};let a=e(t,"properties");for(let t in a)this.thead.push(t)}}))},getInfo(){let e="hight"==this.tableType?r.gh:r.yC;const t=this.$loading({text:"加载中...",spinner:"el-icon-loading"});e({...this.formData,pageNum:this.currentPage,pageSize:this.pageSize}).then((e=>{const{responseCode:a,responseMsg:n,data:l}=e;200==a?(this.tableData=l.pageList,this.total=l.totalNum,t.close(),this.$message.success(n)):this.$message.error(n)})).catch((e=>{t.close(),console.log(e)}))},handleSizeChange(e){this.pageSize=e,this.getInfo()},handleCurrentChange(e){this.currentPage=e,this.getInfo()}}},u=d,c=a(1001),m=(0,c.Z)(u,o,s,!1,null,"2c1d9561",null),h=m.exports,f={components:{tableView:h},data(){return{formInline:{keyWord:"",indexName:""},formInlines:{indexName:""},formInlinesRules:{indexName:[{required:!0,message:"请选择索引名",trigger:"change"}]},formInlinesRules2:{indexName:[{required:!0,message:"请选择索引名",trigger:"change"}]},activeName:"first",options:[],optionsFirst:[],optionsSeconed:[],tableData:[{id:"1",name:"",value:"",show:!0,keyWord:""},{id:"2",show:!1,name:"",value:"",keyWord:""}],matchOptions:[{value:"关键词查询",label:"关键词查询",disabled:!1,children:[{value:"模糊查询",label:"模糊查询"},{value:"精确查询",label:"精确查询"}]},{value:"范围查询",label:"范围查询",disabled:!1,children:[{value:">=",label:">="},{value:"<=",label:"<="}]}],indexName:"",dialogVisible:!1,formData:{},tableUrl:"",tableType:"",hightIndex:0,hightName:""}},created(){(0,i.ip)().then((e=>{const{responseCode:t,data:a}=e;200==t&&(this.optionsFirst=a,this.optionsSeconed=a)}))},methods:{onSubmit(e){this.$refs["hight"==e?"form2":"form1"].validate((t=>{if(t){this.tableType=e;let t={},a={};if("hight"==e){let e=JSON.parse(JSON.stringify(this.tableData));e.pop(),e.forEach((e=>{"关键词查询"==e?.value[0]?"模糊查询"==e.value[1]?t[e.name]=`*${e.keyWord}*`:t[e.name]=e.keyWord:">="==e.value[1]?a[e.name]=`[${e.keyWord},)`:a[e.name]=`(,${e.keyWord}]`}))}let n="hight"==e?{indexName:this.formInlines.indexName,equalsCondition:t,rangeCondition:a}:this.formInline;this.formData=n,this.indexName=n.indexName,this.dialogVisible=!0}}))},addData(){let e=this.tableData.length-1,t=Number(Math.random().toString().substr(3,e)+Date.now()).toString(36);this.tableData.splice(e,0,{id:t,show:!0,name:"",value:"",keyWord:""})},deleteData(e){this.tableData=this.tableData.filter((t=>t.id!=e))},numMap(e){let t=JSON.parse(JSON.stringify(this.matchOptions)),a=JSON.parse(JSON.stringify(this.tableData)),n=a.map((e=>e.name)),l={};for(let i=0;i<n.length;i++)n[i]&&(l[n[i]]=l[n[i]]+1||1);for(let i in l)if(l[i]>2)t.forEach((e=>{e.disabled=!0}));else if(2==l[i]&&i==this.hightName){let e=a.find((e=>e.name==this.hightName));e.id!=this.hightIndex?t.forEach((t=>{t.value==e?.value[0]&&(t.disabled=!0)})):t.forEach((t=>{t.value==e?.value[0]?t.disabled=!1:a.forEach((a=>{a.name==e.name&&a.id!=e.id&&t.value==a?.value[0]&&(t.disabled=!0)}))}))}return t},change(){this.tableData=[{id:"1",name:"",value:"",show:!0,keyWord:""},{id:"2",show:!1,name:"",value:"",keyWord:""}],(0,r.Pw)({indexName:this.formInlines.indexName}).then((e=>{const{data:t,responseCode:a}=e;if(this.options=[],200==a){var n;const e=(t,a)=>{if(t instanceof Object)for(let l in t)l!=a?e(t[l],a):n=t[l];return n};let a=e(t,"properties");for(let t in a)this.options.push({value:t,label:t})}}))},tableHeaderStyle({row:e,column:t,rowIndex:a}){if(0===a)return"padding:0px"},tableCellClassName({row:e,column:t,rowIndex:a,columnIndex:n}){e.index=a,t.index=n},cellClick(e){this.hightIndex=e.id,this.hightName=e.name},handleChange(){}}},p=f,b=(0,c.Z)(p,n,l,!1,null,"6a142ec8",null),g=b.exports},6557:function(e,t,a){a.d(t,{HI:function(){return i},RR:function(){return c},TB:function(){return l},VK:function(){return u},Vb:function(){return r},go:function(){return d},ip:function(){return o},jG:function(){return s}});var n=a(4471);function l(e){return(0,n.Z)({url:"dataTrans/csvTransBulk",method:"POST",data:e})}function i(e){return(0,n.Z)({url:"dataTrans/csvFoldToEs",method:"POST",data:e})}function r(e){return(0,n.Z)({url:"dataTrans/csvDeepFoldToEs",method:"POST",data:e})}function o(){return(0,n.Z)({url:"/index/listAllIndices",method:"get"})}function s(e){return(0,n.Z)({url:"dataTrans/csvLine",method:"POST",params:e})}function d(e){return(0,n.Z)({url:"task/getAll",method:"get",params:e})}function u(e){return(0,n.Z)({url:"/task/delete",method:"delete",params:e})}function c(e){return(0,n.Z)({url:"task/rerun",method:"post",params:e})}},7683:function(e,t,a){a.d(t,{Pw:function(){return l},gh:function(){return r},yC:function(){return i}});var n=a(4471);function l(e){return(0,n.Z)({url:"index/listMapping",method:"POST",params:e})}function i(e){return(0,n.Z)({url:"query/search",method:"POST",data:e})}function r(e){return(0,n.Z)({url:"query/highSearch",method:"POST",data:e})}}}]);