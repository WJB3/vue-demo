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
          title: "标题",
          dataIndex: "title",
          key: "title",
          width: 200,
          // filter: true
        },
          {
          title: "描述",
          dataIndex: "descs",
          key: "descs",
          width: 200,
          // filter: true
        },
          {
          title: "链接地址",
          dataIndex: "urls",
          key: "urls",
          width: 200,
          // filter: true
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
  props: ["data", "pagination", "loading","classid"],
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

      this.$store.dispatch("article/getList", {
        classid:this.classid?this.classid:undefined,
        page: pagination.current - 1,
        ...filterData
      });
    },
    
    handleDelete: function(value) {
      const _this = this;
      const formData = new FormData();
      formData.append("uuid", value.uuid);
      this.$confirm({
        title: "确定删除此文章吗？",
        content: "文章一旦删除不可恢复",
        okText: "确定",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          _this.$store.dispatch("article/delete", formData);
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