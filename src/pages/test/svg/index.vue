<template>
<div>
<svg width="100" height="100">
  <circle class="mouth" cx="50" cy="50" r="14"></circle>
  <circle class="eye" cx="50" cy="50" r="14"></circle>
</svg>
</div>
</template>

<script>
export default {
  mounted: function() {
    
  },
  components: {
    
  },
  methods: {
  }
};
</script>

<style>
.mouth{
  fill:none;
  stroke:#00B51D;
  stroke-width:5;
  stroke-linecap:round;
  stroke-dasharray:44,44;
  transform-origin:center;
  animation: mounthAni 2.3s ease-out infinite;
}
.eye{
  fill:none;
  stroke:#00B51D;
  stroke-width:5;
  stroke-linecap:round;
  stroke-dasharray:0,66;
  transform-origin:center;
  transform:rotate(-45deg);
  animation: eyeAni 2.3s ease-in-out infinite;
}
@keyframes mounthAni {
    40% {
        stroke-dasharray: 44, 22;   /* 间距改为1/4 */
    }
    80%, 100% {
        stroke-dasharray: 44, 44;   /* 间距恢复为1/2 */
        transform: rotate(720deg);
    }
}
 @keyframes eyeAni {
    40% {
        stroke-dasharray: 0, 77;    /* 间距改为7/8 */
    }
    80%, 100% {
        transform: rotate(675deg);  /* 间距恢复为3/4 */
        stroke-dasharray: 0, 66;
    }
}

 
</style>