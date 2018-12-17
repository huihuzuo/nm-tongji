<template>
  <div class="outer-wrap">信息看板
    <div class="inner-wrap">
      <div class="inner-top">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="inner-bottom"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "infoBoard"
    }
</script>

<style scoped lang="scss">
 .outer-wrap {
   width: calc(100% - 100px);
   height: calc(100% - 60px);
   background-color: #eee;
   margin:5px auto;
   .inner-wrap{
     width:100%;
     height:100%;
   }
    .inner-top,.inner-bottom {
     width: 100%;
     height:calc(100% / 2);
     background-color:#fff;
     margin-bottom:10px;
     box-shadow: rgba(53, 150, 214, 0.37);
    }
 }


</style>
