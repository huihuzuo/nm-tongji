<template>
   <div>
     <trafficEventHeader></trafficEventHeader>
     <div class="xingzhengquhuaWeidu-content">
       <selectorHeader></selectorHeader>
       <div class="echart-wrap">
         <!--<div class="echart-left">
           <div id="echart-left-first"></div>
           <div id="echart-left-second"></div>
         </div>-->
         <xingzhengquhuaWeiduEcharts></xingzhengquhuaWeiduEcharts>
         <div class="echart-right">
           <trafficEventRanking></trafficEventRanking>
         </div>
       </div>

     </div>
   </div>
</template>

<script>
  import trafficEventHeader from '../common/trafficEventHeader'
  import selectorHeader from '../common/selectorHeader'
  import trafficEventRanking from '../common/trafficEventRanking'
  import xingzhengquhuaWeiduEcharts from '../common/echarts/trafficEventEcharts/xingzhengquhuaWeiduEcharts'

    export default {
      name: 'xingzhengquhuaWeidu',
      components:{
        trafficEventHeader,
        selectorHeader,
        trafficEventRanking,
        xingzhengquhuaWeiduEcharts
      },
      mounted(){}
    }
</script>

<style scoped lang="scss">
   .xingzhengquhuaWeidu-content{
     .echart-wrap{
       width:100%;
       height:calc(100% - 100px);
       padding:25px;
       display:flex;
       .echart-left{
         width:calc(90% - 400px);
         height:688px;
         #echart-left-first{
           width:100%;
           height:50%;
         }
         #echart-left-second{
           width:100%;
           height:50%;
         }
       }
       .echart-right{
         width:500px;
         height:100%;
         margin-left: 50px;
         margin-right:80px;

       }
     }
   }
</style>
