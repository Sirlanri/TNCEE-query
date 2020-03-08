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
          data:['最低分','平均分','平均名次']
        },

        grid:{
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox:{
          feature:{
            saveImage:{},
          }
        },
        
        xAxis:{
          type:'category',
          boundaryGap:false,
          data: ["17级","18级","19级"]
        },
        yAxis:[{
          type:'value',
          min:'dataMin',
          max:'dataMax',
        },
        {
          type:'value',
          min:'dataMin',
          max:'dataMax',

          axisLabel:{
            formatter:'排名 {value}'
          }
        }
        ],
        series:[
          {
            name:"平均分",
            type:'line',
            data:this.convert(this.majorNow.scoreave)
          },
          {
            name:"最低分",
            type:'line',
            data:this.convert(this.majorNow.scoremin)
          },
          {
            name:'平均名次',
            type:'line',
            yAxisIndex: 1,
            data:this.convert(this.majorNow.rankmin)
          }
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