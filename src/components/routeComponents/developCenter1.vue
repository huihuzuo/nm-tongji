<template>
    <div>开发中心1</div>
</template>

<script>
  import 'echarts/src/chart/pie'
  export default {
    name: "developCenter2" ,
    data(){
      return{
        a:1,
        b:{
          age:18
        }
      }
      },
    watch:{
      a(val,oldVal){
        console.log('a:'+val,oldVal)
      },
      b:{
        handler(val,oldVal){
          console.log("b.c:"+val.c,oldVal)
        },
        deep:true,
      }
    }
  }

</script>

<style scoped>

</style>
