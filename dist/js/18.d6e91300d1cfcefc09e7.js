(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{737:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this.$createElement;this._self._c;return this._m(0)};a._withStripped=!0;var i={mounted:function(){this.drawCanvans(),this.drawClockCanvas()},components:{},methods:{drawCanvans:function(){var t=document.getElementById("drawing");if(t.getContext){var e=t.getContext("2d");e.fillStyle="#ff0000",e.fillRect(10,10,50,50),e.fillStyle="rgba(0,0,255,0.5)",e.fillRect(30,30,50,50),e.clearRect(40,40,10,10)}},drawClockCanvas:function(){var t=document.getElementById("clock");if(t.getContext){var e=t.getContext("2d");e.beginPath(),e.arc(100,100,99,0,2*Math.PI,!1),e.moveTo(194,100),e.arc(100,100,94,0,2*Math.PI,!1),e.translate(100,100),e.rotate(1),e.moveTo(0,0),e.lineTo(0,-85),e.moveTo(0,0),e.lineTo(-65,0),e.stroke()}}}},o=n(13),r=Object(o.a)(i,a,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("canvas",{attrs:{id:"drawing",width:"200",height:"200"}}),this._v(" "),e("canvas",{attrs:{id:"clock",width:"300",height:"300"}})])}],!1,null,null,null);r.options.__file="src/pages/test/canvas/index.vue";e.default=r.exports}}]);
//# sourceMappingURL=18.d6e91300d1cfcefc09e7.js.map