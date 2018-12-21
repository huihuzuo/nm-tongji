<template>
  <div class="echart-left">
    <div id="echart-left-first"></div>
    <div id="echart-left-second"></div>
  </div>
</template>

<script>
    export default {
        name: 'xingzhengquhuaWeiduEcharts',
      mounted(){
        this.drawEchart()
      },
      methods: {
        drawEchart() {
          let myChart1 = echarts.init(document.getElementById('echart-left-first'));
          let myChart2 = echarts.init(document.getElementById('echart-left-second'));
          let option1 = {
            title:{
              text:'阻断原因汇总统计',
              textStyle:{
                color:'rgb(26,130,238)',
                fontFamily:'sans-serif',
                fontSize:12
              }
            },
            legend:{
              data:['拥堵次数','影响里程'],
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
                data : ['重大灾害','地质灾害','气象灾害','事故灾难','其他(突发)','施工养护','重大计划','其他(计划)'],
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
                axisLabel: {
                  interval: 0, // 0为横轴信息全部显示  1间隔一个显示
                  //rotate: 38, // 角度倾斜显示
                  textStyle:{
                    fontSize:'12',
                    color:'rgb(80,105,122)'
                  }
                },
                splitLine: {
                  show: false,  // 去掉垂直网格线
                },
                grid:{
                  x:'100'
                }

              },
            ],
            yAxis : [
              {
                type : 'value',
                name:'次',
                nameTextStyle:{   // 控制坐标轴name的样式
                  padding: [-60, 30, 0, 0 ],
                  color:'#3c3c3c',
                  fontSize:'14',
                  align:'left'
                },
                nameLocation: 'end',
                min: 0,
                max: 50,
                interval: 20,
                //left:'left',
                axisTick: {
                  show:false
                },
                axisLine:{
                  lineStyle:{
                    type: 'solid',
                    color: '#CECECE',
                    width:'1',
                    fontSize:'12'
                  },
                },
                axisLabel: {
                  textStyle:{
                    fontSize:'12',
                    color:'rgb(80,105,122)'
                  }
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
                name:'公里',
                nameTextStyle:{   // 控制坐标轴name的样式
                  padding: [-60, 0, 0, 35 ],
                  color:'#3c3c3c',
                  fontSize:'14',
                  //align:'right'
                },
                nameLocation: 'end',
                min: 0,
                max: 50,
                interval: 20,
                left:'left',
                axisTick: {
                  show:false
                },
                axisLine:{
                  lineStyle:{
                    type: 'solid',
                    color: '#CECECE',
                    width:'1',
                    fontSize:'12'
                  }
                },
                axisLabel: {
                  textStyle:{
                    fontSize:'12',
                    color:'rgb(80,105,122)'
                  }
                },
              },
            ],
            series : [
              {
                name:'阻断次数',
                type:'bar',
                barWidth: '5',
                data:[11,45,30,23,35,45,43,25]
              },
              {
                name:'影响里程',
                type:'bar',
                barWidth: '5',
                yAxisIndex: 1, // 此字段来控制图表应用哪个y轴的值，计数从0开始
                data:[20,30,40,11,45,30,23,35]
              }
            ]
          };
          let option2 = {
            title:{
              text:'阻断类型占比统计',
              textStyle:{
                color:'rgb(26,130,238)',
                fontFamily:'sans-serif',
                fontSize:12
              },
              subtext:'占比最多 气象灾害 55%，占比最少 其他（计划） 10%'

            },
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              x: 'right',
              y:'center',
              data:['重大灾害','重大活动','气象灾害','事故灾难','其他(突发)','施工养护','地质灾害','其他(计划)'],
              itemWidth:16,
              itemHeight:14
            },
            series: [
              {
                name:'灾害类型',
                type:'pie',
                radius: ['50%', '70%'],  // 设置环形饼状图， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
                center: ['30%', '50%'],  // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
                avoidLabelOverlap: false,
                label: {
                  normal: {
                    show: false,
                    position: 'center'
                  },
                  emphasis: {
                    show: true,
                    textStyle: {
                      fontSize: '30',
                      fontWeight: 'bold'
                    }
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data:[
                  {value:335, name:'地址灾害'},
                  {value:310, name:'施工养护'},
                  {value:234, name:'重大灾害'},
                  {value:135, name:'重大活动'},
                  {value:1548, name:'气象灾害'},
                  {value:234, name:'其他(计划)'},
                  {value:135, name:'事故灾害'},
                  {value:1548, name:'其他(突发)'}
                ]
              }
            ]
          };
          myChart1.setOption(option1);
          myChart2.setOption(option2);
          //（当浏览器窗口缩小的时候）
          window.addEventListener('resize',function() {myChart1.resize()});
          window.addEventListener('resize',function() {myChart2.resize()});
        },
      }
    }
</script>

<style scoped lang="scss">
  .echart-left{
    width:calc(90% - 400px);
    height:688px;
  #echart-left-first{
    width:100%;
    height:50%;
  }
  #echart-left-second{
    width:90%;
    height:50%;
  }
  }
</style>
