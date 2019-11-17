<template>
  <a-popover  trigger="click" v-model="visible">
    <div slot="content">
      <div :style="{'width':width}">
        <custom-table
          :columns="columns"
          :data="data"
          :pagination="pagination"
          :loading="loading"
          size="small"
          rowKey="uuid"
          :showConfirm="showConfirm"
          v-on:onTableChange="handleTableChange"
          v-on:onConfirm="handleConfirm"
        ></custom-table>
      </div>
    </div>
    <a-input v-model="name"></a-input>
  </a-popover>
</template>

<script>
import CustomTable from "../custom-table";
import { mapState } from "vuex";
export default {
  data() {
    return {
      current:{},
      columns: [
        {
          title: "品牌名",
          dataIndex: "name",
          width: 100,
          filter: true
        },

        {
          title: "品牌优先级",
          dataIndex: "aindex",
          width_custom: 150,
          filter: true
        }
      ],
      width: "500px",
      name:this.value.name,
      visible:false,
      showConfirm:true
    };
  },
  components: {
    CustomTable
  },
  computed: mapState({
    data: state => state.brand.data,
    pagination: state => state.brand.pagination,
    loading: state => state.brand.loading
  }),
  props:{
    value:{
      type:[Object],
      //default:()=>({id:"",name:""})
    }
  },  
  mounted: function() {
    console.log(this.value)
    this.$store.dispatch("brand/getList");
    this.width = this.columns.reduce(
      (total, current) => total + (current.width || current.width_custom),
      0
    )+50;
  },
  methods: {
    handleTableChange: function(pagination, filters, sorter) {
      const filterData = this.filterData(filters);

      this.$store.dispatch("brand/getList", {
        page: pagination.current - 1,
        ...filterData
      });
    },
    filterData: function(data) {
      const newData = {};
      Object.keys(data).forEach(key => {
        newData[key] = data[key][0];
      });
      return newData;
    },
    handleConfirm:function(current){
      this.current=current;
      this.name=current.uuid?current.name:"";
      this.visible=false;
      this.$emit("change",  current);
    }
  }
};
</script>

<style>
</style>