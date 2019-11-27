<template>
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
  >
    
  </custom-table>
</template>

<script>
import CustomTable from "@/component/custom-table";
export default {
  data() {
    return {
      searchInput: null,
      searchText: "",
      columns: [
        {
          title: "规格型号",
          dataIndex: "name",
          key: "name",
          width: 150,
          filter: true
        },
         {
          title: "积分值",
          dataIndex: "jfcount",
          key: "jfcount",
          width: 100,
          filter: true
        },
        {
          title: "库存数量",
          dataIndex: "stock",
          key: "stock",
          width: 150,
          filter: true
        },
        {
          title: "优惠券名称",
          dataIndex: "couponname",
          key: "couponname",
          width: 150,
          filter: true
        },
       
        {
          title: "品牌",
          dataIndex: "brandname",
          key: "brandname",
          width: 150,
          filter: true
        },
        {
          title: "分类",
          dataIndex: "typename",
          key: "typename",
          width: 150,
          filter: true
        },
        {
          title: "描述",
          dataIndex: "descs",
          key: "descs",
          width: 150,
          filter: true
        },
        {
          title: "操作",
          dataIndex: "action",
          key: "action",
          fixed: "right",
          width: 170,
          action: true
        }
      ]
    };
  },
  components: {
    CustomTable
  },
  props: ["data", "pagination", "loading"],
  methods: {
    filterData: function(data) {
      const newData = {};
      Object.keys(data).forEach(key => {
        newData[key] = data[key][0];
      });
      return newData;
    },
    handleTableChange: function(pagination, filters, sorter) {
      const filterData = this.filterData(filters);

      this.$store.dispatch("trade/getList", {
        page: pagination.current - 1,
        ...filterData
      });
    },
    
    handleDelete: function(value) {
      const _this = this;
      const formData = new FormData();
      formData.append("uuid", value.goodsid);
      this.$confirm({
        title: "确定删除此商品吗？",
        content: "商品一旦删除不可恢复",
        okText: "确定",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          _this.$store.dispatch("trade/delete", formData);
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