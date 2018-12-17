<template>
 <div>
   <trafficCountHeader></trafficCountHeader>
   <div class="luxianWeidu-content">
      <selectorHeader/>

   </div>
 </div>

</template>

<script>
  import trafficCountHeader from '../common/trafficCountHeader'
  import selectorHeader from '../common/selectorHeader'
    export default {
      name: 'luxianWeidu',
      components:{
        trafficCountHeader,
        selectorHeader
      }
    }
</script>

<style scoped lang="scss">
  .luxianWeidu-content{
    width:100%;
    height:700px;
    background-color: #fff;
  }

</style>
