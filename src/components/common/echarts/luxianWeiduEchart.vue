<template>
  <div class="echart-left">
    <div id="echart-left-first"></div>
    <div id="echart-left-second"></div>
  </div>
</template>

<script>
    export default {
      name: 'luxianweiduEchart',
      mounted(){
        this.drawEchart()
      },
      methods:{
        drawEchart(){
          let myChart1 = echarts.init(document.getElementById('echart-left-first'));
          let myChart2 = echarts.init(document.getElementById('echart-left-second'));
          let option1 = {
            title:{
              text:'拥堵情况汇总',
              textStyle:{
                color:'rgb(26,130,238)',
                fontFamily:'sans-serif',
                fontSize:12
              }
            },
            legend:{
              data:['拥堵指数','拥堵里程'],
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
                data : ['G7','G55','G0601','G59','G12','G6','G65','S54'],
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
              {
                type : 'value',
                name:'（公里）',
                nameLocation: 'end',
                min: 0,
                max: 100,
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
                }
              },
            ],
            series : [
              {
                name:'拥堵指数',
                type:'bar',
                barWidth: '10',
                data:[1.3,0.3,1.0,0.6,0.7,1.6,0.6,1.8]
              },
              {
                name:'拥堵里程',
                type:'bar',
                barWidth: '10',
                yAxisIndex: 1, // 此字段来控制图表应用哪个y轴的值，计数从0开始
                data:[20,50,40,11,45,30,23,35]
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
                data : ['G7','G55','G0601','G59','G12','G6','G65','S54'],
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
                max: 100,
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
                barWidth: '10',
                data:[20,50,40,11,45,30,23,35],
                itemStyle: {
                  normal: {
                    borderColor:'#fff',
                    borderWidth: 2,
                  }
                },
              },
              {
                name:'异常拥堵',
                type:'bar',
                stack:'拥堵',
                barWidth: '10',
                data:[50,30,10,20,50,30,55,35],
                itemStyle: {
                  normal: {
                    borderColor:'#fff',
                    borderWidth: 2,
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
  .echart-left {
    width: calc(90% - 400px);
    height: 688px;
    #echart-left-first {
      width: 100%;
      height: 50%;
    }
    #echart-left-second {
      width: 100%;
      height: 50%;
    }
  }
</style>
