<template>
    <vue-waterfall-easy 
      :imgsArr="imgsArr" 
      @scrollReachBottom="handleReachBottom"
      :img-width="300"
      cardClass="cardStyle"
      @click="handleClick"
    >
      <template v-slot:header="headerProps">
        <div style="width:100%;height:100%;overflow:hidden;"><div>{{headerProps.data.headerText}}</div></div>
      </template>
      <template v-slot:footer="footerProps">
        <div style="width:100%;height:100%;overflow:hidden;"><div>{{footerProps.data.info}}</div></div>
      </template>
    </vue-waterfall-easy>
  </template>
  
  <script>
  // import vueWaterfallEasy from "../../src";
  // import imageSet from "../../src/image-set";
   
  export default {
    components: {
      // vueWaterfallEasy,
    },
    data() {
      return {
        imgsArr: (() => {
          let tmp = [];
          // for (let i = 1; i < 14; i ++) {
          //   tmp.push({
          //     src: `../image-set/0${i < 10 ? '0' + String(i) : i}.jpg`, 
          //     info: ['可愛喵喵', '賣萌一下', '帶我回家', '拜託拜託'][Math.floor(Math.random() * 3)],
          //     headerText:'這個圖案有可愛吧！' 
          //   });
          // }
          return tmp
        })(),
      };
    },
  
    mounted() {
      console.log('waterfall mounted');
      this.imgsArr = []
        // imgsArr: [ 
        //   {
        //     src: "../image-set/001.jpg", 
        //     info: "可愛喵喵",
        //     headerText:'测试' 
    },
  
    methods: {
      getData: function () {},
      handleReachBottom:function(){
        this.imgsArr=this.imgsArr.concat(this.imgsArr);
        console.log("--this.imgsArr--",this.imgsArr)
      },
      handleClick:function(e,instance){
        console.log("==handleClick===",e,instance)
      }
    },
  };
  </script>
  
  <style>
  .cardStyle{ 
    box-shadow:rgba(0,0, 0,.2) 0px 3px 1px -2px, rgba(0, 0, 0 ,.14) 0px 2px 2px 0px, rgba(0,0, 0, .12) 0px 1px 5px 0px;
  }
  </style>