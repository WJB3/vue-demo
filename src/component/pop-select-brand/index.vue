<template>
  <a-popover>
    <div slot="content">
      <div :style="{'width':width}">
        <custom-table
          :columns="columns"
          :data="data"
          :pagination="pagination"
          :loading="loading"
          size="small"
          rowKey="uuid"
          v-on:onTableChange="handleTableChange"
        ></custom-table>
      </div>
    </div>
    <a-input></a-input>
  </a-popover>
</template>

<script>
import CustomTable from "../custom-table";
import { mapState } from "vuex";
export default {
  data() {
    return {
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
      width: "500px"
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

  mounted: function() {
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
    }
  }
};
</script>

<style>
</style>