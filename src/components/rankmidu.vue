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
      charts:"",
      which:'year2019',
      ranksNow:{
        ranksX:[],
        ranksY:[],
      },

      
    };
  },

  computed:{
    majorNow: function() {
      return store.state.majorNow;
    },

    
  },

  watch: {
    majorNow: function() {
      console.log("位次图-密度，监听到majorNow改变");
      this.drawLine("rank");
    },

    //根据which变化，更改表中数据的年份
    which:function(){
      switch (this.which) {
        case 'year2019':
          this.ranksNow.ranksX=this.xdata19
          this.ranksNow.ranksY=this.rank19
          this.drawLine("rank");
          break;
        case 'year2018':
          this.ranksNow.ranksX=this.xdata18
          this.ranksNow.ranksY=this.rank18
          this.drawLine("rank");
          break;
        case 'year2017':
          this.ranksNow.ranksX=this.xdata17
          this.ranksNow.ranksY=this.rank17
          this.drawLine("rank");
          break;
        default:
          break;
      }
      
    }
  },

  methods:{//获得X轴数据，根据which的不同，选择不同年份的getter方法
    xdata19: function() {
      //返回X轴的位次
      var scoresX=store.getters.getX
      var ranks=[]
      scoresX.forEach(score => {
        ranks.push(store.getters.getrankx19(score))
      });
      return ranks
    },
    xdata18: function() {
      //返回X轴的位次
      var scoresX=store.getters.getX
      var ranks=[]
      scoresX.forEach(score => {
        ranks.push(store.getters.getrankx18(score))
      });
      return ranks
    },
    xdata17: function() {
      //返回X轴的位次
      var scoresX=store.getters.getX
      var ranks=[]
      scoresX.forEach(score => {
        ranks.push(store.getters.getrankx17(score))
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
            data: this.ranksNow.rank19
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
            data:this.ranksNow.ranksY
          }
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