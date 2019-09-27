<template>
  <div class="el_menu">
    <main-menu-label></main-menu-label>

    <a-menu
      theme="dark"
      mode="inline"
      @select="handleMenuSelected"
      :defaultSelectedKeys="defaultSelectedKeys"
    >
      <template v-for="item in routes">
        <a-menu-item v-if="!item.children" :key="item.key">
          <a-icon type="pie-chart"></a-icon>
          <span>{{item.title}}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.key" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import MainMenuLabel from "./MainMenuLabel";
import SubMenu from './SubMenu';
import { menuRoutes } from "@/router/index.js";
import { mapState } from 'vuex';
export default {
  data() {
    return {
      routes: menuRoutes,
    };
  },
  computed:mapState({
     defaultSelectedKeys:state=>state.defaultSelectedKeys
  }),
  mounted: function() {},
  components: {
    MainMenuLabel,
    SubMenu
  },
  methods:{
    handleMenuSelected:function(value){
      this.$emit("onMenuSelected",value)
    }
  },
  props: {
    isMenuCollapse: Boolean
  }
};
</script>

<style lang="less">
.el_menu {
  background-color: #05152a;
  height: 100%;

  &_menu {
    border-right: 0px;
  }
}
</style>