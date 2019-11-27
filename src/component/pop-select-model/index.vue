<template>
  <a-popover trigger="click" v-model="visible" @visibleChange="handleVisibleChange">
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
    <a-input v-model="name" :disabled="disabled"></a-input>
  </a-popover>
</template>

<script>
import CustomTable from "../custom-table";
import { mapState } from "vuex";
export default {
  data() {
    return {
      current: {},
      columns: [
        {
          title: "分类名",
          dataIndex: "name",
          key: "name",
          width: 200,
          filter: true
        }
      ],
      width: "500px",
      name: this.value.name,
      visible: false,
      showConfirm: true
    };
  },
  components: {
    CustomTable
  },
  computed: mapState({
    data: state => state.model.data,
    pagination: state => state.model.pagination,
    loading: state => state.model.loading
  }),
  props: {
    value: {
      type: [Object]
      //default:()=>({id:"",name:""})
    },
    parameter: {
      type: [Object]
    },
    disabled: {
      default: false
    }
  },

  mounted: function() {
    if (this.value.id) {
      this.$emit("change", { id: this.value.id, name: this.value.name });
    }

    this.width =
      this.columns.reduce(
        (total, current) => total + (current.width || current.width_custom),
        0
      ) + 50;
  },
  methods: {
    handleVisibleChange: function(visible) {
      if (visible) {
        const { brand_id } = this.parameter;

        if (!brand_id) {
          this.$message.info("您未选择品牌！请选择！");
        }
        this.$store.dispatch("model/getList", {
          brandid: brand_id
        });
      }
    },
    handleTableChange: function(pagination, filters, sorter) {
      const filterData = this.filterData(filters);

      this.$store.dispatch("model/getList", {
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
    handleConfirm: function(current) {
      this.current = current;
      this.name = current.uuid ? current.name : "";
      this.visible = false;
      this.$emit("change", { ...current, id: current.uuid });
    }
  }
};
</script>

<style>
</style>