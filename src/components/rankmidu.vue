<template>
  <div>
    <el-row type="flex" justify="center">
      <el-radio-group v-model="which">
        <el-radio-button label="year2019">
          2019
        </el-radio-button>
        <el-radio-button label="year2018">
          2018
        </el-radio-button>
        <el-radio-button label="year2017">
          2017
        </el-radio-button>
      </el-radio-group>
    </el-row>
    <div class="rank"></div>
  </div>

</template>

<script>
import echarts from "echarts";
import store from "@/store/index";

export default {
  name:'',
  data(){
    return{
      charts:'',
      which:'year2019',
      ranksNow:{
        ranksX:[],
        ranksY:[],
      }
    }
  },

  computed:{
    majorNow: function() {
      return store.state.majorNow;
    },

    xdata: function() {
      //返回X轴的名次
      var scoresX=store.getters.getX
      var ranks=[]
      scoresX.forEach(score => {
        ranks.push(store.state.getters.getrankx(score))
      });
      return ranks
    },

    rank19: function() {
      var after = [];
      for (var key in this.xdata) {
        var value = store.getters.getrank19(this.xdata[key]);
        if (typeof value == "undefined") {
          value = null;
        }
        after.push(value);
      }
      console.log("Y19位次数据", after);
      return after;
    },
    rank18: function() {
      var after = [];
      for (var key in this.xdata) {
        var value = store.getters.getrank18(this.xdata[key]);
        if (typeof value == "undefined") {
          value = null;
        }
        after.push(value);
      }
      console.log("Y18位次数据", after);
      return after;
    },
    rank17: function() {
      var after = [];
      for (var key in this.xdata) {
        var value = store.getters.getrank17(this.xdata[key]);
        if (typeof value == "undefined") {
          value = null;
        }
        after.push(value);
      }
      console.log("Y17位次数据", after);
      return after;
    },
  },

  watch: {
    majorNow: function() {
      console.log("密度，监听到majorNow改变");
      this.drawLine("midu");
    },
    
  },

  methons:{
    drawLine(classname){
      this.charts = echarts.init(document.getElementsByClassName(classname)[0]);
      var labelOption = {
        rich: {
          name: {
            textBorderColor: "#fff"
          }
        }
      };
      this.charts.setOption({

        title: {
          text: "位次密度统计表",
          subtitle: "某一位次的人数占比",
          left: "right",
          top: "top",
          textStyle: {
            color: "#000"
          }
        },

        color: [ "#57abff","#ff34c2","#ff9d2d"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line"
          },
        },

        legend:{
          data:['17级','18级','19级']
        },

        toolbox: {
          show: true,
          orient: "vertical",
          left: "right",
          top: "center",
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar", "stack", "tiled"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },

        xAxis: [
          {
            type: "category",
            axisTick: { show: false },
            data: this.xdata
          }
        ],

        yAxis:[
          {
            type:'value',
            min:'dataMin',
            max:'dataMax',
            inverse:true,
            axisLabel:{
              formatter:'排名 {value}'
            },
          }
        ],

        series:[
          {
            name:'19级位次',
            type:'line',
            label:labelOption,
            data:this.rank19
          },
          {
            name:'18级位次',
            type:'line',
            label:labelOption,
            data:this.rank18
          },
          {
            name:'17级位次',
            type:'line',
            label:labelOption,
            data:this.rank17
          },
        ]

      })
    }
  }
}
</script>

<style>
.rank{
  width: 100%;
  height: 500px;
  color: #57abff, #ff34c2, #ff9d2d;
}
</style>