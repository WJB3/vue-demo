<template>
  <div class="login-container">
    <img src="./../../assets/layout/star.png" class="img_star" />

    <div class="login-container_title">管理系统</div>

    <Login></Login>
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
@import "./../../css/animation/rotate.less";

.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  .img_star {
    position: absolute;
    top:50%;
    transform-origin: center;
    -webkit-transform: translate(0,-50%);
    -moz-transform: translate(0,-50%);
    transform:translate(0,-50%);
    width:300px;
    height:300px;
    top:50%;
    z-index:-1;
    animation: rotate 1s infinite;
    -moz-animation: rotate 1s infinite; /* Firefox */
    -webkit-animation: rotate 1s infinite; /* Safari 和 Chrome */
    -o-animation: rotate 1s infinite;
  }

  &_title {
     
  }
}
</style>