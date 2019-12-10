<template>
<div>
  <a-table
    :bordered="bordered"
    :loading="loading"
    :dataSource="data"
    :columns="customColumns"
    :pagination="pagination"
    @change="handleTableChange"
    :rowKey="rowKey"
    :size="size"
    :scroll="{x:1600}"
    :rowSelection="rowSelection"
    :components="components"
  >
    <div
      slot="filterDropdown"
      slot-scope="{setSelectedKeys, selectedKeys, confirm, clearFilters, column}"
      style="padding:8px"
    >
      <a-input
        v-ant-ref="c=>searchInput=c"
        :placeholder="`Search ${column.dataIndex}`"
        :value="selectedKeys[0]"
        @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
        @pressEnter="() => handleSearch(selectedKeys, confirm)"
        style="width: 188px; margin-bottom: 8px; display: block;"
      />
      <a-button
        type="primary"
        @click="() => handleSearch(selectedKeys, confirm)"
        icon="search"
        size="small"
        style="width: 90px; margin-right: 8px"
      >搜索</a-button>
      <a-button @click="() => handleReset(clearFilters)" size="small" style="width: 90px">重置</a-button>
    </div>

    <template slot="order_statis" slot-scope="text">
      <a-badge status="warning" v-if="text===1" text="已付款"/>
      <a-badge status="processing" v-if="text===2" text="已发货"/>
      <a-badge status="success" v-if="text===3" text="已收款"/>
    </template>

    <template slot="imgurl" slot-scope="text">
       <img :src="text" :style="{width:'30px',height:'30px'}"/>
    </template>

    <template slot="nameRender" slot-scope="text">
      <span v-if="searchText">
        <template
          v-for="(fragment,i) in text.toString().split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
        >
          <mark
            v-if="fragment.toLowerCase() === searchText.toLowerCase()"
            :key="i"
            class="highlight"
          >{{fragment}}</mark>
          <template v-else>{{fragment}}</template>
        </template>
      </span>
      <template v-else>{{text}}</template>
    </template>

    <span slot="action" slot-scope="text, record">
      <div type="link" @click="handleEdit(record)" class="link">编辑</div>
      <a-divider type="vertical" />
      <div type="link" @click="handleDelete(record)" class="link">删除</div>
      <a-divider type="vertical" />
      <div type="link" @click="handleView(record)" class="link">查看</div>
    </span>

    <span slot="order_action" slot-scope="text, record">
      <div type="link" @click="handleChangeStatus(record)" class="link">修改状态</div>
    </span>

    <span slot="audit_action" slot-scope="text, record">
      <div type="link" @click="handleAudit(record)" class="link">审核通过</div>
      <a-divider type="vertical" />
      <div type="link" @click="handleRefuseAudit(record)" class="link">审核不通过</div>
    </span>

    <span slot="order_status" slot-scope="text">
         <a-badge status="warning" text="待付款" v-if="text===0"/>
         <a-badge status="processing" text="待发货"  v-if="text===1"/>
         <a-badge status="success" text="已发货"  v-if="text===2"/>
         <a-badge status="processing" text="已退款"  v-if="text===3"/>
    </span>

  </a-table>
  <a-button class="confirm-button" v-if="showConfirm" size="small" type="primary" @click="handleConfirm">确认</a-button>
</div>
</template>

<script>
 

export default {
  data() {
    const ResizeableTitle=(h,props,children)=>{
    
      const {key,...restProps}=props;
      const col=this.columns.find(col=>{
        return col.key===key;
      });

      if(!col){
        return (
          <th></th>
        )
      }
      if(!col.width){
        return <th {...restProps}>{children}</th>
      }
      return (
        <th {...restProps} width={col.width}>
          <div style="display:inline-flex;width:100%">
            {children}
            <textarea 
              disabled
              style="resize: horizontal;height: 21px; border: none;background: none;flex: 1;"
            ></textarea>
          </div>
        </th>
      )
    }
    this.components={
        header:{
          cell:ResizeableTitle
        }
    };
    return {
      searchInput: null,
      searchText: "",
      customColumns: [],
      tableWidth:0,
      rowSelection:{
        type:this.rowType,
        columnWidth:50,
        onChange:this.handleChangeClick
      },
      current:{},
      
    };
  },
  props:{
    bordered:{
      default:true
    },
    data:{
      required:true
    },
    pagination:{
      required:true
    },
    loading:{
      required:true
    },
    size:{
      default:"default"
    },
    columns:{
      required:true
    },
    rowKey:{
      default:"uuid"
    },
    tableHeight:{
      default:600
    },
    defaultColWidth:{
      default:100
    },
    rowType:{
      default:"radio"
    },
    showConfirm:{
      default:false
    }
  },  
  methods: {
    filterData: function(data) {
      const newData = {};
      Object.keys(data).forEach(key => {
        newData[key] = data[key][0];
      });
      return newData;
    },
    handleTableChange: function(pagination, filters, sorter) {
      this.$emit("onTableChange",pagination, filters, sorter)
    },
    handleChangeStatus:function(value){
      this.$emit("onChangeStatus",value);
    },
    handleSearch(selectedKeys, confirm) {
      confirm();
      this.searchText = selectedKeys[0];
    },
    handleReset(clearFilters) {
      clearFilters();
      this.searchText = "";
    },
    handleDelete: function(value) {
      this.$emit("onDelete", value);
    },
    handleEdit: function(value) {
      this.$emit("onEdit", value);
    },
    handleView: function(value) {
      this.$emit("onView", value);
    },
    handleAudit: function(value) {
      this.$emit("onAudit", value);
    },
    handleRefuseAudit:function(value){
      this.$emit("onRefuseAudit", value);
    },
    handleChangeClick:function(selectedRowKeys, selectedRows){
      this.current=selectedRows[0];
      //this.$emit("onChangeTableRow",selectedRows[0])
    },
    handleConfirm:function(){
      this.$emit("onConfirm",this.current)
    },
    
  },
  mounted: function() {
    this.columns.forEach(item => {
      if (item.filter) {
        item.scopedSlots = {
          filterDropdown: "filterDropdown",
          filterIcon: "filterIcon",
          customRender: "nameRender"
        };
        item.onFilterDropdownVisibleChange = visible => {
          if (visible) {
            setTimeout(() => {
              this.searchInput.focus();
            }, 0);
          }
        };
      }
      if (item.action) {
        item.scopedSlots = { customRender: "action" };
      }
       if (item.audit_action) {
        item.scopedSlots = { customRender: "audit_action" };
      }
      if (item.imgurl) {
        item.scopedSlots = { customRender: "imgurl" };
      }
      if (item.order_status) {
        item.scopedSlots = { customRender: "order_status" };
      }
       if (item.order_action) {
        item.scopedSlots = { customRender: "order_action" };
      }
    });
    this.customColumns = this.columns;
    this.tableWidth=this.customColumns.reduce((total, current)=>total+(current.width||current.width_custom),0);

  }
};
</script>

<style lang="less">
.link {
  color: #1890ff;
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  display: inline-block;
  cursor: pointer;
}
.ant-table td { white-space: nowrap;overflow: hidden;text-overflow:ellipsis; }
.ant-empty-image img {
    width: auto!important;
}
.confirm-button{
  //float:right;
}
</style>