<template>
  <div>
    <keep-alive>
      <el-row :gutter="20">
        <el-col :span="6">
          <h5>选择你的专业</h5>

          <el-menu mode="horizontal" @select="choose">
            <el-submenu index="1" >
              <template slot="title">
                <i class="el-icon-setting"></i>
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
                <i class="el-icon-cpu"></i>
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
                <i class="el-icon-toilet-paper"></i>
                <span slot="title">造纸与植物资源工程学院	</span>
              </template>
              <el-menu-item index="3-1">轻化工程（制浆造纸工程方向）</el-menu-item>
              <el-menu-item index="3-2">林产化工</el-menu-item>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-goblet-square-full"></i>
                <span slot="title">生物工程学院</span>
              </template>
              <el-menu-item index="4-1">生物工程</el-menu-item>
              <el-menu-item index="4-2">生物技术</el-menu-item>
              <el-menu-item index="4-3">酿酒工程（设国际合作办学）</el-menu-item>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-baseball"></i>
                <span slot="title">皮革化学与工程学院</span>
              </template>
              <el-menu-item index="5-1">轻化工程（皮革、合成革方向）</el-menu-item>
              
            </el-submenu>

            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-printer"></i>
                <span slot="title">印刷与包装工程学院</span>
              </template>
              <el-menu-item index="6-1">印刷工程</el-menu-item>
              <el-menu-item index="6-2">包装工程</el-menu-item>
            </el-submenu>

            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-fork-spoon"></i>
                <span slot="title">食品科学与工程学院</span>
              </template>
              <el-menu-item index="6-1">食品科学与工程</el-menu-item>
              <el-menu-item index="6-2">食品质量与安全</el-menu-item>
            </el-submenu>

            <el-submenu index="8">
              <template slot="title">
                <i class="el-icon-moon"></i>
                <span slot="title">环境科学与工程学院</span>
              </template>
              <el-menu-item index="6-1">环境科学</el-menu-item>
              <el-menu-item index="6-2">环境工程</el-menu-item>
            </el-submenu>

            <el-submenu index="9">
              <template slot="title">
                <i class="el-icon-goods"></i>
                <span slot="title">工商管理学院</span>
              </template>
              <el-menu-item index="2-1">市场营销</el-menu-item>
              <el-menu-item index="2-2">人力资源管理</el-menu-item>
              <el-menu-item index="2-3">会计学</el-menu-item>
              <el-menu-item index="2-4">财务管理</el-menu-item>
              <el-menu-item index="2-5">信息管理与信息系统</el-menu-item>
              <el-menu-item index="2-6">国际商务</el-menu-item>
              <el-menu-item index="2-6">会计学（金融外包）</el-menu-item>
              <el-menu-item index="2-6">信息管理与信息系统（智能移动开发）</el-menu-item>
              <el-menu-item index="2-6">信息管理与信息系统（互联网营销）</el-menu-item>
            </el-submenu>

            <el-submenu index="10">
              <template slot="title">
                <i class="el-icon-paperclip"></i>
                <span slot="title">艺术学院</span>
              </template>
              <el-menu-item index="2-1">视觉传达设计</el-menu-item>
              <el-menu-item index="2-2">环境设计</el-menu-item>
              <el-menu-item index="2-3">产品设计</el-menu-item>
              <el-menu-item index="2-4">摄影</el-menu-item>
              <el-menu-item index="2-5">服装与服饰设计</el-menu-item>
              <el-menu-item index="2-6">音乐表演（声乐）</el-menu-item>
              <el-menu-item index="2-6">广告</el-menu-item>
            </el-submenu>

            <el-submenu index="11">
              <template slot="title">
                <i class="el-icon-brush"></i>
                <span slot="title">化学与制药工程学院</span>
              </template>
              <el-menu-item index="2-1">化学工程与工艺</el-menu-item>
              <el-menu-item index="2-2">应用化学</el-menu-item>
              <el-menu-item index="2-3">制药工程</el-menu-item>
              <el-menu-item index="2-4">药物制剂</el-menu-item>
              <el-menu-item index="2-5">化学</el-menu-item>
              <el-menu-item index="2-6">应用化学国际实验班</el-menu-item>
            </el-submenu>

            <el-submenu index="12">
              <template slot="title">
                <i class="el-icon-coin"></i>
                <span slot="title">材料科学与工程学院</span>
              </template>
              <el-menu-item index="2-1">无机非金属材料工程</el-menu-item>
              <el-menu-item index="2-2">高分子材料与工程</el-menu-item>
              <el-menu-item index="2-3">材料化学</el-menu-item>
              <el-menu-item index="2-4">宝石与材料工艺学</el-menu-item>
              <el-menu-item index="2-5">复合材料与工程</el-menu-item>
            </el-submenu>

            <el-submenu index="13">
              <template slot="title">
                <i class="el-icon-monitor"></i>
                <span slot="title">计算机科学与技术学院</span>
              </template>
              <el-menu-item index="2-1">计算机科学与技术</el-menu-item>
              <el-menu-item index="2-2">物联网工程</el-menu-item>
              <el-menu-item index="2-3">软件工程</el-menu-item>
              <el-menu-item index="2-4">数据科学与大数据技术</el-menu-item>
              <el-menu-item index="2-5">计算机科学与技术（软件外包）</el-menu-item>
              <el-menu-item index="2-5">计算机科学与技术（嵌入式）</el-menu-item>
            </el-submenu>

            <el-submenu index="14">
              <template slot="title">
                <i class="el-icon-aim"></i>
                <span slot="title">政法学院</span>
              </template>
              <el-menu-item index="2-1">法学</el-menu-item>
              <el-menu-item index="2-2">汉语国际教育</el-menu-item>
              <el-menu-item index="2-3">行政管理</el-menu-item>
            </el-submenu>

            <el-submenu index="15">
              <template slot="title">
                <i class="el-icon-chat-square"></i>
                <span slot="title">外国语学院</span>
              </template>
              <el-menu-item index="2-1">英语</el-menu-item>
              <el-menu-item index="2-2">日语</el-menu-item>
              <el-menu-item index="2-3">翻译</el-menu-item>
            </el-submenu>

            <el-submenu index="16">
              <template slot="title">
                <i class="el-icon-reading"></i>
                <span slot="title">理学院</span>
              </template>
              <el-menu-item index="2-1">信息与计算科学</el-menu-item>
              <el-menu-item index="2-2">电子信息科学与技术</el-menu-item>
              <el-menu-item index="2-3">应用统计学</el-menu-item>
              <el-menu-item index="2-4">信息与计算科学（云计算）</el-menu-item>
              <el-menu-item index="2-5">微电子科学与工程</el-menu-item>
            </el-submenu>

            <el-submenu index="17">
              <template slot="title">
                <i class="el-icon-wallet"></i>
                <span slot="title">金融学院</span>
              </template>
              <el-menu-item index="2-1">金融学</el-menu-item>
              <el-menu-item index="2-2">国际经济与贸易</el-menu-item>
              <el-menu-item index="2-3">信息管理与信息系统（互联网金融方向）</el-menu-item>
            </el-submenu>

            <el-submenu index="18">
              <template slot="title">
                <i class="el-icon-sunny"></i>
                <span slot="title">光电工程国际化示范学院</span>
              </template>
              <el-menu-item index="2-1">光电信息科学与工程</el-menu-item>
            </el-submenu>

            <el-submenu index="19">
              <template slot="title">
                <i class="el-icon-lightning"></i>
                <span slot="title">网络空间安全学院</span>
              </template>
              <el-menu-item index="2-1">网络空间安全</el-menu-item>
            </el-submenu>

            <el-submenu index="20">
              <template slot="title">
                <i class="el-icon-switch-button"></i>
                <span slot="title">能源与动力工程学院</span>
              </template>
              <el-menu-item index="2-1">能源与动力工程</el-menu-item>
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