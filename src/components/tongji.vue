<template>
  <div id="first" >

  </div>
</template>

<script>
import echarts from 'echarts';
import store from '@/store/index';

export default{
  name:'',
  data(){
    return{
      charts:'',
      
    }
  },
  computed:{
    majorNow:function(){
      return store.state.majorNow
    }
  },
  watch:{
    majorNow:function(){
      this.drawLine("first")
    }
  },
  methods:{
    drawLine(id){
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip:{
          trigger:'axis'
        },
        legend:{
          data:['平均分','最低分']
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
          type:'value'
        },
        series:[{
          name:"最低分",
          type:'line',
          stack:'总量',
          data:this.convert(this.majorNow.scoremin)
        },
        {
          name:"平均分",
          type:'line',
          data:this.convert(this.majorNow.scoreave)
        }]
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
#first{
  width: 600px;
  height: 400px;
}
</style>