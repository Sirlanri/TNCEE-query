<template>
  <div class="home">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="18">
        <el-tabs v-model="activeName">
          <el-tab-pane label="输入分数选专业" name="search">
            <first></first>
          </el-tab-pane>

          <el-tab-pane label="浏览各专业分数" name="browse">
            <second></second>
          </el-tab-pane>
        </el-tabs>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import forecast from "@/views/Forecast.vue";
import browse from "@/views/Browse.vue";

export default {
  name: "Home",
  components: {
    first: forecast,
    second: browse
  },
  data() {
    return {
      activeName: "browse"
    };
  },
  methods: {
    
  }
};
</script>

<style>
html {
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>