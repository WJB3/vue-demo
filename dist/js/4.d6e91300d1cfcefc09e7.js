(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{668:function(e,t,n){"use strict";var a=function(){var e=this.$createElement;return(this._self._c||e)("div",{style:{height:this.height}})};a._withStripped=!0;var i={props:{height:{default:"50px"}}},r=n(13),s=Object(r.a)(i,a,[],!1,null,null,null);s.options.__file="src/component/white-space/index.vue";t.a=s.exports},686:function(e,t,n){},687:function(e,t,n){},688:function(e,t,n){},712:function(e,t,n){"use strict";var a=n(686);n.n(a).a},713:function(e,t,n){"use strict";var a=n(687);n.n(a).a},714:function(e,t,n){"use strict";var a=n(688);n.n(a).a},724:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-tabs",{staticClass:"a_tab",attrs:{type:"editable-card"},on:{edit:e.onEdit},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},[n("a-tab-pane",{key:"list",attrs:{tab:"列表",closable:e.listClosable}},[n("div",{staticClass:"wrap_table"},[n("a-input-search",{staticClass:"search_input",attrs:{placeholder:"搜索..."}}),e._v(" "),n("white-space",{attrs:{height:"30px"}}),e._v(" "),n("i-table",{attrs:{data:e.data,pagination:e.pagination,loading:e.loading},on:{onEdit:e.handleEdit,onView:e.handleView}}),e._v(" "),n("i-modal",{attrs:{visible:e.visible}})],1)]),e._v(" "),e._l(e.panes,(function(t){return n("a-tab-pane",{key:t.key,attrs:{tab:t.title,closable:t.closable}},[n("div",{domProps:{innerHTML:e._s(t.content)}}),e._v(" "),t.isForm?n("i-form",{attrs:{current:e.current,type:e.type},on:{onAddSuccess:e.handleAddSuccess,onEditSuccess:e.handleEditSuccess}}):e._e()],1)}))],2)};a._withStripped=!0;var i=function(){var e=this,t=e.$createElement;return(e._self._c||t)("custom-table",{attrs:{data:e.data,pagination:e.pagination,loading:e.loading,columns:e.columns,size:"default",bordered:"",rowKey:"uuid"},on:{onEdit:e.handleEdit,onView:e.handleView,onDelete:e.handleDelete,onTableChange:e.handleTableChange}})};i._withStripped=!0;n(40),n(41);var r=n(17),s=n.n(r);n(37),n(35),n(38),n(39);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var l={data:function(){return{searchInput:null,searchText:"",columns:[{title:"姓名",dataIndex:"name",width:200,filter:!0},{title:"手机号兼用户",dataIndex:"phone",width:150},{title:"密码",dataIndex:"password",width:100},{title:"用户头像",dataIndex:"img",width:300},{title:"公司营业执照",dataIndex:"gsimg",width:300},{title:"公司地址",dataIndex:"comaddress",width:100}]}},components:{CustomTable:n(662).a},props:["data","pagination","loading"],methods:{filterData:function(e){var t={};return Object.keys(e).forEach((function(n){t[n]=e[n][0]})),t},handleTableChange:function(e,t,n){var a=this.filterData(t);this.$store.dispatch("brand/getList",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({page:e.current-1},a))},handleDelete:function(e){var t=this,n=new FormData;n.append("uuid",e.uuid),this.$confirm({title:"确定删除此品牌吗？",content:"品牌一旦删除不可恢复",okText:"确定",okType:"danger",cancelText:"取消",onOk:function(){t.$store.dispatch("brand/delete",n)},onCancel:function(){}})},handleEdit:function(e){this.$emit("onEdit",e)},handleView:function(e){this.$emit("onView",e)}},mounted:function(){}},c=(n(712),n(13)),d=Object(c.a)(l,i,[],!1,null,null,null);d.options.__file="src/pages/staff/table.vue";var u=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{attrs:{bordered:e.bordered}},[n("a-form",{attrs:{form:e.form}},[n("a-row",{attrs:{gutter:{md:8,lg:24,xl:48}}},[n("a-col",{attrs:{span:8}},[n("a-form-item",{attrs:{label:"品牌名称:","label-col":{span:24},"wrapper-col":{span:24}}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入品牌名称!"}],initialValue:e.current.name}],expression:"[\n              `name`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入品牌名称!',\n                  },\n                  \n                ],\n                initialValue:current.name\n              },\n            ]"}],attrs:{disabled:e.disabled,placeholder:"请输入品牌名称"}})],1)],1),e._v(" "),n("a-col",{attrs:{span:8}},[n("a-form-item",{attrs:{label:"品牌图片:","label-col":{span:24},"wrapper-col":{span:24}}},[n("file-uploader",{directives:[{name:"decorator",rawName:"v-decorator",value:["imgurl",{rules:[{required:!0,message:"请输入公司图片!"}],initialValue:e.current.imgurl}],expression:"[\n              `imgurl`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入公司图片!',\n                  },\n                ],\n                initialValue:current.imgurl\n              },\n            ]"}],attrs:{name:"品牌图片"}})],1)],1),e._v(" "),n("a-col",{attrs:{span:8}},[n("a-form-item",{attrs:{label:"优先级:","label-col":{span:24},"wrapper-col":{span:24}}},[n("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["aindex",{rules:[{required:!0,message:"请输入优先级!"}],initialValue:e.current.aindex}],expression:"[\n              `aindex`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入优先级!',\n                  },\n                   \n                ],\n                initialValue:current.aindex\n              },\n            ]"}],staticClass:"input_number",attrs:{disabled:e.disabled,placeholder:"请输入公司名称"}})],1)],1)],1)],1),e._v(" "),n("footer-toolbar",[n("a-button",{attrs:{type:"primary",disabled:e.disabled},on:{click:e.handleSubmit}},[e._v("确定")])],1)],1)};p._withStripped=!0;n(661),n(663);var h=n(665),m=n(667),b=n(664),f=(n(78),{data:function(){return{form:this.$form.createForm(this),imageUrl:this.current.imgurl?this.current.imgurl:"",loading:!1,headers:{},disabled:"VIEW"===this.type,bordered:!1}},components:{FooterToolbar:h.a,FileUploader:m.a,PopSelectBrand:b.a},mounted:function(){},props:["current","type"],methods:{customRequest:function(e){},handleSubmit:function(){var e=this;this.form.validateFields((function(t,n){if(!t){var a=n,i=e.current.uuid,r=new FormData;r.append("name",a.name),r.append("imgurl",a.imgurl),r.append("aindex",a.aindex),"ADD"===e.type?e.$store.dispatch("brand/add",r).then((function(t){console.log(t),t&&e.$emit("onAddSuccess")})):"EDIT"===e.type&&(console.log("EDIT"),r.append("uuid",i),e.$store.dispatch("brand/edit",r).then((function(t){t&&e.$emit("onEditSuccess")})))}}))}}}),v=(n(713),Object(c.a)(f,p,[],!1,null,null,null));v.options.__file="src/pages/staff/form.vue";var g=v.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{title:"查看品牌"},on:{cancel:e.handleCancel},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("template",{slot:"footer"},[n("a-button",{on:{click:e.handleCancel}},[e._v("取消")])],1)],2)};w._withStripped=!0;var y={props:["visible"],mounted:function(){},methods:{handleCancel:function(){this.$store.commit("brand/updateState",{visible:!1})}}},_=Object(c.a)(y,w,[],!1,null,null,null);_.options.__file="src/pages/staff/modal.vue";var x=_.exports,T=n(668),E=n(22),O={data:function(){return{activeKey:"list",panes:[],listClosable:!1}},computed:Object(E.b)({data:function(e){return e.brand.data},pagination:function(e){return e.brand.pagination},type:function(e){return e.brand.type},current:function(e){return e.brand.current},visible:function(e){return e.brand.visible},loading:function(e){return e.brand.loading},searchText:function(e){return e.brand.searchText}}),components:{iTable:u,iForm:g,iModal:x,WhiteSpace:T.a},mounted:function(){this.getList()},methods:{getList:function(){this.$store.dispatch("brand/getList",{})},handleView:function(e){this.$store.commit("brand/updateState",{type:"VIEW",current:e});var t=this.panes;t.push({title:"查看品牌",content:"<div></div>",key:"newTabForm",isForm:!0}),this.panes=t,this.activeKey="newTabForm"},handleEdit:function(e){this.$store.commit("brand/updateState",{type:"EDIT",current:e});var t=this.panes;t.push({title:"编辑品牌",content:"<div></div>",key:"newTabForm",isForm:!0}),this.panes=t,this.activeKey="newTabForm"},handleAddBrand:function(){var e=this.panes;e.push({title:"添加品牌",content:"<div></div>",key:"newTabForm",isForm:!0}),this.panes=e,this.activeKey="newTabForm"},onEdit:function(e,t){this["".concat(t,"Tab")](e)},addTab:function(){var e=this.panes,t="newTab".concat(this.newTabIndex++);e.push({title:"NEW Tab",content:"Content of new Tab",key:t}),this.panes=e,this.activeKey=t},handleAddSuccess:function(){this.$message.success("添加品牌成功!"),this.removeTab("newTabForm")},handleEditSuccess:function(){this.$message.success("编辑品牌成功!"),this.removeTab("newTabForm")},removeTab:function(e){var t,n=this.activeKey;this.panes.forEach((function(n,a){n.key===e&&(t=a-1)}));var a=this.panes.filter((function(t){return t.key!==e}));a.length&&n===e&&(t>=0?activekey=a[t].key:n="list"),0===a.length&&(n="list"),this.$store.commit("brand/updateState",{type:"ADD",current:{}}),this.panes=a,this.activeKey=n}}},S=(n(714),Object(c.a)(O,a,[],!1,null,"a4f2aee2",null));S.options.__file="src/pages/staff/index.vue";t.default=S.exports}}]);
//# sourceMappingURL=4.d6e91300d1cfcefc09e7.js.map