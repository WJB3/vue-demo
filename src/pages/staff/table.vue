<template>
  <a-table
    bordered
    :dataSource="data"
    :columns="columns"
    :pagination="pagination"
    @change="handleTableChange"
  ></a-table>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          title: "姓名",
          dataIndex: "name"
        },
        {
          title: "手机号兼用户",
          dataIndex: "phone"
        },
        {
          title: "密码",
          dataIndex: "password"
        },
        {
          title: "用户头像",
          dataIndex: "img"
        },
        {
          title: "公司营业执照",
          dataIndex: "gsimg"
        },
        {
          title: "公司地址",
          dataIndex: "comaddress"
        }
      ]
    };
  },
  props: ["data", "pagination"],
  methods:{
      handleTableChange:function(pagination, filters, sorter){
          this.$store.dispatch("staff/getList",{page:pagination.current-1})
      }
  },
  mounted:function(){
      console.log(this.pagination)
  }
};
</script>

<style>
</style>