<template>
  <a-table
    :bordered="bordered"
    :loading="loading"
    :dataSource="data"
    :columns="customColumns"
    :pagination="pagination"
    @change="handleTableChange"
    :rowKey="rowKey"
    :scroll="{ x: tableWidth, y: tableHeight }"
    :size="size"
    :rowSelection="rowSelection"
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
  </a-table>
</template>

<script>
export default {
  data() {
    return {
      searchInput: null,
      searchText: "",
      customColumns: [],
      tableWidth:0,
      rowSelection:{
        type:this.rowType,
        columnWidth:50,
      }
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
</style>