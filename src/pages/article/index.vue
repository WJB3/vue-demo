<template>
  <a-tabs v-model="activeKey" type="editable-card" @edit="onEdit" class="a_tab">
    <a-tab-pane tab="列表" key="list" :closable="listClosable">
      <div class="wrap_table">
        <a-button type="primary" style="margin-bottom:10px;" @click="handleAddArticle">新建文章</a-button>
        <pop-select-lesson v-on:change="handleChangeLesson" :value="emptyObject" />
        <white-space height="30px"></white-space>
        <i-table
          :data="data"
          :pagination="pagination"
          v-on:onEdit="handleEdit"
          v-on:onView="handleView"
          :loading="loading"
          :classid="classid"
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
        :lesson="{id:classid,name:classname}"
      ></i-form>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import iTable from "./table";
import iForm from "./form";
import iModal from "./modal";
import PopSelectLesson from "@/component/pop-select-lesson";
import WhiteSpace from "@/component/white-space";
import { mapState } from "vuex";
export default {
  data() {
    return {
      activeKey: "list",
      panes: [],
      listClosable: false,
      emptyObject:{id:"",name:""},
      classid:"",
      classname:"",
    };
  },
  computed: mapState({
    data: state => state.article.data,
    pagination: state => state.article.pagination,
    type: state => state.article.type,
    current: state => state.article.current,
    visible: state => state.article.visible,
    loading: state => state.article.loading,
    searchText: state => state.article.searchText
  }),
  components: {
    iTable,
    iForm,
    iModal,
    PopSelectLesson,
    WhiteSpace
  },

  mounted: function() {
    //this.getList();
  },

  methods: {
    handleChangeLesson: function(current) {
      this.classid=current.uuid;
      this.classname=current.name;
      this.getList({ classid: current.uuid });
    },
    getList: function(params) {
      this.$store.dispatch("article/getList", { ...params });
    },
    handleView: function(value) {
      this.$store.commit("article/updateState", {
        type: "VIEW",
        current: value
      });
      const panes = this.panes;
      const activeKey = "newTabForm";
      panes.push({
        title: "查看分类",
        content: "<div></div>",
        key: "newTabForm",
        isForm: true
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    handleEdit: function(value) {
      this.$store.commit("article/updateState", {
        type: "EDIT",
        current: value
      });
      const panes = this.panes;
      const activeKey = "newTabForm";
      panes.push({
        title: "编辑分类",
        content: "<div></div>",
        key: "newTabForm",
        isForm: true
      });
      this.panes = panes;
      this.activeKey = activeKey;
    },
    handleAddArticle: function() {
      const panes = this.panes;
      const activeKey = "newTabForm";
      panes.push({
        title: "添加文章",
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
      this.$message.success("添加分类成功!");
      this.removeTab("newTabForm");
    },
    handleEditSuccess() {
      this.$message.success("编辑分类成功!");
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
      this.$store.commit("article/updateState", {
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