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
      v-on:onChangeStatus="handleChangeStatus"
      v-on:onOrderView="handleOrderView"
    ></custom-table>
    <a-modal
      title="请选择状态值"
      v-model="visible"
      @ok="handleOk"
      @cancel="handleCancel"
      :bodyStyle="bodyStyle"
      okText="确定"
      cancelText="取消"
    >
      <a-select
        size="large"
        style="width: 200px;"
        @change="handleChangeSelect"
        :defaultValue="current.status"
      >
        <a-select-option :value="0">待付款</a-select-option>
        <a-select-option :value="1">待发货</a-select-option>
        <a-select-option :value="2">已发货</a-select-option>
      </a-select>
    </a-modal>

    <a-modal
      title="订单详情"
      v-model="detailVisible"
      @ok="handleOrderOk"
      @cancel="handleCancel"
      okText="确定"
      cancelText="取消"
    >
      <a-form :form="form">
        <a-row>
          <a-form-item label="订单状态" :label-col="{ span:8 }" :wrapper-col="{ span: 16 }">
            <a-input
              disabled
              v-decorator="[
                `name`,
                {
                  rules: [
                    {
                      required: false,
                      message: '',
                    },
                    
                  ],
                  initialValue:this.status
                },
              ]"
              placeholder
            />
          </a-form-item>
        </a-row>
        <a-row>
          <a-form-item label="订单用户名" :label-col="{ span:8 }" :wrapper-col="{ span: 16 }">
            <a-input
              disabled
              v-decorator="[
                `name`,
                {
                  rules: [
                    {
                      required: false,
                      message: '',
                    },
                    
                  ],
                  initialValue:current.username
                },
              ]"
              placeholder
            />
          </a-form-item>
        </a-row>
        <a-row>
          <a-form-item label="实付金额" :label-col="{ span:8 }" :wrapper-col="{ span: 16 }">
            <a-input
              disabled
              v-decorator="[
                `name`,
                {
                  rules: [
                    {
                      required: false,
                      message: '',
                    },
                    
                  ],
                  initialValue:current.sfprice
                },
              ]"
              placeholder
            />
          </a-form-item>
        </a-row>
        <a-row>
          <a-form-item label="电话" :label-col="{ span:8 }" :wrapper-col="{ span: 16 }">
            <a-input
              disabled
              v-decorator="[
                `name`,
                {
                  rules: [
                    {
                      required: false,
                      message: '',
                    },
                    
                  ],
                  initialValue:current.phone
                },
              ]"
              placeholder
            />
          </a-form-item>
        </a-row>
        <a-row>
          <a-form-item label="省市区" :label-col="{ span:8 }" :wrapper-col="{ span: 16 }">
            <a-input
              disabled
              v-decorator="[
                `name`,
                {
                  rules: [
                    {
                      required: false,
                      message: '',
                    },
                    
                  ],
                  initialValue:current.area
                },
              ]"
              placeholder
            />
          </a-form-item>
        </a-row>
        <a-row>
          <a-form-item label="详细地址" :label-col="{ span:8 }" :wrapper-col="{ span: 16 }">
            <a-input
              disabled
              v-decorator="[
                `name`,
                {
                  rules: [
                    {
                      required: false,
                      message: '',
                    },
                    
                  ],
                  initialValue:current.adressdetail
                },
              ]"
              placeholder
            />
          </a-form-item>
        </a-row>
        <a-row>
          <a-form-item label="签收人" :label-col="{ span:8 }" :wrapper-col="{ span: 16 }">
            <a-input
              disabled
              v-decorator="[
                `name`,
                {
                  rules: [
                    {
                      required: false,
                      message: '',
                    },
                    
                  ],
                  initialValue:current.qname
                },
              ]"
              placeholder
            />
          </a-form-item>
        </a-row>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import CustomTable from "@/component/custom-table";
export default {
  data() {
    return {
      form: this.$form.createForm(this),
      searchInput: null,
      searchText: "",
      visible: false,
      detailVisible: false,
      order_status: 0,
      current: {},
      bodyStyle: {
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      },
      columns: [
        {
          title: "订单状态",
          dataIndex: "status",
          key: "status",
          width: 100,
          filter: true,
          order_status: true
        },
        {
          title: "订单用户名",
          dataIndex: "username",
          key: "username",
          width: 150,
          filter: true
        },
        {
          title: "实付金额",
          dataIndex: "sfprice",
          key: "sfprice",
          width: 150,
          filter: true
        },
        {
          title: "电话",
          dataIndex: "phone",
          key: "phone",
          width: 150,
          filter: true
        },
        {
          title: "省市区",
          dataIndex: "area",
          key: "area",
          width: 150,
          filter: true
        },
        {
          title: "详细地址",
          dataIndex: "adressdetail",
          key: "adressdetail",
          width: 200,
          filter: true
        },
        {
          title: "签收人",
          dataIndex: "qname",
          key: "qname",
          width: 200,
          filter: true
        },

        {
          title: "操作",
          dataIndex: "action",
          key: "action",
          fixed: "right",
          width: 170,
          order_action: true
        }
      ]
    };
  },
  computed:{
    status:function(){
      const status=this.current.status;
      return status===3?"已退款":status===2?"已发货":status===1?"待发货":status===0?"待付款":""
    }
  },
  components: {
    CustomTable
  },
  props: ["data", "pagination", "loading"],
  methods: {
    handleOrderOk: function() {
      this.detailVisible = false;
    },
    handleOrderView: function(value) {
      this.current = value;
      console.log(this.current);
      this.detailVisible = true;
    },
    handleChangeSelect: function(value) {
      this.order_status = value;
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

      this.$store.dispatch("order/getList", {
        page: pagination.current - 1,
        ...filterData
      });
    },
    handleOk: function() {
      const formData = new FormData();
      formData.append("orderid", this.current.orderid);
      formData.append("status", this.order_status);
      this.$store.dispatch("order/change", formData);
      this.visible = false;
    },
    handleCancel: function() {
      this.visible = false;
      this.detailVisible = false;
    },
    handleChangeStatus: function(value) {
      const _this = this;
      this.current = value;
      this.order_status = this.current.status;
      this.visible = true;

      // this.$confirm({
      //   title: "确定改变吗？",
      //   content: "确定改变状态吗？",
      //   okText: "确定",
      //   okType: "danger",
      //   cancelText: "取消",
      //   onOk() {
      //     _this.$store.dispatch("order/change", formData);
      //   },
      //   onCancel() {}
      // });
    },

    handleDelete: function(value) {
      const _this = this;
      const formData = new FormData();
      formData.append("uuid", value.uuid);
      this.$confirm({
        title: "确定删除此品牌吗？",
        content: "品牌一旦删除不可恢复",
        okText: "确定",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          _this.$store.dispatch("order/delete", formData);
        },
        onCancel() {}
      });
    },
    handleEdit: function(value) {
      this.$emit("onEdit", value);
    },
    handleView: function(value) {
      this.$emit("onView", value);
    }
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