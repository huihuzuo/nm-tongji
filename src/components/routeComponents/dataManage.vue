<template>
  <div class="echartsWrap">
    <div id="chart1" :style="{width:'400px',height:'300px'}"></div>
    <div id="chart2" :style="{width:'400px',height:'300px'}"></div>
    <div id="chart3" :style="{width:'400px',height:'300px'}"></div>
    <div id="chart4" :style="{width:'400px',height:'300px'}"></div>
  </div>
</template>

<script>
  export default {
    name: "dataManage",
    mounted(){
      this.drawChart()
    },
    methods:{
      drawChart(){
        let myChart1=this.$echarts.init(document.getElementById("chart1"));
        let myChart2=this.$echarts.init(document.getElementById("chart2"));
        let myChart3=this.$echarts.init(document.getElementById("chart3"));
        let myChart4=this.$echarts.init(document.getElementById("chart4"));
        let option1={
          title:{
            text:"阻断按行政等级汇总",
          },
          backgroundColor:"#ccc",
          tooltip:{
            /*trigger:'item',
            formatter:"{a}<br/>{b}:{c}({d}%)"*/
          } ,
          legend:{
            orient:'vertical' ,
            left:'left'   ,
            data:['国道','省道','县道']
          } ,
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  formatter: ' {b}：{c} \n\n',
                },
                /*emphasis: {
                  show: true,

                }*/
              }  ,
              labelLine: {
                normal: {
                  show: true
                }
              },
              data: [
                {value:"10",name:'县道10起',itemStyle:{color:'#21aae7'}},
                {value:"35",name:'国道35起',itemStyle:{color:'#aa3fd3'}},
                {value:"41",name:'省道41起',itemStyle:{color:'#e44091'}},
              ]
            }
          ]
        } ;
        let option2={
         title:{
           text: "echarts入门实例"
         },
         legend:{
           data:['销量']
         },
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        } ;
        let option3={
          backgroundColor:"#11144b",//整个包裹容器的背景色
          title:{
            text:'平均响应时间',
            textStyle: {
              fontWeight:'normal',//标题字体粗细
              color: '#fff', //标题字体颜色
              fontFamily:'Arial',
              fontSize:16,
            },
          },
          tooltip : {
            trigger: 'axis'
          },
          legend: {
            icon:'roundRect',
            top:20,
            textStyle:{
               color:'#fff',
               fontSize:12
            },
            data:[
              {
                name:'最近1小时'
              },
              {
                name:'最近4小时'
              },
              {
                name:'24小时'
              }
            ]
          },
          xAxis:[
            {
              type:'category',
              data:['12:00','13:00','14:00',"15:00",'16:00','17:00','18:00'],
              axisLabel:{
                show:'true',
                textStyle:{
                  color:'#fff'
                },
              },
              axisTick: {
                show: false
              },
              axisLine:{
                lineStyle:{
                  color:'#eee'
                }
              }
            }
          ],
          yAxis:[
            {
              type:'value',
              min:0,
              max:300,
              interval:50,
               splitLine: {//轴分割线
                 interval:1
               },
              axisLabel: {
                show: 'true',
                textStyle: {
                  color: '#fff'
                },
                formatter:'{value}k'
              },
              axisTick: {
                show: false
              },
              axisLine:{
                lineStyle:{
                  color:'#eee'
                }
              }
            },
          ],
          series : [
            {
              name:'最近1小时',
              symbol:'none',  //去掉曲线点的
              smooth:true,  //曲线变平滑的
              type:'line',
              color:'lightgreen',
              data:[100, 300, 200, 150, 200, 130, 120],
              areaStyle: {normal: {
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'lightgreen'},
                      {offset: 1, color: 'lightgreen'}
                    ]
                  )
                }},
            },
            {
              name:'最近4小时',
              symbol:'none',  //去掉曲线点的
              smooth:true,  //曲线变平滑的
              type:'line',
              color:'lightblue',
              data:[50, 150, 245, 100, 60, 110, 105],
              /*
              * 渐变色：echarts.graphic.LinearGradient来声明渐变色.  使用时传入了5个参数.
              *        前4个参数用于配置渐变色的起止位置, 这4个参数依次对应右/下/左/上四个方位. 而0 0 0 1则代表渐变色从正上方开始.
              *        第5个参数则是一个数组, 用于配置颜色的渐变过程. 每一项为一个对象, 包含offset和color两个参数.
              *         offset的范围是0 ~ 1, 用于表示位置, color表示颜色
              * */
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(  //渐变色生成器
                    0, 0, 0, 1,
                    [
                      {offset: 0, color: 'lightblue'},
                      {offset: 1, color: 'lightblue'}
                    ]
                  )
                }},

            },
          ]
        }
        let option4={
          legend:{
             data:[
               {
                 name:'销售'
               },
               {
                 name:'销售额'
               },
               {
                 name:'销售利润'
               }
             ],
             left:'right'
          },
          xAxis:[
            {
              type:'category',
              data:['小米','三星','苹果','TCL'],
            }
          ],
          yAxis:[
            {
              type:'value',
              name:'金额',
              nameRotate:90, //y轴名称旋转度数
              nameLocation:'center',
              nameGap:50,
              axisTick: {
                show: false
              },
              splitLine:{
                show:false
              },
              min: 0,
              max: 40000,
              interval: 10000,
            },
            {
              type:'value',
              name:'销量',
              nameRotate:-90,
              nameLocation:'center',
              nameGap:30,
              axisTick: {
                show: false
              },
              splitLine:{
                show:false
              },
              min:40,
              max:110,
              interval:10
            }
          ],
          series:[
            {
              name:'销售额',
              type:'bar',
              data:[8000,18000,28000,38000],
            },
            {
              name:'销售利润',
              type:'bar',
              data:[8000,18000,28000,38000]
            },
            {
              name:'销售',
              type:'line',
              data:[30000,10000,10000,20000],
              symbol:'none',  //去掉曲线点
              smooth:true,

            }
          ]
        };
        myChart1.setOption(option1);
        myChart2.setOption(option2);
        myChart3.setOption(option3);
        myChart4.setOption(option4)
      }
    }
  }



</script>

<style scoped lang="scss">
    .echartsWrap{
      width:1300px;
      display:flex;
      flex-flow: row wrap;   /* 换行 */
      justify-content: space-between;
      align-items: center;
    }
</style>
