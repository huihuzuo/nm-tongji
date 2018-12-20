<template>
   <div>
     <trafficCountHeader></trafficCountHeader>
     <div class="xingzhengquhuaWeidu-content">
       <selectorHeader></selectorHeader>
       <div class="echart-wrap">
         <!--<div class="echart-left">
           <div id="echart-left-first"></div>
           <div id="echart-left-second"></div>
         </div>-->
         <xingzhengquhuaWeiduEchart></xingzhengquhuaWeiduEchart>
         <div class="echart-right">
           <indexRanking></indexRanking>
         </div>
       </div>

     </div>
   </div>
</template>

<script>
  import trafficCountHeader from '../common/trafficCountHeader'
  import selectorHeader from '../common/selectorHeader'
  import indexRanking from '../common/indexRanking'
  import xingzhengquhuaWeiduEchart from '../common/echarts/xingzhengquhuaWeiduEchart'
    export default {
      name: 'xingzhengquhuaWeidu',
      components:{
        trafficCountHeader,
        selectorHeader,
        indexRanking,
        xingzhengquhuaWeiduEchart
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
         width:400px;
         height:100%;
         margin-left:100px;

       }
     }
   }
</style>
