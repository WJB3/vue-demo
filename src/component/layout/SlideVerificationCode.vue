<template>
  <div class="drag_code" ref="drag">
    <div class="drag_code_bg" ref="bg"></div>
    <div class="drag_code_text" onselectstart="return false" ref="text">{{text}}</div>
    <div
      class="drag_code_btn"
      ref="btn"
      @mousedown="buttonMouseDown"
      @mousemove="buttonMouseMove"
      @mouseup="buttonMouseUp"
    >&gt;&gt;</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "请拖动验证",
      success: false,
      down: false
    };
  },
  methods: {
    getInstance() {
      return this.$refs.drag.offsetWidth - this.$refs.btn.offsetWidth;
    },
    buttonMouseDown(e) {
 
      this.down = true;
      this.$refs.btn.style.transition = "";
      this.$refs.bg.style.transition = "";
      let event = e || window.event;
      let downX = event.clientX;
      this.downX = downX;
    },
    buttonMouseMove(e) {

      const _this=this;
        
      if (this.down) {
     
        let event = e || window.event;
        let moveX = event.clientX;
        let moveInstance = moveX - this.downX;
   
        if (moveInstance >= this.getInstance()) {
          moveInstance = this.getInstance(); //如果滑过了终点，就将它停留在终点位置
        } else if (moveInstance < 0 ) {
          moveInstance = 0; //如果滑到了起点的左侧，就将它重置为起点位置
        }
        //根据鼠标移动的距离来动态设置滑块的偏移量和背景颜色的宽度
        this.$refs.btn.style.left = moveInstance + "px";
        this.$refs.bg.style.width = moveInstance + "px";

        //如果鼠标的水平移动距离 = 滑动成功的宽度
        if (moveInstance == this.getInstance()) {
          this.text = "验证通过";
          this.$refs.text.style.color = "#fff";
          this.$refs.btn.style.color = "green";
          this.$refs.bg.style.backgroundColor = "lightgreem";
          this.success = true;
          this.down=false;
          setTimeout(function() {
            _this.$emit("onPass")
          }, 100);
        }
      }
    },
    buttonMouseUp(e) {
   
      if (this.success) {
        this.down = false;
        return;
      } else {
        this.down = false;
        this.$refs.btn.style.left = 0;
        this.$refs.bg.style.width = "40px";
        this.$refs.btn.style.transition = "left 1s ease";
        this.$refs.bg.style.transition = "width 1s ease";
      }
    }
  }
};
</script>

<style lang="less">
.drag_code {
  height: 40px;
  line-height: 1.5;
  background-color: #e8e8e8;
  position: relative;

  &_bg {
    width: 40px;
    height: 40px;
    position: absolute;
    background-color: #75cdf9;
  }

  &_text {
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
  }
  &_btn {
    width: 40px;
    height: 38px;
    position: absolute;
    border: 1px solid #ccc;
    cursor: move;
    font-family: "宋体";
    text-align: center;
    background-color: #fff;
    user-select: none;
    color: #666;
  }
}
</style>