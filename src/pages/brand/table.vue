<template>
  <a-table
    bordered
    :dataSource="data"
    :columns="columns"
    :pagination="pagination"
    @change="handleTableChange"
    rowKey="uuid"
    :scroll="{ x: 1500, y: 600 }"
  >
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
      dataSource: [
        {
          name: "吴家宝",
          imgurl: "http://wxdimgs.viphk.ngrok.org:80/uploadFile/2019/11/15/c86ae32c-07f6-4491-b0c3-bcd4827a945f.jpg",
          aindex: "123456",
          uuid:"11"
        }
      ],
      columns: [
        {
          title: "品牌名",
          dataIndex: "name",
          width:150
        },

        {
          title: "品牌图片",
          dataIndex: "imgurl",
          width:800
        },
        {
          title: "品牌优先级",
          dataIndex: "aindex",
          width:400
        },
        {
          title: "操作",
          dataIndex: "action",
          key: "action",
          fixed:"right",
          width: 170,
          scopedSlots: { customRender: "action" }
        }
      ]
    };
  },
  props: ["data", "pagination"],
  methods: {
    handleTableChange: function(pagination, filters, sorter) {
      this.$store.dispatch("brand/getList", {page:pagination.current-1});
    },
    handleDelete: function(value) {
      const _this = this;
      this.$confirm({
        title: "确定删除此品牌吗？",
        content: "品牌一旦删除不可恢复",
        okText: "确定",
        okType: "danger",
        cancelText: "取消",
        onOk() {
          _this.$store.dispatch("brand/delete", {
            uuid: value.uuid
          });
        },
        onCancel() {
          
        }
      });
    },
    handleEdit: function(value) {
      this.$emit("onEdit", value);
    },
    handleView:function(value){
      this.$emit("onView",value);
    }
  },
  mounted: function() {
     
  }
};
</script>

<style lang="less">
.link {
  color: #1890ff;
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  display:inline-block;
  cursor: pointer;
}
</style>