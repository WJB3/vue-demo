(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{663:function(e,t,a){"use strict";a(40),a(41),a(37),a(35),a(38),a(39),a(3),a(17),a(18),a(6),a(11)},665:function(e,t,a){"use strict";var n=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer-toolbar",style:{width:this.width}},[t("div",{staticClass:"right"},[this._t("default")],2)])};n._withStripped=!0;var i={data:function(){return{width:void 0}},mounted:function(){window.addEventListener("resize",this.resizeFooterToolbar),this.resizeFooterToolbar()},unmounted:function(){window.removeEventListener("resize",this.resizeFooterToolbar)},methods:{resizeFooterToolbar:function(){var e=document.querySelector(".ant-layout-sider");if(null!=e){var t="calc(100% - ".concat(e.style.width,")");t!==this.width&&(this.width=t)}}}},r=(a(671),a(13)),o=Object(r.a)(i,n,[],!1,null,"4c73d512",null);o.options.__file="src/component/footer-toolbar/index.vue";t.a=o.exports},666:function(e,t,a){},671:function(e,t,a){"use strict";var n=a(666);a.n(n).a},675:function(e,t,a){},676:function(e,t,a){},701:function(e,t,a){"use strict";var n=a(675);a.n(n).a},702:function(e,t,a){"use strict";var n=a(676);a.n(n).a},729:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-tabs",{attrs:{type:"editable-card"},on:{edit:e.onEdit},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},[a("a-tab-pane",{key:"list",attrs:{tab:"列表",closable:e.listClosable}},[a("div",{staticClass:"wrap_table"},[a("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:e.handleAddCompany}},[e._v("新建公司信息")]),e._v(" "),a("i-table")],1)]),e._v(" "),e._l(e.panes,(function(t){return a("a-tab-pane",{key:t.key,attrs:{tab:t.title,closable:t.closable}},[a("div",{domProps:{innerHTML:e._s(t.content)}}),e._v(" "),t.isForm?a("i-form"):e._e()],1)}))],2)};n._withStripped=!0;var i=function(){var e=this.$createElement;return(this._self._c||e)("a-table",{attrs:{bordered:"",dataSource:this.dataSource,columns:this.columns}})};i._withStripped=!0;var r={data:function(){return{dataSource:[{key:"0",name:"上海畅为有限公司",desc:"打造中国PPE外包服务第一品牌",imgurl:"http://www.baidu.com"}],columns:[{title:"公司名",dataIndex:"name"},{title:"描述",dataIndex:"desc"},{title:"图片地址",dataIndex:"imgurl"}]}}},o=a(13),s=Object(o.a)(r,i,[],!1,null,null,null);s.options.__file="src/pages/info/table.vue";var l=s.exports,c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-form",{attrs:{form:e.form}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"公司名称:","label-col":{span:5},"wrapper-col":{span:12}}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入公司名称!"}]}],expression:"[\n              `name`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入公司名称!',\n                  },\n                ],\n              },\n            ]"}],attrs:{placeholder:"请输入公司名称"}})],1)],1),e._v(" "),a("a-col",{attrs:{span:8}},[a("a-form-item",{attrs:{label:"公司图片:","label-col":{span:5},"wrapper-col":{span:12}}},[a("a-upload",{directives:[{name:"decorator",rawName:"v-decorator",value:["imgurl",{rules:[{required:!0,message:"请输入公司图片!"}]}],expression:"[\n              `imgurl`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入公司图片!',\n                  },\n                ],\n              },\n            ]"}],staticClass:"avatar-uploader",attrs:{name:"upload_file",listType:"picture-card",beforeUpload:e.beforeUpload,headers:e.headers,action:"/file",placeholder:"请输入公司图片"},on:{change:e.handleChangeImage}},[e.imageUrl?a("img",{attrs:{src:e.imageUrl,alt:"avatar"}}):a("div",{staticClass:"image_margin"},[a("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),e._v(" "),a("div",{staticClass:"ant-upload-text"},[e._v("Upload")])],1)])],1)],1)],1)],1),e._v(" "),a("footer-toolbar",[a("a-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("确定")])],1)],1)};c._withStripped=!0;a(663);var u=a(665);a(78);var d={data:function(){return{form:this.$form.createForm(this),imageUrl:"",loading:!1,headers:{}}},components:{FooterToolbar:u.a},methods:{beforeUpload:function(e){var t=e.type.indexOf("image/")>-1;t||this.$message.error("You can only upload JPG file!");var a=e.size/1024/1024<2;return a||this.$message.error("Image must smaller than 2MB!"),t&&a},handleChangeImage:function(e){var t,a,n,i=this;"uploading"!==e.file.status?"done"===e.file.status&&(t=e.file.originFileObj,a=function(e){i.imageUrl=e,i.loading=!1},(n=new FileReader).addEventListener("load",(function(){return a(n.result)})),n.readAsDataURL(t)):this.loading=!0},customRequest:function(e){}}},p=(a(701),Object(o.a)(d,c,[],!1,null,null,null));p.options.__file="src/pages/info/form.vue";var m={data:function(){return{activeKey:"list",panes:[],listClosable:!1}},components:{iTable:l,iForm:p.exports},mounted:function(){},methods:{handleAddCompany:function(){var e=this.panes;e.push({title:"添加公司信息",content:"<div></div>",key:"newTabForm",isForm:!0}),this.panes=e,this.activeKey="newTabForm"},onEdit:function(e,t){this["".concat(t,"Tab")](e)},addTab:function(){var e=this.panes,t="newTab".concat(this.newTabIndex++);e.push({title:"NEW Tab",content:"Content of new Tab",key:t}),this.panes=e,this.activeKey=t},removeTab:function(e){var t,a=this.activeKey;this.panes.forEach((function(a,n){a.key===e&&(t=n-1)}));var n=this.panes.filter((function(t){return t.key!==e}));n.length&&a===e&&(t>=0?activekey=n[t].key:a="list"),0===n.length&&(a="list"),this.panes=n,this.activeKey=a}}},f=(a(702),Object(o.a)(m,n,[],!1,null,"2c52dd96",null));f.options.__file="src/pages/info/index.vue";t.default=f.exports}}]);
//# sourceMappingURL=2.d6e91300d1cfcefc09e7.js.map