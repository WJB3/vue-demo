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
      v-on:onBindDiscount="handleBindDiscount"
    ></custom-table>
    <a-modal
      title="绑定优惠券"
      v-model="visible"
      @ok="handleOk"
      @cancel="handleCancel"
      :bodyStyle="bodyStyle"
      okText="确定"
      cancelText="取消"
      :destroyOnClose="true"
    >
      <pop-select-discount :value="defaultDiscount" @change="selectDiscount" />
    </a-modal>
  </div>
</template>

<script>
import CustomTable from "@/component/custom-table";
import PopSelectDiscount from "@/component/pop-select-discount";
export default {
  data() {
    return {
      searchInput: null,
      searchText: "",
      columns: [
        {
          title: "姓名",
          dataIndex: "name",
          key: "name",
          width: 200,
          filter: true
        },
        {
          title: "手机号兼用户",
          dataIndex: "phone",
          key: "phone",
          width: 150
        },
        {
          title: "密码",
          dataIndex: "password",
          key: "password",
          width: 100
        },
        {
          title: "用户头像",
          dataIndex: "imgurl",
          key: "imgurl",
          width: 200,
          imgurl: true
        },
        {
          title: "门店图片",
          dataIndex: "comimg",
          key: "comimg",
          width: 200,
          imgurl: true
        },
        {
          title: "公司营业执照",
          dataIndex: "gsimg",
          key: "gsimg",
          width: 200,
          imgurl: true
        },
        {
          title: "公司地址",
          dataIndex: "comaddress",
          key: "comaddress",
          width: 200
        },
        {
          title: "操作",
          dataIndex: "bind_action",
          key: "bind_action",
          fixed: "right",
          width: 50,
          bind_action: true
        }
      ],
      bodyStyle: {
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      },
      visible: false,
      defaultDiscount: { id: "", name: "" },
      current:{}
    };
  },
  components: {
    CustomTable,
    PopSelectDiscount
  },
  props: ["data", "pagination", "loading"],
  methods: {
    selectDiscount: function(value) {
      this.defaultDiscount = {
        id: value.id,
        name: value.name
      };
    },
    handleOk: function() {
      const newFormData = new FormData();
      newFormData.append("userid", this.current.uuid);
      newFormData.append("conid", this.defaultDiscount.id);
 
      this.$store.dispatch("staff/bindDiscount", newFormData).then((res)=>{
        if(res){
          this.$message.info("绑定优惠券成功！");
          this.visible=false;
        }
      });
    },
    handleCancel: function() {
      this.visible = false;
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

      this.$store.dispatch("brand/getList", {
        page: pagination.current - 1,
        ...filterData
      });
    },
    handleBindDiscount: function(value) {
      this.visible = true;
      this.current=value;
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