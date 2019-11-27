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
    v-on:onAudit="handleAudit"
    v-on:onRefuseAudit="handleRefuseAudit"
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
          title: "姓名",
          dataIndex: "name",
          key:"name",
          width:200,
          filter:true
        },
        {
          title: "手机号兼用户",
          dataIndex: "phone",
          key:"phone",
          width:150
        },
        {
          title: "密码",
          dataIndex: "password",
          key:"password",
          width:100
        },
        {
          title: "用户头像",
          dataIndex: "imgurl",
          key:"imgurl",
          width:300,
          imgurl:true
        },
        {
          title: "公司营业执照",
          dataIndex: "gsimg",
          key:"gsimg",
          width:300
        },
        {
          title: "公司地址",
          dataIndex: "comaddress",
          key: "comaddress",
          width:200
        },
        {
          title: "操作",
          dataIndex: "audit_action",
          key: "audit_action",
          fixed: "right",
          width:50,
          audit_action: true
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

      this.$store.dispatch("brand/getList", {
        page: pagination.current - 1,
        ...filterData
      });
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
          _this.$store.dispatch("brand/delete", formData);
        },
        onCancel() {}
      });
    },
    handleAudit: function(value) {
      const _this = this;
      const formData = new FormData();
      formData.append("uuid", value.uuid);
      this.$confirm({
        title: "确定审核通过吗？",
        content: "用户确定审核通过吗",
        okText: "确定",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          _this.$store.dispatch("staff/audit", formData);
        },
        onCancel() {}
      });
    },
    handleRefuseAudit: function(value) {
      const _this = this;
      const formData = new FormData();
      formData.append("uuid", value.uuid);
      this.$confirm({
        title: "确定拒绝审核吗？",
        content: "用户确定拒绝审核吗",
        okText: "确定",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          _this.$store.dispatch("staff/refuse_audit", formData);
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