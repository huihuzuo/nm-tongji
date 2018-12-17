<template>
   <div>
     <trafficCountHeader></trafficCountHeader>
     <div class="luxianWeidu-content">
       <selectorHeader></selectorHeader>

     </div>
   </div>
</template>

<script>
  import trafficCountHeader from '../common/trafficCountHeader'
  import selectorHeader from '../common/selectorHeader'
    export default {
      name: 'xingzhengquhuaWeidu',
      components:{
        trafficCountHeader,
        selectorHeader
      }
    }
</script>

<style scoped>

</style>
