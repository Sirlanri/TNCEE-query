<template>
  <div>
    <keep-alive>
      <el-row :gutter="20">
        <el-col :span="8">
          <h5>选择你的专业</h5>

          <el-menu mode="horizontal" @select="choose">
            <el-submenu index="1" >
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>机械与汽车工程学院</span>
              </template>

              <el-menu-item index="1-1">机械设计制造及其自动化</el-menu-item>
              <el-menu-item index="1-2">材料成型及控制工程</el-menu-item>
              <el-menu-item index="1-3">工业设计</el-menu-item>
              <el-menu-item index="1-4">过程装备与控制工程</el-menu-item>
              <el-menu-item index="1-5">汽车服务工程</el-menu-item>
              <el-menu-item index="1-6">机器人工程</el-menu-item>
              <el-menu-item index="1-7">工业设计（3D仿真）</el-menu-item>
              <el-menu-item index="1-8">机械设计制造及其自动化（中德合作）</el-menu-item>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">电气工程与自动化学院</span>
              </template>
              <el-menu-item index="2-1">电气工程及其自动化</el-menu-item>
              <el-menu-item index="2-2">自动化</el-menu-item>
              <el-menu-item index="2-3">电子信息工程</el-menu-item>
              <el-menu-item index="2-4">通信工程</el-menu-item>
              <el-menu-item index="2-5">测控技术与仪器</el-menu-item>
              <el-menu-item index="2-6">通信工程（移动通信技术方向）</el-menu-item>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">造纸与植物资源工程学院	</span>
              </template>
              <el-menu-item index="3-1">轻化工程（制浆造纸工程方向）</el-menu-item>
              <el-menu-item index="3-2">林产化工</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">生物工程学院</span>
              </template>
              <el-menu-item index="4-1">生物工程</el-menu-item>
              <el-menu-item index="4-2">生物技术</el-menu-item>
              <el-menu-item index="4-3">酿酒工程（设国际合作办学）</el-menu-item>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">皮革化学与工程学院</span>
              </template>
              <el-menu-item index="5-1">轻化工程（皮革、合成革方向）</el-menu-item>
              
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">印刷与包装工程学院</span>
              </template>
              <el-menu-item index="6-1">印刷工程</el-menu-item>
              <el-menu-item index="6-2">包装工程</el-menu-item>
              
            </el-submenu>


          </el-menu>

          
        </el-col>
      </el-row>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["all"],
      isheng:true,
    };
  },
  methods:{
    choose(index,indexpath){
      console.log(index,indexpath)//path是要的路径
    }
  }
};
</script>

<style>
.major {
  margin-top: 100px;
}

</style>