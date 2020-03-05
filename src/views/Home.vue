<template>
  <div class="home">

    <el-tabs v-model="activeName" @tab-click="change">
      
        <el-tab-pane label="输入分数选专业" name="search" >
          <first></first>
        </el-tab-pane>
      
      <el-tab-pane label="浏览各专业分数" name="browse" >
        <second></second>
      </el-tab-pane>
    </el-tabs>

    <router-view></router-view>

  </div>
</template>

<script>
import forecast from '@/views/Forecast.vue';
import browse from '@/views/Browse.vue';

export default {
  name: 'Home',
  components: {
    first:forecast,
    second:browse
  },
  data(){
    return {
      activeName:"search",
    }
  },
  methods:{
    change(tab, event){
      console.log(tab,event)
    },
    
  }

}
</script>

<style>

</style>