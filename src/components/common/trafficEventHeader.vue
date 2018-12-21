<template>
  <div class="trafficHeader-wrap">
    <div class="trafficHeader-left">
      <img class='img' src="" alt="">
      <div class="trafficHeader-left-second">
        <el-dropdown>
          <span class="el-dropdown-link">
            <span>交通事件-</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              @command="handleCommand(item)"
              v-for="item in trafficChoose"
              :key="item.value"
              :label="item.label"
              :value="item.value">
              {{item.label}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="trafficHeader-center">
      <div
        class="header-choose"
        @click="go(title)"
        v-for="(title, index) in weiduList2"
        :key="index"
        :index="title.index"
        :class="selected === title.alias ? 'titleSelected':''">
        {{title.name}}</div>
    </div>
    <div></div>
  </div>
</template>

<script>
    export default {
      name: 'trafficEventHeader',
      data(){
          return{
            weiduList2:[],
            selected:null,
            trafficChoose:[{'index':'01', 'label':'高德'},{'index':'02', 'label':'行业'}]
          }
      },
      mounted(){
         this.loadWeiduList2('weiduList2')
      },
      methods:{
        loadWeiduList2(val){
          this.$api.loadWeiduList2(val)
            .then(res =>{
              if(res.status === 200){
                this.weiduList2 = res.data
              }else{
                this.$message.error("err")
              }
            }).catch(err =>{
            this.$message.error("err")
          })
        },
        go(title){
          this.selected = title.alias
          this.$router.push({
            name: title.alias
          })
        },
      }
    }
</script>

<style scoped lang="scss">
  .trafficHeader-wrap{
    width:100%;
    height:50px;
    background-color: #fff;
    border-bottom: 2px solid lightblue;
    display:flex;
    justify-content: space-between;
    .trafficHeader-left{
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding:5px;
      .img{
        display:block;
        width:20px;
        height:20px;
        border-radius: 20px;
        background-color: rgb(26,130,238);
      }
      .trafficHeader-left-second{
        text-align: center;
        line-height:50px;
        margin-left:10px;
        .el-dropdown-link span{
          color:rgb(26,130,238);
        }
      }
    }
    .trafficHeader-center{
      .header-choose{
        float:left;
        text-align: center;
        line-height:50px;
        width:100px;
        font-size:12px;
        font-family:SimSun;
        color:rgb(60,60,60);
        &:hover{
          cursor: pointer;
        }
      }
      .titleSelected{
        border-left:1px solid rgb(26,130,238);
        border-right:1px solid rgb(26,130,238);
        border-bottom:2px solid #eee
      }
    }


  }
</style>
