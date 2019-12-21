<template>
  <a-tabs v-model="activeKey" type="editable-card" @edit="onEdit" class="a_tab">
    <a-tab-pane tab="报表列表" key="list" :closable="listClosable">
      <div class="wrap_table">
        <div class="table_top">
          <a-button icon="file-excel" type="primary" @click="handleExportExcel">导出报表</a-button>
          <div class="picker_range">
            <span style="margin-right:10px;">开始时间</span>
            <a-date-picker size="default" :value="defaultTime" @change="timeChange"/>
            <a-button type="primary" @click="handleSearch">查询</a-button>
          </div>

          <a-input-search placeholder="搜索..." class="search_input"  @search="handleSearchData"/>
        </div>

        <i-table
          :data="data"
          :pagination="pagination"
          :detail="detail"
          :columns="columns"
          v-on:onEdit="handleEdit"
          v-on:onView="handleView"
          :loading="loading"
        ></i-table>

        <i-modal :visible="visible"></i-modal>
      </div>
    </a-tab-pane>
    <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">
      <div v-html="pane.content"></div>
      <i-form
        v-if="pane.isForm"
        v-on:onAddSuccess="handleAddSuccess"
        v-on:onEditSuccess="handleEditSuccess"
        :current="current"
        :type="type"
      ></i-form>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import iTable from "./table";
import iForm from "./form";
import iModal from "./modal";
import { JsonToExcel, columns2Object } from "@/utils/jsonToExcel";
import moment from "moment";
// import ImportExcel from '@/component/import-excel';
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      activeKey: "list",
      panes: [],
      listClosable: false,
 
      defaultTime:moment('2019-12-01'),
      columns: [
        {
          title: "品牌名",
          dataIndex: "brandname",
          key: "brandname",
          width: 100,
           
        },
        {
          title: "产品名",
          dataIndex: "name",
          key: "name",
          width: 150,
       
        },
        {
          title: "销售总数",
          dataIndex: "num",
          key: "num",
          width: 150,
      
        },
        {
          title: "产品单价",
          dataIndex: "price",
          key: "price",
          width: 150,
         
        },
        {
          title: "销售总额",
          dataIndex: "total",
          key: "total",
          width: 150,
          sale_total:true
        },
      ],
      testData: [
        {
          status: 0,
          username: "吴家宝",
          sfprice: 100,
          phone: 15397363675,
          area: "皖",
          adressdetail: "我十岁",
          qname: "是",
          dateline: "我睡睡"
        }
      ]
    };
  },
  computed: mapState({
    data: state => [...state.statement.data],
    pagination: state => state.statement.pagination,
    type: state => state.order.type,
    current: state => state.order.current,
    visible: state => state.order.visible,
    loading: state => state.order.loading,
    searchText: state => state.order.searchText,
    detail: state => state.order.detail
  }),
  components: {
    iTable,
    iForm,
    iModal
  },
  watch: {
    detail: {
      handler(val) {
        console.log(val);
      }
    }
  },
  mounted: function() {
    this.getList({
      mydate:"2019-12-01"
    });
  },
  methods: {
    handleSearchData:function(value){
      this.getList({
              mydate:this.defaultTime.format("YYYY-MM-DD"),
              name:value
      });
    },
    timeChange:function(value,dateString){
 
      this.defaultTime=moment(dateString);
    },
    handleSearch:function(){
      this.getList({
        mydate:this.defaultTime.format("YYYY-MM-DD")
      });
    },
    handleExportExcel: function() {
      const col = columns2Object(this.columns);
      const newField = this.columns.map(item => item.dataIndex);
      const newData = this.data.map(item=>({...item,total:(Number(item.num)*Number(item.price)).toFixed(2)})).map(item => {
        let newItem = {};
        newField.forEach(it => {
          newItem[it] = item[it];
        });
        return newItem;
      });
      JsonToExcel(newData, col, `报表`);
    },
    getList: function(params) {
      this.$store.dispatch("statement/getList", { ...params });
    },
    handleView: function(value) {
      this.$store.commit("order/updateState", {
        type: "VIEW",
        current: value
      });
      const panes = this.panes;
      const activeKey = "newTabForm";
      panes.push({
        title: "查看品牌",
        content: "<div></div>",
        key: "newTabForm",
        isForm: true
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    handleEdit: function(value) {
      this.$store.commit("order/updateState", {
        type: "EDIT",
        current: value
      });
      const panes = this.panes;
      const activeKey = "newTabForm";
      panes.push({
        title: "编辑品牌",
        content: "<div></div>",
        key: "newTabForm",
        isForm: true
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    handleAddBrand: function() {
      const panes = this.panes;
      const activeKey = "newTabForm";
      panes.push({
        title: "添加品牌",
        content: "<div></div>",
        key: "newTabForm",
        isForm: true
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    onEdit(targetKey, action) {
      this[`${action}Tab`](targetKey);
    },
    addTab() {
      const panes = this.panes;
      const activeKey = `newTab${this.newTabIndex++}`;
      panes.push({
        title: "NEW Tab",
        content: "Content of new Tab",
        key: activeKey
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    handleAddSuccess() {
      this.$message.success("添加品牌成功!");
      this.removeTab("newTabForm");
    },
    handleEditSuccess() {
      this.$message.success("编辑品牌成功!");
      this.removeTab("newTabForm");
    },
    removeTab(targetKey) {
      let activeKey = this.activeKey;
      let lastIndex;
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = this.panes.filter(pane => pane.key !== targetKey);
      if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activekey = panes[lastIndex].key;
        } else {
          activeKey = "list";
        }
      }
      if (panes.length === 0) {
        activeKey = "list";
      }
      this.$store.commit("order/updateState", {
        type: "ADD",
        current: {}
      });

      this.panes = panes;
      this.activeKey = activeKey;
    }
  }
};
</script>

<style lang="less" scoped>
.search_input {
  width: 200px;
  float: right;
}
.picker_range {
  position: absolute;
  right: 250px;
  top: 0;
}
.wrap_table {
  padding: 10px 50px;
}
.a_tab {
  background: white;
}
.table_top {
  margin-bottom: 10px;
  position: relative;
}
</style>