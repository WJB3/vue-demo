(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{668:function(e,t,n){"use strict";var a=function(){var e=this.$createElement;return(this._self._c||e)("div",{style:{height:this.height}})};a._withStripped=!0;var r={props:{height:{default:"50px"}}},i=n(13),o=Object(i.a)(r,a,[],!1,null,null,null);o.options.__file="src/component/white-space/index.vue";t.a=o.exports},683:function(e,t,n){},684:function(e,t,n){},685:function(e,t,n){},709:function(e,t,n){"use strict";var a=n(683);n.n(a).a},710:function(e,t,n){"use strict";var a=n(684);n.n(a).a},711:function(e,t,n){"use strict";var a=n(685);n.n(a).a},722:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-tabs",{staticClass:"a_tab",attrs:{type:"editable-card"},on:{edit:e.onEdit},model:{value:e.activeKey,callback:function(t){e.activeKey=t},expression:"activeKey"}},[n("a-tab-pane",{key:"list",attrs:{tab:"列表",closable:e.listClosable}},[n("div",{staticClass:"wrap_table"},[n("a-button",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"primary"},on:{click:e.handleAddTrade}},[e._v("新建商品")]),e._v(" "),n("a-row",{attrs:{gutter:{md:8,lg:24,xl:48}}},[n("a-col",{attrs:{span:12}},[n("a-form-item",{attrs:{label:"品牌","label-col":{span:24},"wrapper-col":{span:24}}},[n("pop-select-brand",{attrs:{value:e.emptyObject},on:{change:e.handleChangeBrand}})],1)],1),e._v(" "),n("a-col",{attrs:{span:12}},[n("a-form-item",{attrs:{label:"型号","label-col":{span:24},"wrapper-col":{span:24}}},[n("pop-select-model",{attrs:{value:e.emptyObject,parameter:{brand_id:e.brand_id}},on:{change:e.handleChangeModel}})],1)],1)],1),e._v(" "),n("i-table",{attrs:{data:e.data,pagination:e.pagination,loading:e.loading},on:{onEdit:e.handleEdit,onView:e.handleView}}),e._v(" "),n("i-modal",{attrs:{visible:e.visible}})],1)]),e._v(" "),e._l(e.panes,(function(t){return n("a-tab-pane",{key:t.key,attrs:{tab:t.title,closable:t.closable}},[n("div",{domProps:{innerHTML:e._s(t.content)}}),e._v(" "),t.isForm?n("i-form",{attrs:{current:e.current,type:e.type},on:{onAddSuccess:e.handleAddSuccess,onEditSuccess:e.handleEditSuccess}}):e._e()],1)}))],2)};a._withStripped=!0;n(40),n(41),n(37),n(35),n(38),n(39);var r=n(17),i=n.n(r),o=function(){var e=this,t=e.$createElement;return(e._self._c||t)("custom-table",{attrs:{data:e.data,pagination:e.pagination,loading:e.loading,columns:e.columns,size:"default",bordered:"",rowKey:"uuid"},on:{onEdit:e.handleEdit,onView:e.handleView,onDelete:e.handleDelete,onTableChange:e.handleTableChange}})};o._withStripped=!0;var s=n(662);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var d={data:function(){return{searchInput:null,searchText:"",columns:[{title:"商品名称",dataIndex:"name",width:150,filter:!0},{title:"商品编号",dataIndex:"goodsnumber",width:150,filter:!0},{title:"积分值",dataIndex:"jfcount",width:100,filter:!0},{title:"库存数量",dataIndex:"stock",width:150,filter:!0},{title:"优惠券名称",dataIndex:"couponname",width:150,filter:!0},{title:"品牌",dataIndex:"brandname",width:150,filter:!0},{title:"型号",dataIndex:"model",width:150,filter:!0},{title:"描述",dataIndex:"descs",width:150,filter:!0},{title:"操作",dataIndex:"action",key:"action",fixed:"right",width:170,action:!0}]}},components:{CustomTable:s.a},props:["data","pagination","loading"],methods:{filterData:function(e){var t={};return Object.keys(e).forEach((function(n){t[n]=e[n][0]})),t},handleTableChange:function(e,t,n){var a=this.filterData(t);this.$store.dispatch("trade/getList",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({page:e.current-1},a))},handleDelete:function(e){var t=this,n=new FormData;n.append("uuid",e.goodsid),this.$confirm({title:"确定删除此商品吗？",content:"商品一旦删除不可恢复",okText:"确定",okType:"danger",cancelText:"取消",onOk:function(){t.$store.dispatch("trade/delete",n)},onCancel:function(){}})},handleEdit:function(e){this.$emit("onEdit",e)},handleView:function(e){this.$emit("onView",e)}},mounted:function(){}},c=(n(709),n(13)),u=Object(c.a)(d,o,[],!1,null,null,null);u.options.__file="src/pages/trade/table.vue";var p=u.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{attrs:{bordered:e.bordered}},[n("a-form",{attrs:{form:e.form}},[n("a-row",{attrs:{gutter:{md:8,lg:24,xl:48}}},[n("a-col",{attrs:{span:8}},[n("a-form-item",{attrs:{label:"商品名称:","label-col":{span:24},"wrapper-col":{span:24}}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入商品名称!"}],initialValue:e.current.name}],expression:"[\n              `name`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入商品名称!',\n                  },\n                  \n                ],\n                initialValue:current.name\n              },\n            ]"}],attrs:{disabled:e.disabled,placeholder:"请输入品牌名称"}})],1)],1),e._v(" "),n("a-col",{attrs:{span:8}},[n("a-form-item",{attrs:{label:"商品编号:","label-col":{span:24},"wrapper-col":{span:24}}},[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["goodsnumber",{rules:[{required:!0,message:"请输入商品编号!"}],initialValue:e.current.goodsnumber}],expression:"[\n              `goodsnumber`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入商品编号!',\n                  },\n                  \n                ],\n                initialValue:current.goodsnumber\n              },\n            ]"}],attrs:{disabled:e.disabled,placeholder:"请输入编号名称"}})],1)],1),e._v(" "),n("a-col",{attrs:{span:8}},[n("a-form-item",{attrs:{label:"商品图片:","label-col":{span:24},"wrapper-col":{span:24}}},[n("file-uploader",{directives:[{name:"decorator",rawName:"v-decorator",value:["imgurl",{rules:[{required:!0,message:"请输入商品图片!"}],initialValue:e.current.imgurl}],expression:"[\n              `imgurl`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入商品图片!',\n                  },\n                ],\n                initialValue:current.imgurl\n              },\n            ]"}],attrs:{name:"商品图片"}})],1)],1)],1),e._v(" "),n("a-row",{attrs:{gutter:{md:8,lg:24,xl:48}}},[n("a-col",{attrs:{span:8}},[n("a-form-item",{attrs:{label:"价格:","label-col":{span:24},"wrapper-col":{span:24}}},[n("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["price",{rules:[{required:!0,message:"请输入价格!"}],initialValue:e.current.price}],expression:"[\n              `price`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入价格!',\n                  },\n                   \n                ],\n                initialValue:current.price\n              },\n            ]"}],staticClass:"input_number",attrs:{disabled:e.disabled,placeholder:"请输入价格"}})],1)],1),e._v(" "),n("a-col",{attrs:{span:8}},[n("a-form-item",{attrs:{label:"积分值:","label-col":{span:24},"wrapper-col":{span:24}}},[n("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["jfcount",{rules:[{required:!0,message:"请输入积分值!"}],initialValue:e.current.jfcount}],expression:"[\n              `jfcount`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入积分值!',\n                  },\n                   \n                ],\n                initialValue:current.jfcount\n              },\n            ]"}],staticClass:"input_number",attrs:{disabled:e.disabled,placeholder:"请输入积分值"}})],1)],1),e._v(" "),n("a-col",{attrs:{span:8}},[n("a-form-item",{attrs:{label:"库存数量:","label-col":{span:24},"wrapper-col":{span:24}}},[n("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["stock",{rules:[{required:!0,message:"请输入库存数量!"}],initialValue:e.current.stock}],expression:"[\n              `stock`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入库存数量!',\n                  },\n                   \n                ],\n                initialValue:current.stock\n              },\n            ]"}],staticClass:"input_number",attrs:{disabled:e.disabled,placeholder:"请输入库存数量"}})],1)],1)],1),e._v(" "),n("a-row",{attrs:{gutter:{md:8,lg:24,xl:48}}},[n("a-col",{attrs:{span:8}},[n("a-form-item",{attrs:{label:"优惠券","label-col":{span:24},"wrapper-col":{span:24}}},[n("pop-select-discount",{directives:[{name:"decorator",rawName:"v-decorator",value:["discount",{rules:[{required:!0,message:"请输入优惠券!"}],initialValue:e.initialDiscount}],expression:"[\n              `discount`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入优惠券!',\n                  },\n                  \n                ],\n                initialValue:initialDiscount\n              },\n            ]"}],staticClass:"discount",attrs:{disabled:e.disabled,placeholder:"请输入优惠券"}})],1)],1),e._v(" "),n("a-col",{attrs:{span:8}},[n("a-form-item",{attrs:{label:"是否是特价产品","label-col":{span:24},"wrapper-col":{span:24}}},[n("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["tjgoods",{rules:[{required:!0,message:"请输入是否是特价产品!"}],initialValue:e.current.tjgoods||0}],expression:"[\n              `tjgoods`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入是否是特价产品!',\n                  },\n                  \n                ],\n                initialValue:current.tjgoods||0\n              },\n            ]"}],attrs:{name:"radioGroup",disabled:e.disabled,placeholder:"请输入是否是特价产品"}},[n("a-radio",{attrs:{value:0}},[e._v("否")]),e._v(" "),n("a-radio",{attrs:{value:1}},[e._v("是")])],1)],1)],1),e._v(" "),n("a-col",{attrs:{span:8}},[n("a-form-item",{attrs:{label:"是否是库存处理产品","label-col":{span:24},"wrapper-col":{span:24}}},[n("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["kcgoods",{rules:[{required:!0,message:"请输入是否是库存处理产品!"}],initialValue:e.current.kcgoods||0}],expression:"[\n              `kcgoods`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入是否是库存处理产品!',\n                  },\n                  \n                ],\n                initialValue:current.kcgoods||0\n              },\n            ]"}],attrs:{name:"radioGroup",disabled:e.disabled,placeholder:"请输入是否是库存处理产品"}},[n("a-radio",{attrs:{value:0}},[e._v("否")]),e._v(" "),n("a-radio",{attrs:{value:1}},[e._v("是")])],1)],1)],1)],1),e._v(" "),n("a-row",{attrs:{gutter:{md:8,lg:24,xl:48}}},[n("a-col",{attrs:{span:8}},[n("a-form-item",{attrs:{label:"品牌","label-col":{span:24},"wrapper-col":{span:24}}},[n("pop-select-brand",{directives:[{name:"decorator",rawName:"v-decorator",value:["brand",{rules:[{required:!0,message:"请输入品牌!"}],initialValue:e.initialBrand}],expression:"[\n              `brand`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入品牌!',\n                  },\n                  \n                ],\n                initialValue:initialBrand\n              },\n            ]"}],staticClass:"brand",attrs:{disabled:e.disabled,placeholder:"请输入品牌"},on:{change:e.handleChangeBrand}})],1)],1),e._v(" "),n("a-col",{attrs:{span:8}},[n("a-form-item",{attrs:{label:"型号","label-col":{span:24},"wrapper-col":{span:24}}},[n("pop-select-model",{directives:[{name:"decorator",rawName:"v-decorator",value:["model",{rules:[{required:!0,message:"请输入型号!"}],initialValue:e.initialModel}],expression:"[\n              `model`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入型号!',\n                  },\n                  \n                ],\n                initialValue:initialModel\n              },\n            ]"}],staticClass:"model",attrs:{disabled:e.disabled,parameter:{brand_id:e.brand_id},placeholder:"请输入型号"}})],1)],1),e._v(" "),n("a-col",{attrs:{span:8}},[n("a-form-item",{attrs:{label:"描述","label-col":{span:24},"wrapper-col":{span:24}}},[n("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["descs",{rules:[{required:!0,message:"请输入描述!"}],initialValue:e.current.descs}],expression:"[\n              `descs`,\n              {\n                rules: [\n                  {\n                    required: true,\n                    message: '请输入描述!',\n                  },\n                   \n                ],\n                initialValue:current.descs\n              },\n            ]"}],staticClass:"descs",attrs:{disabled:e.disabled}})],1)],1)],1)],1),e._v(" "),n("footer-toolbar",[n("a-button",{attrs:{type:"primary",disabled:e.disabled},on:{click:e.handleSubmit}},[e._v("确定")])],1)],1)};m._withStripped=!0;n(661),n(663);var h=n(665),b=n(667),f=n(664),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-popover",{attrs:{trigger:"click"},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{style:{width:e.width}},[n("custom-table",{attrs:{columns:e.columns,data:e.data,pagination:e.pagination,loading:e.loading,size:"small",rowKey:"uuid",showConfirm:e.showConfirm},on:{onTableChange:e.handleTableChange,onConfirm:e.handleConfirm}})],1)]),e._v(" "),n("a-input",{attrs:{disabled:e.disabled},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)};v._withStripped=!0;var g=n(22);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={data:function(){return{current:{},columns:[{title:"优惠券名称",dataIndex:"name",width:150,filter:!0},{title:"满减值",dataIndex:"fullred",width:200,filter:!0},{title:"减多少",dataIndex:"red",width:200,filter:!0}],width:"500px",name:this.value.name,visible:!1,showConfirm:!0}},components:{CustomTable:s.a},computed:Object(g.b)({data:function(e){return e.discount.data},pagination:function(e){return e.discount.pagination},loading:function(e){return e.discount.loading}}),props:{value:{type:[Object]},disabled:{default:!1}},mounted:function(){this.value.id&&this.$emit("change",{id:this.value.id,name:this.value.name}),this.$store.dispatch("discount/getList"),this.width=this.columns.reduce((function(e,t){return e+(t.width||t.width_custom)}),0)+50},methods:{handleTableChange:function(e,t,n){var a=this.filterData(t);this.$store.dispatch("discount/getList",y({page:e.current-1},a))},filterData:function(e){var t={};return Object.keys(e).forEach((function(n){t[n]=e[n][0]})),t},handleConfirm:function(e){this.current=e,this.name=e.uuid?e.name:"",this.visible=!1,this.$emit("change",y({},e,{id:e.uuid}))}}},O=Object(c.a)(_,v,[],!1,null,null,null);O.options.__file="src/component/pop-select-discount/index.vue";var j=O.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-popover",{attrs:{trigger:"click"},on:{visibleChange:e.handleVisibleChange},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{style:{width:e.width}},[n("custom-table",{attrs:{columns:e.columns,data:e.data,pagination:e.pagination,loading:e.loading,size:"small",rowKey:"uuid",showConfirm:e.showConfirm},on:{onTableChange:e.handleTableChange,onConfirm:e.handleConfirm}})],1)]),e._v(" "),n("a-input",{attrs:{disabled:e.disabled},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}x._withStripped=!0;var T={data:function(){return{current:{},columns:[{title:"型号名",dataIndex:"name",width:200,filter:!0}],width:"500px",name:this.value.name,visible:!1,showConfirm:!0}},components:{CustomTable:s.a},computed:Object(g.b)({data:function(e){return e.model.data},pagination:function(e){return e.model.pagination},loading:function(e){return e.model.loading}}),props:{value:{type:[Object]},parameter:{type:[Object]},disabled:{default:!1}},mounted:function(){this.value.id&&this.$emit("change",{id:this.value.id,name:this.value.name}),this.width=this.columns.reduce((function(e,t){return e+(t.width||t.width_custom)}),0)+50},methods:{handleVisibleChange:function(e){if(e){var t=this.parameter.brand_id;t||this.$message.info("您未选择品牌！请选择！"),this.$store.dispatch("model/getList",{brandid:t})}},handleTableChange:function(e,t,n){var a=this.filterData(t);this.$store.dispatch("model/getList",k({page:e.current-1},a))},filterData:function(e){var t={};return Object.keys(e).forEach((function(n){t[n]=e[n][0]})),t},handleConfirm:function(e){this.current=e,this.name=e.uuid?e.name:"",this.visible=!1,this.$emit("change",k({},e,{id:e.uuid}))}}},D=Object(c.a)(T,x,[],!1,null,null,null);D.options.__file="src/component/pop-select-model/index.vue";var E=D.exports,P=(n(78),{data:function(){return{form:this.$form.createForm(this),imageUrl:this.current.imgurl?this.current.imgurl:"",loading:!1,headers:{},disabled:"VIEW"===this.type,bordered:!1,initialDiscount:this.current.brandid?{id:this.current.couponid,name:this.current.couponname}:{id:"",name:""},initialBrand:this.current.brandid?{id:this.current.brandid,name:this.current.brandname}:{id:"",name:""},initialModel:this.current.typeid?{id:this.current.typeid,name:this.current.typename}:{id:"",name:""},brand_id:""}},components:{FooterToolbar:h.a,FileUploader:b.a,PopSelectBrand:f.a,PopSelectDiscount:j,PopSelectModel:E},mounted:function(){},props:["current","type"],methods:{customRequest:function(e){},handleSubmit:function(){var e=this;this.form.validateFields((function(t,n){if(!t){var a=n,r=e.current,i=(r.uuid,r.goodsid),o=new FormData;o.append("name",a.name),o.append("goodsnumber",a.goodsnumber),o.append("imgurl",a.imgurl),o.append("price",a.price),o.append("jfcount",a.jfcount),o.append("stock",a.stock),o.append("couponid",a.discount.id),o.append("tjgoods",a.tjgoods),o.append("kcgoods",a.kcgoods),o.append("brandid",a.brand.id),o.append("typeid",a.model.id),o.append("descs",a.descs),"ADD"===e.type?e.$store.dispatch("trade/add",o).then((function(t){console.log(t),t&&e.$emit("onAddSuccess")})):"EDIT"===e.type&&(console.log("EDIT"),o.append("uuid",i),e.$store.dispatch("trade/edit",o).then((function(t){t&&e.$emit("onEditSuccess")})))}}))},handleChangeBrand:function(e){this.brand_id=e.id}}}),S=(n(710),Object(c.a)(P,m,[],!1,null,null,null));S.options.__file="src/pages/trade/form.vue";var V=S.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{attrs:{title:"查看品牌"},on:{cancel:e.handleCancel},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("template",{slot:"footer"},[n("a-button",{on:{click:e.handleCancel}},[e._v("取消")])],1)],2)};$._withStripped=!0;var q={props:["visible"],mounted:function(){},methods:{handleCancel:function(){this.$store.commit("trade/updateState",{visible:!1})}}},I=Object(c.a)(q,$,[],!1,null,null,null);I.options.__file="src/pages/trade/modal.vue";var F=I.exports,K=n(668);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var B={data:function(){return{activeKey:"list",panes:[],listClosable:!1,emptyObject:{id:"",name:""},brand_id:""}},computed:Object(g.b)({data:function(e){return e.trade.data},pagination:function(e){return e.trade.pagination},type:function(e){return e.trade.type},current:function(e){return e.trade.current},visible:function(e){return e.trade.visible},loading:function(e){return e.trade.loading},searchText:function(e){return e.trade.searchText}}),components:{iTable:p,iForm:V,iModal:F,PopSelectBrand:f.a,PopSelectModel:E,WhiteSpace:K.a},mounted:function(){},methods:{getList:function(e){this.$store.dispatch("trade/getList",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(n,!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))},handleChangeBrand:function(e){this.brand_id=e.id},handleChangeModel:function(e){this.getList({typeid:e.id})},handleView:function(e){this.$store.commit("trade/updateState",{type:"VIEW",current:e});var t=this.panes;t.push({title:"查看商品",content:"<div></div>",key:"newTabForm",isForm:!0}),this.panes=t,this.activeKey="newTabForm"},handleEdit:function(e){this.$store.commit("trade/updateState",{type:"EDIT",current:e});var t=this.panes;t.push({title:"编辑商品",content:"<div></div>",key:"newTabForm",isForm:!0}),this.panes=t,this.activeKey="newTabForm"},handleAddTrade:function(){var e=this.panes;e.push({title:"添加商品",content:"<div></div>",key:"newTabForm",isForm:!0}),this.panes=e,this.activeKey="newTabForm"},onEdit:function(e,t){this["".concat(t,"Tab")](e)},addTab:function(){var e=this.panes,t="newTab".concat(this.newTabIndex++);e.push({title:"NEW Tab",content:"Content of new Tab",key:t}),this.panes=e,this.activeKey=t},handleAddSuccess:function(){this.$message.success("添加商品成功!"),this.removeTab("newTabForm")},handleEditSuccess:function(){this.$message.success("编辑商品成功!"),this.removeTab("newTabForm")},removeTab:function(e){var t,n=this.activeKey;this.panes.forEach((function(n,a){n.key===e&&(t=a-1)}));var a=this.panes.filter((function(t){return t.key!==e}));a.length&&n===e&&(t>=0?activekey=a[t].key:n="list"),0===a.length&&(n="list"),this.$store.commit("trade/updateState",{type:"ADD",current:{}}),this.panes=a,this.activeKey=n}}},L=(n(711),Object(c.a)(B,a,[],!1,null,"c142fbda",null));L.options.__file="src/pages/trade/index.vue";t.default=L.exports}}]);
//# sourceMappingURL=5.d6e91300d1cfcefc09e7.js.map