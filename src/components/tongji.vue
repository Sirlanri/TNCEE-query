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
      console.log("统计，监听到majorNow改变");
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
          data:['平均分','最低分','最低名次']
        },
        color:["#0044d6","#ca00a9","#10c400"],

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
          inverse:true,
          axisLabel:{
            formatter:'排名 {value}'
          }
        }
        ],
        series:[
          {
            name:"平均分",
            type:'line',
            data:this.majorNow.scoreave
          },
          {
            name:"最低分",
            type:'line',
            data:this.majorNow.scoremin
          },
          
          {
            name:'最低名次',
            type:'line',
            yAxisIndex: 1,
            data:this.majorNow.rankmin
          }
        ]
      })
    },
  },

  
}
    

</script>

<style>
.first{
  width: 100%;
  height: 400px;
  color: #0044d6,#ca00a9,#10c400;
}
</style>