<template>
 <div>
  <canvas id="drawing" width="200" height="200"></canvas>

  <canvas id="clock" width="300" height="300"></canvas>
  </div>

</template>

<script>
export default {
  mounted: function() {
    this.drawCanvans();
    this.drawClockCanvas();
  },
  components: {
    
  },
  methods: {
    drawCanvans:function(){
        let drawing=document.getElementById("drawing");
      
        if(drawing.getContext){

          let context=drawing.getContext("2d");
          context.fillStyle="#ff0000";
          context.fillRect(10,10,50,50);

          context.fillStyle="rgba(0,0,255,0.5)";
          context.fillRect(30,30,50,50);

          context.clearRect(40,40,10,10);
         
        }
    },
    drawClockCanvas:function(){
      let clock=document.getElementById("clock");
      if(clock.getContext){
        let context=clock.getContext("2d");
        context.beginPath();
        context.arc(100,100,99,0,2*Math.PI,false);
        context.moveTo(194,100);
        context.arc(100,100,94,0,2*Math.PI,false);
        context.translate(100,100);
        context.rotate(1);
        context.moveTo(0,0);
        context.lineTo(0,-85);
        context.moveTo(0,0);
        context.lineTo(-65,0);
        // context.moveTo(100,100);
        // context.lineTo(100,15);
        // // context.rotate(1);
        // context.moveTo(100,100);
        // context.lineTo(35,100);
        context.stroke();
        // context.font="bold 14px Arial";
        // context.textAlign="center";
        // context.textBaseline="middle";
        // context.fillText("12",100,20)
      }
    }
  }
};
</script>

<style>
</style>