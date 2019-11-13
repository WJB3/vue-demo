<template>
  <a-tabs v-model="activeKey" type="editable-card" @edit="onEdit">
    <a-tab-pane tab="列表" key="list" :closable="listClosable">
      <div class="wrap_table">
        <a-button type="primary" style="margin-bottom:10px;" @click="handleAddCompany">新建公司信息</a-button>

        <i-table></i-table>
      </div>
    </a-tab-pane>
    <a-tab-pane v-for="pane in panes" :tab="pane.title" :key="pane.key" :closable="pane.closable">
       <template >{{pane.content}}</template>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import iTable from "./table";
import iForm from "./form";
export default {
  data() {
    return {
      activeKey: "list",
      panes: [{ title: "添加公司信息", content: "a", key: "form" }],
      listClosable: false
    };
  },
  components: {
    iTable,
    iForm
  },

  mounted: function() {},
  methods: {
    handleAddCompany: function() {
      const panes = this.panes;
      const activeKey = "newTabForm";
      panes.push({ title: "添加公司信息", content: (<div>我是谁</div>), key: activeKey });
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
          activeKey = panes[0].key;
        }
      }
      this.panes = panes;
      this.activeKey = activeKey;
    }
  }
};
</script>

<style lang="less">
.wrap_table {
  padding: 10px 50px;
}
</style>