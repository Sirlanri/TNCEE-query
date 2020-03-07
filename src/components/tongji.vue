<template>
  <div class="first" >

  </div>
</template>

<script>
import echarts from 'echarts';
import store from '@/store/index';

export default {
  name:'',
  data(){
    return{
      charts:'',
      
    }
  },
  computed:{
    majorNow:function(){
      return store.state.majorNow
    },
  },
  watch:{
    majorNow:function(){
      this.drawLine("first")
    }
  },
  methods:{
    drawLine(classname){
      this.charts = echarts.init(document.getElementsByClassName(classname)[0])
      this.charts.setOption({
        tooltip:{
          trigger:'axis'
        },
        legend:{
          data:['最低分','平均分']
        },

        grid:{
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox:{
          feature:{
            saveImage:{}
          }
        },
        
        xAxis:{
          type:'category',
          boundaryGap:false,
          data: ["17级","18级","19级"]
        },
        yAxis:{
          type:'value',
          min:'dataMin',
          max:'dataMax',
        },
        series:[
          {
          name:"平均分",
          type:'line',
          data:this.convert(this.majorNow.scoreave)
          },
          {
          name:"最低分",
          type:'line',
          stack:'总量',
          data:this.convert(this.majorNow.scoremin)
        },
        ]
      })
    },

    convert(scores){
      var after = [];
      for (var score in scores) {
        after.push(scores[score])
        console.log(scores[score]);
      }
      return after
    }
  },

  
}
    

</script>

<style>
.first{
  width: 100%;
  height: 400px;
}
</style>