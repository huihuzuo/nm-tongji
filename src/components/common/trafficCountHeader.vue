<template>
   <div class="trafficHeader-wrap">
     <div class="trafficHeader-left">
       <img class='img' src="" alt="">
       <div class="trafficHeader-left-second">
         <el-dropdown>
          <span class="el-dropdown-link">
            <span>交通流量-高德</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>百度</el-dropdown-item>
          </el-dropdown-menu>
         </el-dropdown>
       </div>
     </div>
     <div class="trafficHeader-center">
       <div
         @click="go(title)"
         v-for="(title, index) in weiduList"
         :key="index"
         :index="title.index"
         >
         {{title.name}}</div>
     </div>
     <div></div>
   </div>
</template>

<script>
    export default {
      name: 'trafficCountHeader',
      data() {
        return{
          weiduList:[],
          selected:null,
        }
      },
      mounted(){
        this.loadWeiduList("weiduList")
      },
      methods:{
        loadWeiduList(val){
          this.$api.loadWeiduList(val)
            .then(res =>{
              if(res.status === 200){
                this.weiduList = res.data
              }else{
                this.$message.error("err")
              }
            }).catch(err =>{
            this.$message.error("err")
          })
        },
        go(title){
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
      div{
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


    }


  }
</style>
