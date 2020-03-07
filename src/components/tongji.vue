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
      opinionData:[eval(store.state.majorNow.scoreave)]
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
          data:['录取分数变化']
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
          name:"录取分数变化",
          type:'line',
          stack:'总量',
          data:this.opinionData
        }]
      })
    }
  },
  mounted(){
    this.$nextTick(function(){
      this.drawLine('first')
    })
  }
}
    

</script>

<style>
#first{
  width: 600px;
  height: 400px;
}
</style>