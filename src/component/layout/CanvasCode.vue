<template>
<div :style="{width:width,height:height,...styleObject}" @click="refreshCanvas">
  <canvas id="canvas" width="130" height="40"></canvas>
</div>
</template>

<script>

export default {
    data(){
        return {
            canvas:"",
            context:""
        }
    },
    props:{
        width:String,
        height:String,
        styleObject:Object
    },
    mounted:function(){
        this.canvas = document.getElementById("canvas");//演员
        this.context = canvas.getContext("2d");
        this.createCanvas()
    },
    methods:{
        refreshCanvas:function(){
            this.context.clearRect(0, 0, 120, 40);
            this.createCanvas()
        },
        createCanvas:function(){
            let arr=[];//定义一个数组用来接收产生的随机数
            let num;
            this.context.strokeRect(0,0,130,40);
            let random=new Array(
                0,1,2,3,4,5,6,7,8,9,
                'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
            );//随机数
            for(let i=0;i<4;i++){
                let x=20+i*20//每个字母间隔20
                let y=20+10*Math.random();//y轴方向为20-30随机
                let index=Math.floor(Math.random()*random.length);//随机索引
                let txt=random[index];
                this.context.font="bold 20px 微软雅黑";//设置或返回文本内容的当前字体属性
                this.context.fillStyle=this.getColor();//设置或返回用于填充绘画的颜色、渐变或模式，随机
                this.context.translate(x,y);//重新映射画布上的 (0,0) 位置，字母不可以旋转移动，所以移动容器
                let deg=90*Math.random()*Math.PI/180;//0-90度随机旋转
                this.context.rotate(deg);
                this.context.fillText(txt, 0, 0);//在画布上绘制“被填充的”文本
                this.context.rotate(-deg);//将画布旋转回初始状态
                this.context.translate(-x,-y);//将画布移动回初始状态
                arr[i] = txt //接收产生的随机数
            }
            num=arr.join("")
             // 绘制干扰线条
            for (let j = 0; j < 8; j++) {
                this.context.beginPath();//起始一条路径，或重置当前路径
                this.context.moveTo(Math.random() * 120, Math.random() * 40);//把路径移动到画布中的随机点，不创建线条
                this.context.lineTo(Math.random() * 120, Math.random() * 40);//添加一个新点，然后在画布中创建从该点到最后指定点的线条
                this.context.strokeStyle=this.getColor();//随机线条颜色
                this.context.stroke();// 	绘制已定义的路径
            }
            for (var k = 0; k < 20; k++) {
                this.context.beginPath();
                var x = Math.random() * 120;
                var y = Math.random() * 40;
                this.context.moveTo(x, y);
                this.context.lineTo(x + 1, y + 1);
                this.context.strokeStyle=this.getColor();
                this.context.stroke();
            }
            this.$emit("getVerification",num)
 
        },
        getColor:function(){
          
            let r=Math.floor(Math.random()*256);
            let g=Math.floor(Math.random()*256);
            let b=Math.floor(Math.random()*256);
  
            return "rgb("+r+","+g+","+b+")"
        }
    }
}
</script>

<style>

</style>