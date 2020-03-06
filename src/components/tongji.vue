<template>
  <div>
    这个页面是echart图标
    <ve-line :data="chartData1"
      :scale="conf.scale"
      :min="conf.min"
    ></ve-line>
  </div>
</template>

<script>
export default {
  data(){
    return{
      conf:{
        scale:[true,true],
        minnum:[500,"17"]
      },
      chartData1:{
        columns:['年级','平均分','最低分'],
        rows:[
          {'年级':'17','平均分':515,'最低分':509},
          {'年级':'18','平均分':517,'最低分':504},
          {'年级':'19','平均分':530,'最低分':512},
        ]
      }
    }
  }
};
</script>

<style>
</style>