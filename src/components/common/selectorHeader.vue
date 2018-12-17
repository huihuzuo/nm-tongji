<template>
   <div class="selector-header">
     <div class="selector-innerWrap">
       <el-form :inline="true" :model="formInline" class="demo-form-inline" size="mini">
         <el-form-item label="行政区划:" >
           <el-select v-model="formInline.user" placeholder="行政区划" clearable>
             <el-option label="区域一" value="shanghai"></el-option>
           </el-select>
         </el-form-item>
         <div class="block">
           <span class="demonstration">选择时间</span>
           <el-date-picker
             size="mini"
             v-model="value1"
             type="date"
             placeholder="选择日期">
           </el-date-picker>
         </div>
         <el-form-item>
           <el-button type="primary" @click="onSubmit">统计分析</el-button>
         </el-form-item>
       </el-form>
     </div>
   </div>
</template>

<script>
    export default {
     name: 'selectorHeader',
     data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        value1: '',

      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
    }
</script>

<style scoped lang="scss">
   .selector-header{
     width:100%;
     height:50px;
     background-color: rgba(26,130,238,0.05);
     line-height:50px;
     display:flex;
     justify-content: space-between;
     align-items: center;
     .selector-innerWrap{
       width:670px;
       height:30px;
       margin-left:31px;
       margin-top:15px;
       .el-form{
         height:100%;
         display:flex;
         justify-content: space-around;
         align-items: center;
         .el-form-item{
           height:100%;
           display:flex;
           justify-content: space-between;
           margin-left:-37px;
           .el-form-item__label{
             font-size:12px!important;
             text-align: left;
             line-height:30px;
             font-family: SimSun;
           }
           .el-button{
             background-color: #fff;
             color:#409EFF;
             border-radius: 8px;
           }
           .el-input--suffix{
             width:70%;
           }
           .el-input__inner{
             width:60%;
           }
         }
         .block{
           height:100%;
           margin-top:-40px;
           margin-right:18px;
           .demonstration{
             font-size:14px;
             font-family: SimSun;
             color:#606266;
           }

         }
       }

     }
   }
</style>
