<template>
  <div class="login-container">
    <div class="login-container_padding">
      <div class="login-container_padding_title">铎哥的系统</div>
      <Login></Login>
    </div>
  </div>
</template>

<script>
import Login from "@/component/layout/Login.vue";
export default {
  data() {
    return {};
  },
  components: {
    Login
  }
};
</script>

<style lang="less">
.login-container {
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background-color: #f0f2f5;

  &_padding {
    padding: 110px 0;

    &_title {
      text-align: center;
      font-size: 20px;
      font-family: auto;
    }
  }
}
</style>