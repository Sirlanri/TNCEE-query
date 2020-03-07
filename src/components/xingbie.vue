<template>
  <div class="pietu"></div>
</template>

<script>
import echarts from 'echarts';
import store from "@/store/index";

export default {
  name:'',
  data() {
    return {
      chart: "",
      
    };
  },
  computed: {
    majorNow: function() {
      return store.state.majorNow;
    }
  },
  watch: {
    majorNow: function() {
      this.drawLine("pietu");
    }
  },
  methods: {
    drawLine(classname) {
      this.charts = echarts.init(document.getElementsByClassName(classname)[0])
      this.charts.setOption({

    title: {
        text: '男女性别比',
        subtitle:'男:女',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#000'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
        show: false,
        min: 0,
        max: 1,
        inRange: {
            colorLightness: [0.2, 0.7]
        }
    },
    series: [
        {
            name: '性别比例',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: this.majorNow.sex, name: '男'},
                {value: 1-this.majorNow.sex, name: '女'},
                
            ],
            roseType: 'radius',
            label: {
                color: 'rgba(100, 100, 100, 0.8)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#c23531',
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.3)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function () {
                return Math.random() * 200;
            }
        }
    ]
});
    }
  }
};
</script>

<style>
.pietu{
  width: 100%;
  height: 400px;
}
</style>