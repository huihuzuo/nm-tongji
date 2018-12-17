<template>
    <div>
      <div class="header-wrap">
        <div class="header-left"></div>
        <div class="header-right">导出</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "headerNav"
    }
</script>

<style scoped lang="scss">
  $width:calc(100% - 200px);
  .header-wrap{
    width:$width;
    height:80px;
    background-color: pink;
    .header-left{
      width:600px;
      height:100%
    }
  }
</style>
