<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    text-color="#FFFFFF"
    background-color="#545c64">
    <el-submenu v-for="(title, index) in navList" :key="index" :index="title.index" v-if="title.children">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{title.name}}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item v-for="(child, i) in title.children" :key="i" :index="child.index" @click="goTo(child)">
          {{child.name}}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item v-else :index="title.index" @click="goTo(title)">
      <i class="el-icon-setting"></i>
      <span slot="title">{{title.name}}</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
  export default {
    name: 'nav',
    data(){
      return{
        navList:[]
      }
    },
    mounted() {
      //导航
      this.loadNavList("navList")
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
      goTo(title) {
        this.$router.push({
          name: title.alias
        })
      },

      loadNavList(val){
        this.$api.loadNavList(val)
          .then(res =>{
            if(res.status === 200){
              this.navList = res.data
            }else{
              this.$message.error("err")
            }
          }).catch(err =>{
            this.$message.error("err")
        })
      }
    },
    computed(){

    },
    created() {

    }

  }
</script>

<style scoped lang="scss">

</style>
