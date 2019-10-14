<template>
  <a-layout class="main_container">
    <a-layout-sider :trigger="null" collapsiable v-model="isMenuCollapse" >
      <main-menu v-on:onMenuSelected="handleMenuSelected"></main-menu>
    </a-layout-sider>
    <a-layout>
      <main-header :isMenuCollapse="isMenuCollapse" v-on:onCollapse="handleCollapse" class="main_header"></main-header>
      <div class="main_breadcrumb">
        <a-breadcrumb>
          <template v-for="(item,key) in routerArr">
            <a-breadcrumb-item :key="key">{{item}}</a-breadcrumb-item>
          </template>
        </a-breadcrumb>
      </div>
      <main-content class="main_content"></main-content>
    </a-layout>
  </a-layout>
</template>

<script>
import MainMenu from "./MainMenu";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import MainContent from "./MainContent";
import { keyToTitle } from "@/utils/routeUtils";
import { mapState } from "vuex";

export default {
  mounted: function() {},
  components: {
    MainMenu,
    MainHeader,
    MainFooter,
    MainContent
  },
  computed: mapState({
    isMenuCollapse: state => state.isMenuCollapse,
    routerArr: state => state.routerArr,

  }),
  methods: {
    handleCollapse: function() {
      this.$store.commit("updateState", {
        isMenuCollapse: !this.isMenuCollapse
      });
    },
    handleMenuSelected: function(value) {
      this.$router.push(`/${value.key.split("_").join("/")}`);
      let key = value ? value.key : undefined;
      const arr = keyToTitle(key.split("_"));
      this.$store.commit("updateState", {
        routerArr: arr
      });
    }
  }
};
</script>

<style lang="less">
.main_container {
  width: 100%;
  height: 100%;
}
.main_header{
  border-bottom:1px solid rgba(0, 21, 41, 0.08);
  box-shadow: 1px 1px 4px rgba(0, 21, 41, 0.08);
}
.main_breadcrumb{
  padding:16px 26px;
  background-color:#fff;
  border-bottom:1px solid rgba(0, 21, 41, 0.08);
 
}
.main_content{
  margin-top:4px;
}
</style>