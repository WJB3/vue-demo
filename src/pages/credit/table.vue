<template>
  <div>
    <custom-table
      :data="data"
      :pagination="pagination"
      :loading="loading"
      :columns="columns"
      size="default"
      bordered
      rowKey="uuid"
      v-on:onEdit="handleEdit"
      v-on:onView="handleView"
      v-on:onDelete="handleDelete"
      v-on:onTableChange="handleTableChange"
      v-on:onChangeCreditStatus="handleChangeStatus"
    ></custom-table>
    <a-modal
      title="请选择状态值"
      v-model="visible"
      @ok="handleOk"
      @cancel="handleCancel"
      :bodyStyle="bodyStyle"
      okText="确定"
      cancelText="取消"
      :destroyOnClose="true"
    >
      <a-select
        size="large"
        style="width: 200px;"
        @change="handleChangeSelect"
        :defaultValue="credit_status"
      >
        <!-- <a-select-option :value="0">待付款</a-select-option> -->
        <a-select-option :value="0">未发货</a-select-option>
        <a-select-option :value="1">已发货</a-select-option>
        <a-select-option :value="2">已完成</a-select-option>
      </a-select>
    </a-modal>

    
  </div>
</template>

<script>
import CustomTable from "@/component/custom-table";
import { mapState } from "vuex";
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      searchInput: null,
      searchText: "",
      visible: false,
      detailVisible: false,
      credit_status: 0,
      current: {},
      bodyStyle: {
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      },
      columns: [
        {
          title: "发货状态",
          dataIndex: "status",
          key: "status",
          width: 100,
          //filter: true,
          credit_status: true,
          filters: [
            // {
            //   text: "待付款",
            //   value: 0
            // },
            {
              text: "未发货",
              value: 0
            },
            {
              text: "已发货",
              value: 1
            },
            {
              text: "已完成",
              value: 2
            }
          ]
        },
        {
          title: "签收人",
          dataIndex: "username",
          key: "username",
          width: 150,
      
        },
        {
          title: "所属市区",
          dataIndex: "area",
          key: "area",
          width: 150,
    
        },
        {
          title: "详细地址",
          dataIndex: "adressdetail",
          key: "adressdetail",
          width: 150,
       
        },
        
        {
          title:"商品名称",
          dataIndex:"goodsname",
          key:"goodsname",
          width: 150,
        },
        {
          title:"花费积分",
          dataIndex:"jf",
          key:"jf",
          width: 150,
        },
        {
          title: "操作",
          dataIndex: "action",
          key: "action",
          fixed: "right",
          width: 100,
          credit_action: true
        }
      ]
    };
  },
  computed: {
    status: function() {
      const status = this.current.status;
      return status === 3
        ? "已完成"
        : status === 2
        ? "已发货"
        : status === 1
        ? "待发货"
        // : status === 0
        // ? "待付款"
        : "";
    }
  },

  components: {
    CustomTable
  },
  props: ["data", "pagination", "loading", "detail"],
  watch: {
    detail: {
      handler(val) {
        console.log("detail");
        console.log(val);
      }
    }
  },
  methods: {
    
    handleChangeSelect: function(value) {
      this.credit_status = value;
    },
    filterData: function(data) {
      const newData = {};
      Object.keys(data).forEach(key => {
        newData[key] = data[key][0];
      });
      return newData;
    },
    handleTableChange: function(pagination, filters, sorter) {
      const filterData = this.filterData(filters);

      this.$store.dispatch("credit/getList", {
        page: pagination.current - 1,
        ...filterData
      });
    },
    handleOk: function() {
      const formData = new FormData();
      formData.append("uuid", this.current.uuid);
      formData.append("status", this.credit_status);
      this.$store.dispatch("credit/change", formData);
      this.visible = false;
    },
    handleCancel: function() {
      this.visible = false;
      this.detailVisible = false;
    },
    handleChangeStatus: function(value) {
      const _this = this;
      this.current = value;
      this.credit_status = this.current.status;
      this.visible = true;

      
    },

     
   
  },
  mounted: function() {}
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
</style>