<template>
  <div class="content">
    <div class="table-header">
      <div class="bar"></div>
      <div>阻断事件统计汇总</div>
    </div>
    <el-table
      :data="indexRanking"
      border
      height="600px">
      <el-table-column
        prop="rank"
        label="排名"
        width="50"
        align="center">
      </el-table-column>
      <el-table-column
        prop="qh"
        label="区划"
        width="110"
        align="center"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="zdzs"
        label="阻断总数(起)"
        width="84"
        align="center">
      </el-table-column>
      <el-table-column
        prop="yxlc"
        label="影响里程(km)"
        width="87"
        align="center">
      </el-table-column>
      <el-table-column
        prop="yzd"
        label="已中断(起)"
        width="83"
        align="center">
      </el-table-column>
      <el-table-column
        prop="gzlc"
        label="管制里程"
        width="82"
        align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
    export default {
      name: 'trafficEventRanking',
      data(){
          return{
             indexRanking:[]
          }
      },
      mounted(){
        this.loadIndexRanking('indexRanking')
      },

      methods:{
          loadIndexRanking(val){
            this.$api.loadIndexRanking(val)
              .then(res =>{
                if(res.status === 200){
                  this.indexRanking = res.data
                }else{
                  this.$message.error('err')
                }
              }).catch(err =>{
              this.$message.error('err')
            })
          },

        }

    }
</script>

<style scoped lang="scss">
  .table-header{
    display:flex;
    margin-bottom:16px;
  .bar{
    width:4px;
    height:13px;
    background-color: rgb(26,130,238);
  }
  div{
    font-size:12px;
    font-family: SimSun;
  }
  div:nth-child(2){
    margin-left:7px;
  }
  div:nth-child(3){
    margin-left:10px;
  }

  }
</style>
