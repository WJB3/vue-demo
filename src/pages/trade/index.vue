<template>
  <a-tabs v-model="activeKey" type="editable-card" @edit="onEdit" class="a_tab">
    <a-tab-pane tab="列表" key="list" :closable="listClosable">
      <div class="wrap_table">
        <a-button type="primary" style="margin-bottom:10px;" @click="handleAddTrade">新建商品</a-button>
        
        <a-row :gutter="{md: 8, lg: 24, xl: 48}">
          <a-col :span="12">
            <a-form-item label="品牌" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
              <pop-select-brand v-on:change="handleChangeBrand" :value="emptyObject" />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="分类" :label-col="{ span:24 }" :wrapper-col="{ span: 24 }">
              <pop-select-model v-on:change="handleChangeModel" :value="emptyObject" :parameter="{brand_id:brand_id}"/>
            </a-form-item>
          </a-col>
        </a-row>
        
        <i-table
          :data="data"
          :pagination="pagination"
          v-on:onEdit="handleEdit"
          v-on:onView="handleView"
          :loading="loading"
        ></i-table>

        <i-modal :visible="visible"></i-modal>
      </div>
    </a-tab-pane>
    <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">
      <div v-html="pane.content"></div>
      <i-form
        v-if="pane.isForm"
        v-on:onAddSuccess="handleAddSuccess"
        v-on:onEditSuccess="handleEditSuccess"
        :current="current"
        :type="type"
      ></i-form>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import iTable from "./table";
import iForm from "./form";
import iModal from "./modal";
import PopSelectBrand from "@/component/pop-select-brand";
import PopSelectModel from "@/component/pop-select-model";
import WhiteSpace from "@/component/white-space";
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeKey: "list",
      panes: [],
      listClosable: false,
      emptyObject: { id: "", name: "" },
      brand_id:""
    };
  },
  computed: mapState({
    data: state => state.trade.data,
    pagination: state => state.trade.pagination,
    type: state => state.trade.type,
    current: state => state.trade.current,
    visible: state => state.trade.visible,
    loading: state => state.trade.loading,
    searchText: state => state.trade.searchText
  }),
  components: {
    iTable,
    iForm,
    iModal,
    PopSelectBrand,
    PopSelectModel,
    WhiteSpace
  },

  mounted: function() {
    //this.getList();
  },
  methods: {
    getList: function(params) {
      this.$store.dispatch("trade/getList", {...params});
    },
    handleChangeBrand:function(current){
      this.brand_id=current.id;
    },
    handleChangeModel:function(current){
      this.getList({typeid:current.id})
    },
    handleView: function(value) {
      this.$store.commit("trade/updateState", {
        type: "VIEW",
        current: value
      });
      const panes = this.panes;
      const activeKey = "newTabForm";
      panes.push({
        title: "查看商品",
        content: "<div></div>",
        key: "newTabForm",
        isForm: true
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    handleEdit: function(value) {
      this.$store.commit("trade/updateState", {
        type: "EDIT",
        current: value
      });
      const panes = this.panes;
      const activeKey = "newTabForm";
      panes.push({
        title: "编辑商品",
        content: "<div></div>",
        key: "newTabForm",
        isForm: true
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    handleAddTrade: function() {
      const panes = this.panes;
      const activeKey = "newTabForm";
      panes.push({
        title: "添加商品",
        content: "<div></div>",
        key: "newTabForm",
        isForm: true
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    onEdit(targetKey, action) {
      this[`${action}Tab`](targetKey);
    },
    addTab() {
      const panes = this.panes;
      const activeKey = `newTab${this.newTabIndex++}`;
      panes.push({
        title: "NEW Tab",
        content: "Content of new Tab",
        key: activeKey
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    handleAddSuccess() {
      this.$message.success("添加商品成功!");
      this.removeTab("newTabForm");
    },
    handleEditSuccess() {
      this.$message.success("编辑商品成功!");
      this.removeTab("newTabForm");
    },
    removeTab(targetKey) {
      let activeKey = this.activeKey;
      let lastIndex;
      this.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      const panes = this.panes.filter(pane => pane.key !== targetKey);
      if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
          activekey = panes[lastIndex].key;
        } else {
          activeKey = "list";
        }
      }
      if (panes.length === 0) {
        activeKey = "list";
      }
      this.$store.commit("trade/updateState", {
        type: "ADD",
        current: {}
      });

      this.panes = panes;
      this.activeKey = activeKey;
    }
  }
};
</script>

<style lang="less" scoped>
.search_input {
  width: 200px;
  float: right;
}
.wrap_table {
  padding: 10px 50px;
}
.a_tab {
  background: white;
}
</style>