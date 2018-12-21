<template>
 <div>
   <trafficEventHeader></trafficEventHeader>
   <div class="luxianWeidu-content">
     <div class="selector-header">
       <div class="selector-innerWrap">
         <div class="first-col">
           <div class="first-div">行政等级：</div>
           <el-select v-model="formData" clearable placeholder="请选择" size="small">
             <el-option
               v-for="item in division"
               :key="item.value"
               :label="item.label"
               :value="item.value">
             </el-option>
           </el-select>
         </div>
         <div class="second-col">
           <div class="first-div">选择时间：</div>
           <el-date-picker
             size="small"
             v-model="value1"
             type="date"
             placeholder="选择日期">
           </el-date-picker>
         </div>
         <div class="third-col">统计分析</div>
       </div>
     </div>
     <div class="echart-wrap">
       <luxianWeiduEcharts></luxianWeiduEcharts>
       <div class="echart-right">
         <trafficEventRanking></trafficEventRanking>
       </div>
     </div>
   </div>
 </div>
</template>

<script type="text/javascript">
  import trafficEventHeader from '../common/trafficEventHeader'
  import trafficEventRanking from '../common/trafficEventRanking'
  import luxianWeiduEcharts from '../common/echarts/trafficEventEcharts/luxianWeiduEcharts'
  export default {
      name: 'luxianWeidu',
      data(){
        return {
          division: config.range.division,
          region: '',
          value1: '',
          formData:{
            xzqh:''
          },
        }
      },
      components:{
        trafficEventHeader,
        luxianWeiduEcharts,
        trafficEventRanking
      },
      mounted(){

      },
      methods:{
        onSubmit() {
          console.log('submit!');
        },
      }
    }
</script>

<style scoped lang="scss">
  .luxianWeidu-content {
    height: calc(100% - 150px);
    .selector-header {
      width:100%;
      height: 50px;
      background-color: rgba(26, 130, 238, 0.05);
      line-height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .selector-innerWrap {
        width: 100%;
        height: 100%;
        margin-left: 30px;
        display: flex;
        align-items: center;
        .first-col, .second-col, .third-col {
          display: flex;
          font-size: 12px;
          font-family: SimSun;
          margin-left: 8px;
        }
        .third-col {
          width: 68px;
          height: 28px;
          text-align: center;
          line-height: 28px;
          display: table-cell;
          vertical-align: middle;
          border: 1px solid rgb(26, 130, 238);
          border-radius: 5px;
          color: rgb(26, 130, 238);
        }
      }
    }
    .echart-wrap {
      width: 100%;
      height: calc(100% - 200px);
      padding: 25px;
      display: flex;
      .echart-right {
        width:500px;
        height: 100%;
        margin-left: 50px;
        margin-right:80px;
      }
    }
  }
</style>
