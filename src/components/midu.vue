<template>
  <div class="midu"></div>
</template>

<script>
import echarts from "echarts";
import store from "@/store/index";

export default {
  name: "",
  data() {
    return {
      charts: ""
    };
  },
  computed: {
    majorNow: function() {
      return store.state.majorNow;
    },
    xdata: function() {
      return store.getters.getX;
    },
    data17: function() {
      var after = [];
      for (var key in this.xdata) {
        var value = store.getters.get17(this.xdata[key]);
        if (typeof value == "undefined") {
          value = 0;
        }
        after.push(value);
      }
      console.log("Y17数据", after);
      return after;
    },
    data18: function() {
      var after = [];
      for (var key in this.xdata) {
        var value = store.getters.get18(this.xdata[key]);
        if (typeof value == "undefined") {
          value = 0;
        }
        after.push(value);
      }
      console.log("Y18数据", after);
      return after;
    },
    data19: function() {
      var after = [];
      for (var key in this.xdata) {
        var value = store.getters.get19(this.xdata[key]);
        if (typeof value == "undefined") {
          value = 0;
        }
        after.push(value);
      }
      console.log("Y19数据", after);
      return after;
    }
  },
  watch: {
    majorNow: function() {
      console.log("密度，监听到majorNow改变");
      this.drawLine("midu");
    }
  },
  methods: {
    drawLine(classname) {
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
          text: "分数密度统计表",
          subtitle: "每一分的人数占比",
          left: "right",
          top: "top",
          textStyle: {
            color: "#000"
          }
        },
        color: ["#0061c2", "#cf0091", "#dd7703", "#e5323e"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line"
          },
          formatter: function(params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                "<br/>" +
                params[i].seriesName +
                " : " +
                (params[i].value * 100).toFixed(2) +
                "%";
            }
            return relVal;
          }
        },

        legend: {
          data: ["17级", "18级", "19级"]
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
            data: store.getters.getX
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: function(value) {
                return (value * 100).toFixed(0) + "%";
              }
            }
          }
        ],
        series: [
          {
            name: "19级",
            type: "line",
            label: labelOption,
            data: this.data19
          },
          {
            name: "18级",
            type: "line",
            label: labelOption,
            data: this.data18
          },
          {
            name: "17级",
            type: "line",
            barGap: 0,
            label: labelOption,
            data: this.data17
          }
        ]
      });
    }
  }
};
</script>

<style>
.midu {
  width: 100%;
  height: 500px;
  color: #0061c2, #cf0091, #dd7703;
}
</style>