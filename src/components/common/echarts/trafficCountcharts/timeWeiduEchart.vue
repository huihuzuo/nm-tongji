<template>
  <div class="echarts-wrap">
    <div id="echart-first"></div>
    <div id="echart-second"></div>
  </div>
</template>
<script>
  export default {
    name: 'timeWeiduEchart',
    mounted(){
      this.drawEchart()
    },
    methods:{
      drawEchart(){
        let myChart1 = echarts.init(document.getElementById('echart-first'));
        let myChart2 = echarts.init(document.getElementById('echart-second'));
        let option1 = {
          title:{
            text:'本月拥堵趋势变化',
            textStyle:{
              color:'rgb(26,130,238)',
              fontFamily:'sans-serif',
              fontSize:12
            }
          },
          legend:{
            data:['拥堵指数','同期比'],
            icon:'circle',
            left:'right',
          },
          color: ['rgb(118,180,245)','rgb(255,137,137)'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {
              type : 'shadow'
            }
          },
          xAxis : [
            {
              type : 'category',
              name:'日期',
              data : ['1','2','3','4','5','6','7','8','9','10',
                '11','12','13','14','15','16','17','18','19','20',
                '21','22','23','24','25','26','27','28','29','30'],
              axisTick: {
                show:false
              },
              axisLine:{
                lineStyle:{
                  type: 'solid',
                  color: '#CECECE',
                  width:'1'
                }
              },
              splitLine: {
                show: false,  // 去掉垂直网格线
              },

            },
          ],
          yAxis : [
            {
              type : 'value',
              name:'拥堵指数',
              nameLocation: 'end',
              min: 0,
              max: 2.0,
              interval: 0.4,
              left:'left',
              axisTick: {
                show:false
              },
              axisLine:{
                lineStyle:{
                  type: 'solid',
                  color: '#CECECE',
                  width:'1'
                },
              },
              splitLine: {
                show: true,
                lineStyle:{        // 设置网格线的样式
                  color: ['#cecece'],
                  type: 'solid'
                }
              }
            },
          ],
          series : [
            {
              name:'拥堵指数',
              type:'line',
              symbol:'none',  //去掉点的
              smooth:true,  //让曲线变平滑的
              data:[1.3,0.3,1.0,0.6,0.7,1.6,0.6,1.8,0.6,1.2,
                1.3,0.3,1.0,0.6,0.7,1.6,0.6,1.8,0.6,1.2,
                1.3,0.3,1.0,0.6,0.7,1.3,0.6,1.8,0.6,1.2,]
            },
            {
              name:'同期比',
              type:'line',
              symbol:'none',  //去掉点的
              smooth:true,  //曲线变平滑的
              //yAxisIndex: 1, // 此字段来控制图表应用哪个y轴的值，计数从0开始
              data:[2.0,0.6,1.0,0.1,1.2,1.3,0.6,1.8,0.6,1.2,
                1.8,0.6,1.2,0.6,1.2,0.6,1.8,0.6,1.2,0.0,
                1.6,0.6,1.8,0.6,1.2,1.5,1.3,0.3,1.0,0.6]
            }
          ]
        };
        let option2 = {
          title:{
            text:'拥堵频率汇总',
            textStyle:{
              color:'rgb(26,130,238)',
              fontFamily:'sans-serif',
              fontSize:12
            }
          },
          legend:{
            data:['正常拥堵','异常拥堵'],
            icon:'circle',
            left:'right',
          },
          color: ['rgb(118,180,245)','rgb(255,137,137)'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {
              type : 'shadow'
            }
          },
          xAxis : [
            {
              type : 'category',
              name:'日期',
              data:['1','2','3','4','5','6','7','8','9','10',
                '11','12','13','14','15','16','17','18','19','20',
                '21','22','23','24','25','26','27','28','29','30'],
              axisTick: {
                show:false
              },
              axisLine:{
                lineStyle:{
                  type: 'solid',
                  color: '#CECECE',
                  width:'1'
                }
              },
            },
          ],
          yAxis : [
            {
              type : 'value',
              name:'拥堵次数',
              nameLocation: 'end',
              min: 0,
              max: 60,
              interval: 20,
              left:'left',
              axisTick: {
                show:false
              },
              axisLine:{
                lineStyle:{
                  type: 'solid',
                  color: '#CECECE',
                  width:'1'
                }
              },
            },
          ],
          series : [
            {
              name:'正常拥堵',
              type:'bar',
              stack:'拥堵',
              barWidth: '5',
              data:[20,10,40,11,15,30,23,15,20,30,
                10,20,10,10,15,35,23,15,23,10,
                10,10,14,23,15,16,25,12,11,24],
              itemStyle: {
                normal: {
                  //borderColor:'#fff',
                  //borderWidth: 2,
                }
              },
            },
            {
              name:'异常拥堵',
              type:'bar',
              stack:'拥堵',
              barWidth: '5',
              data:[20,20,10,11,25,30,23,15,10,20,
                10,20,10,10,25,15,23,15,20,10,
                10,20,34,23,15,16,15,12,21,24],
              itemStyle: {
                normal: {
                  //borderColor:'#fff',
                  //borderWidth: 2,
                }
              },
            }
          ]
        };
        myChart1.setOption(option1);
        myChart2.setOption(option2);
        //（当浏览器窗口缩小的时候）
        window.addEventListener('resize',function() {myChart1.resize()});
        window.addEventListener('resize',function() {myChart2.resize()});
      }
    }
 }
</script>

<style scoped lang="scss">
  .echarts-wrap{
    width: 100%;
    height: calc(100% - 200px);
    padding: 25px;
    #echart-first, #echart-second{
      width:80%;
      height:300px;
    }
  }
</style>
