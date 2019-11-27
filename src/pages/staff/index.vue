<template>
  <a-tabs v-model="activeKey" type="editable-card" @edit="onEdit" class="a_tab">
    <a-tab-pane tab="已审核用户列表" key="list" :closable="listClosable">
      <div class="wrap_table">
         
        <a-input-search placeholder="搜索..." class="search_input"  />
        <white-space height="30px"></white-space>
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
    <a-tab-pane tab="审核未通过用户列表" key="no_audit_list" :closable="listClosable">
      <div class="wrap_table">
         
        <a-input-search placeholder="搜索..." class="search_input"  />
        <white-space height="30px"></white-space>
        <no-table
          :data="no_audit_data"
          :pagination="no_audit_pagination"
          v-on:onEdit="handleEdit"
          v-on:onView="handleView"
          :loading="loading"
         
        ></no-table>

        <i-modal :visible="visible"></i-modal>
      </div>
    </a-tab-pane>
    <a-tab-pane tab="待审核用户列表" key="wait_audit_list" :closable="listClosable">
      <div class="wrap_table">
         
        <a-input-search placeholder="搜索..." class="search_input"  />
        <white-space height="30px"></white-space>
        <wait-table
          :data="wait_audit_data"
          :pagination="wait_audit_pagination"
          v-on:onEdit="handleEdit"
          v-on:onView="handleView"
          :loading="loading"
         
        ></wait-table>

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
import NoTable from "./no_table";
import WaitTable from "./wait_table";
import iForm from "./form";
import iModal from "./modal";
import WhiteSpace from '@/component/white-space';
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeKey: "list",
      panes: [],
      listClosable: false
    };
  },
  computed: mapState({
    data: state => state.staff.data,
    pagination: state => state.staff.pagination,
    wait_audit_data: state => state.staff.wait_audit_data,
    wait_audit_pagination: state => state.staff.wait_audit_pagination,
    no_audit_data: state => state.staff.no_audit_data,
    no_audit_pagination: state => state.staff.no_audit_pagination,
    type: state => state.brand.type,
    current: state => state.brand.current,
    visible: state => state.brand.visible,
    loading: state => state.brand.loading,
    searchText:state=>state.brand.searchText
  }),
  components: {
    iTable,
    iForm,
    iModal,
    NoTable,
    WaitTable,
    WhiteSpace
  },

  mounted: function() {
    this.getList();
    this.getNoList();
    this.getWaitList();
  },
  methods: {
    
    getList: function() {
      this.$store.dispatch("staff/getList", {});
    },
    getNoList: function() {
      this.$store.dispatch("staff/getNoAuditList", {});
    },
    getWaitList: function() {
      this.$store.dispatch("staff/getWaitAuditList", {});
    },
    handleView: function(value) {
      this.$store.commit("brand/updateState", {
        type: "VIEW",
        current: value
      });
      const panes = this.panes;
      const activeKey = "newTabForm";
      panes.push({
        title: "查看品牌",
        content: "<div></div>",
        key: "newTabForm",
        isForm: true
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    handleEdit: function(value) {
      this.$store.commit("brand/updateState", {
        type: "EDIT",
        current: value
      });
      const panes = this.panes;
      const activeKey = "newTabForm";
      panes.push({
        title: "编辑品牌",
        content: "<div></div>",
        key: "newTabForm",
        isForm: true
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    handleAddBrand: function() {
      const panes = this.panes;
      const activeKey = "newTabForm";
      panes.push({
        title: "添加品牌",
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
      this.$message.success("添加品牌成功!");
      this.removeTab("newTabForm");
    },
    handleEditSuccess() {
      this.$message.success("编辑品牌成功!");
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
      this.$store.commit("brand/updateState", {
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
.search_input{
  width:200px;
  position:absolute;
  right:50px;
  top:-10px;
  //float:right;
}
.wrap_table {
  padding: 10px 50px;
  position: relative;
}
.a_tab {
  background: white;
}
</style>