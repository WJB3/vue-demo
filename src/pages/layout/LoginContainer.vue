<template>
  <div class="login-container">
 
    <img src="./../../assets/layout/star.png" class="img_star" />

    <!-- <div class="bounceInLeft line" style="top:10%;"></div>
    <div class="bounceInLeft line" style="top:20%;"></div>
    <div class="bounceInLeft line" style="top:40%;"></div>
    <div class="bounceInLeft line" style="top:50%;"></div>
    <div class="bounceInLeft line" style="top:60%;"></div>
    <div class="bounceInLeft line" style="top:70%;"></div>
    <div class="bounceInLeft line" style="top:8%;"></div> -->

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
 
.login-container {

  width: 100%;
  height: 100%;
  display:flex;
  justify-content: center;
  align-items: center;

  .img_star {
 
    
    transform-origin: center;
    width:400px;
    height:400px;
    z-index:-1;
    animation: rotate 1.5s infinite linear;
    -moz-animation: rotate 1.5s infinite linear; /* Firefox */
    -webkit-animation: rotate 1.5s infinite linear; /* Safari 和 Chrome */
    -o-animation: rotate 1.5s infinite linear;
    
  }

  &_title {
     
  }

  .line{
    width:50px;
    height:1px;
    animation:bounceInLeft 1.5s infinite linear;
    background: grey;
    position:absolute;
 
  }
}
</style>