<template>
  <div>
    <keep-alive>
      <el-row :gutter="20">
        <el-col :span="6">
          <h4>选择专业</h4>

          <el-menu mode="horizontal" @select="choose">
            <el-submenu index="机械与汽车工程学院">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>机械与汽车工程学院</span>
              </template>
              <el-menu-item index="机械设计制造及其自动化">机械设计制造及其自动化</el-menu-item>
              <el-menu-item index="材料成型及控制工程">材料成型及控制工程</el-menu-item>
              <el-menu-item index="工业设计">工业设计</el-menu-item>
              <el-menu-item index="机器人工程">机器人工程</el-menu-item>
              <el-menu-item index="工业设计(校企合作，山东新视觉数码有限公司)">工业设计(校企合作)</el-menu-item>
              <el-menu-item index="机械设计制造及其自动化(中外合作办学)">机械设计制造及其自动化(中德合作)</el-menu-item>
            </el-submenu>

            <el-submenu index="电气工程与自动化学院">
              <template slot="title">
                <i class="el-icon-cpu"></i>
                <span slot="title">电气工程与自动化学院</span>
              </template>
              <el-menu-item index="电气工程及其自动化">电气工程及其自动化</el-menu-item>
              <el-menu-item index="自动化">自动化</el-menu-item>
              <el-menu-item index="电子信息工程">电子信息工程</el-menu-item>
              <el-menu-item index="通信工程">通信工程</el-menu-item>
              <el-menu-item index="微电子科学与工程">微电子科学与工程</el-menu-item>
              <el-menu-item index="电子信息科学与技术">电子信息科学与技术</el-menu-item>
              <el-menu-item index="测控技术与仪器(招收海洋测控方向)">测控技术与仪器(海洋测控)</el-menu-item>
              <el-menu-item index="通信工程(校企合作，山东中兴教育咨询有限公司)">通信工程(校企合作)</el-menu-item>
            </el-submenu>

            <el-submenu index="造纸与植物资源工程学院">
              <template slot="title">
                <i class="el-icon-toilet-paper"></i>
                <span slot="title">造纸与植物资源工程学院</span>
              </template>
              <el-menu-item index="轻化工程(制浆造纸工程方向)">轻化工程(制浆造纸工程方向)</el-menu-item>
              <el-menu-item index="林产化工">林产化工</el-menu-item>
            </el-submenu>

            <el-submenu index="生物工程学院">
              <template slot="title">
                <i class="el-icon-goblet-square-full"></i>
                <span slot="title">生物工程学院</span>
              </template>
              <el-menu-item index="生物工程">生物工程</el-menu-item>
              <el-menu-item index="生物技术">生物技术</el-menu-item>
              <el-menu-item index="酿酒工程">酿酒工程</el-menu-item>
              <el-menu-item index="酿酒工程(中外合作办学)">酿酒工程(中外合作办学)</el-menu-item>
              <el-menu-item index="生物技术(中外合作办学)">生物技术(中外合作办学)</el-menu-item>
            </el-submenu>

            <el-submenu index="轻工科学与工程学院">
              <template slot="title">
                <i class="el-icon-printer"></i>
                <span slot="title">轻工科学与工程学院</span>
              </template>
              <el-menu-item index="轻化工程(皮革、合成革方向)">轻化工程(皮革、合成革方向)</el-menu-item>
              <el-menu-item index="印刷工程">印刷工程</el-menu-item>
              <el-menu-item index="包装工程">包装工程</el-menu-item>
              <el-menu-item index="新媒体技术">新媒体技术</el-menu-item>
              <el-menu-item index="轻化工程(中外合作办学)">轻化工程(中外合作办学)</el-menu-item>
            </el-submenu>

            <el-submenu index="食品科学与工程学院">
              <template slot="title">
                <i class="el-icon-fork-spoon"></i>
                <span slot="title">食品科学与工程学院</span>
              </template>
              <el-menu-item index="食品科学与工程">食品科学与工程</el-menu-item>
              <el-menu-item index="食品质量与安全">食品质量与安全</el-menu-item>
            </el-submenu>

            <el-submenu index="环境科学与工程学院">
              <template slot="title">
                <i class="el-icon-moon"></i>
                <span slot="title">环境科学与工程学院</span>
              </template>
              <el-menu-item index="环境科学">环境科学</el-menu-item>
              <el-menu-item index="环境工程">环境工程</el-menu-item>
            </el-submenu>

            <el-submenu index="管理学院">
              <template slot="title">
                <i class="el-icon-goods"></i>
                <span slot="title">管理学院</span>
              </template>
              <el-menu-item index="市场营销">市场营销</el-menu-item>
              <el-menu-item index="人力资源管理">人力资源管理</el-menu-item>
              <el-menu-item index="会计学">会计学</el-menu-item>
              <el-menu-item index="财务管理">财务管理</el-menu-item>
              <el-menu-item index="国际商务">国际商务</el-menu-item>
              <el-menu-item index="会计学(金融外包)">会计学(金融外包)</el-menu-item>
              <el-menu-item index="信息管理与信息系统(校企合作，山东智博教育科技有限公司)">信息管理与信息系统(山东智博)</el-menu-item>
              <el-menu-item index="信息管理与信息系统(校企合作，青岛感知信息科技有限公司)">信息管理与信息系统(青岛感知)</el-menu-item>
            </el-submenu>

            <el-submenu index="艺术设计学院">
              <template slot="title">
                <i class="el-icon-paperclip"></i>
                <span slot="title">艺术设计学院</span>
              </template>
              <el-menu-item index="视觉传达设计">视觉传达设计</el-menu-item>
              <el-menu-item index="环境设计">环境设计</el-menu-item>
              <el-menu-item index="产品设计">产品设计</el-menu-item>
              <el-menu-item index="摄影">摄影</el-menu-item>
              <el-menu-item index="服装与服饰设计">服装与服饰设计</el-menu-item>
              <el-menu-item index="音乐表演(声乐)">音乐表演(声乐)</el-menu-item>
              <el-menu-item index="广告">广告</el-menu-item>
            </el-submenu>

            <el-submenu index="化学与制药工程学院">
              <template slot="title">
                <i class="el-icon-brush"></i>
                <span slot="title">化学与制药工程学院</span>
              </template>
              <el-menu-item index="化学工程与工艺">化学工程与工艺</el-menu-item>
              <el-menu-item index="应用化学">应用化学</el-menu-item>
              <el-menu-item index="制药工程">制药工程</el-menu-item>
              <el-menu-item index="药物制剂">药物制剂</el-menu-item>
              <el-menu-item index="化学">化学</el-menu-item>
            </el-submenu>

            <el-submenu index="材料科学与工程学院">
              <template slot="title">
                <i class="el-icon-coin"></i>
                <span slot="title">材料科学与工程学院</span>
              </template>
              <el-menu-item index="无机非金属材料工程">无机非金属材料工程</el-menu-item>
              <el-menu-item index="高分子材料与工程">高分子材料与工程</el-menu-item>
              <el-menu-item index="材料化学">材料化学</el-menu-item>
              <el-menu-item index="宝石与材料工艺学">宝石与材料工艺学</el-menu-item>
              <el-menu-item index="复合材料与工程">复合材料与工程</el-menu-item>
            </el-submenu>

            <el-submenu index="计算机科学与技术学院">
              <template slot="title">
                <i class="el-icon-monitor"></i>
                <span slot="title">计算机科学与技术学院</span>
              </template>
              <el-menu-item index="计算机科学与技术">计算机科学与技术</el-menu-item>
              <el-menu-item index="物联网工程">物联网工程</el-menu-item>
              <el-menu-item index="软件工程">软件工程</el-menu-item>
              <el-menu-item index="数据科学与大数据技术">数据科学与大数据技术</el-menu-item>
              <el-menu-item index="计算机科学与技术(校企合作，山东师创软件有限公司)">计算机科学与技术(软件外包)</el-menu-item>
              <el-menu-item index="计算机科学与技术(校企合作，济南网融创业服务有限公司)">计算机科学与技术(嵌入式)</el-menu-item>
            </el-submenu>

            <el-submenu index="政法学院">
              <template slot="title">
                <i class="el-icon-collection"></i>
                <span slot="title">政法学院</span>
              </template>
              <el-menu-item index="法学">法学</el-menu-item>
              <el-menu-item index="汉语国际教育">汉语国际教育</el-menu-item>
              <el-menu-item index="行政管理">行政管理</el-menu-item>
            </el-submenu>

            <el-submenu index="外国语学院">
              <template slot="title">
                <i class="el-icon-chat-square"></i>
                <span slot="title">外国语学院</span>
              </template>
              <el-menu-item index="英语">英语</el-menu-item>
              <el-menu-item index="日语">日语</el-menu-item>
              <el-menu-item index="翻译">翻译</el-menu-item>
            </el-submenu>

            <el-submenu index="金融学院">
              <template slot="title">
                <i class="el-icon-wallet"></i>
                <span slot="title">金融学院</span>
              </template>
              <el-menu-item index="金融学">金融学</el-menu-item>
              <el-menu-item index="保险学(互联网保险方向)">保险学(互联网保险方向)</el-menu-item>
              <el-menu-item index="国际经济与贸易">国际经济与贸易</el-menu-item>
            </el-submenu>

            <el-submenu index="数学与统计学院">
              <template slot="title">
                <i class="el-icon-pie-chart"></i>
                <span slot="title">数学与统计学院</span>
              </template>
              <el-menu-item index="信息与计算科学">信息与计算科学</el-menu-item>
              <el-menu-item index="应用统计学">应用统计学</el-menu-item>
              <el-menu-item index="智能科学与技术">智能科学与技术</el-menu-item>
              <el-menu-item index="信息与计算科学(校企合作，山东浪潮优派科技教育有限公司)">信息与计算科学(校企合作)</el-menu-item>
            </el-submenu>

            <el-submenu index="光电工程国际化示范学院">
              <template slot="title">
                <i class="el-icon-sunny"></i>
                <span slot="title">光电工程国际化示范学院</span>
              </template>
              <el-menu-item index="光电信息科学与工程">光电信息科学与工程</el-menu-item>
            </el-submenu>

            <el-submenu index="网络空间安全学院">
              <template slot="title">
                <i class="el-icon-lightning"></i>
                <span slot="title">网络空间安全学院</span>
              </template>
              <el-menu-item index="网络空间安全">网络空间安全</el-menu-item>
            </el-submenu>

            <el-submenu index="能源与动力工程学院">
              <template slot="title">
                <i class="el-icon-switch-button"></i>
                <span slot="title">能源与动力工程学院</span>
              </template>
              <el-menu-item index="能源与动力工程">能源与动力工程</el-menu-item>
            </el-submenu>

            <el-submenu index="海洋技术科学学院">
              <template slot="title">
                <i class="el-icon-odometer"></i>
                <span slot="title">海洋技术科学学院</span>
              </template>
              <el-menu-item index="海洋技术">海洋技术</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>

        <el-col :span="18">
          <el-row :gutter="15">
            <el-col :span="6">
              <el-select v-model="location" filterable placeholder="选择你的地区">
                <el-option
                  v-for="(province,index) in provinces"
                  :key="index"
                  :label="province"
                  :value="province"
                ></el-option>
              </el-select>
            </el-col>

            <el-col :span="6">
              <el-select v-model="value" placeholder="选择科目类别">
                <el-option
                  v-for="item in opentions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>

            <el-col :span="12">
              <span id="choosenName">{{choosenName}}</span>
            </el-col>
          </el-row>
          <div class="jiange"></div>
          <el-row :gutter="20" v-loading="loading">
            <el-col :span="12">
              <tongji></tongji>
            </el-col>
            <el-col :span="12">
              <xingbie></xingbie>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="jiange"></div>
              <midu></midu>
              <div class="jiange"></div>
              <chatrobot></chatrobot>
            </el-col>
          </el-row>
          
        </el-col>
      </el-row>
    </keep-alive>
  </div>
</template>

<script>
import tongji from "@/components/tongji.vue";
import xingbie from "@/components/xingbie.vue";
import midu from "@/components/midu.vue";
import chatrobot from "@/components/chatrobot.vue";
import store from "@/store/index";
import axios from 'axios';

export default {
  name:'browse',
  components: {
    tongji,
    xingbie,
    midu,
    chatrobot,
  },
  data() {
    return {
      loading:false,
      activeNames: ["工业设计"],
      isheng: true,
      choosenName: "",
      value: "理工",
      location: "山东",
      opentions: [
        { value: "理工", label: "理工" },
        { value: "文史", label: "文史" },
        { value: "艺文", label: "艺文" },
        { value: "艺理", label: "艺理" },
        { value: "200", label: "200" }
      ],
      provinces: [
        "山东",
        "河北",
        "山西",
        "辽宁",
        "吉林",
        "黑龙江",
        "江苏",
        "浙江",
        "安徽",
        "福建",
        "江西",
        "河南",
        "湖北",
        "湖南",
        "广东",
        "海南",
        "四川",
        "贵州",
        "云南",
        "陕西",
        "甘肃",
        "青海",
        "台湾",
        "北京市",
        "天津市",
        "上海市",
        "重庆市",
        "内蒙古",
        "广西",
        "宁夏",
        "新疆",
        "西藏",
        "香港",
        "澳门"
      ]
    };
  },
  methods: {
    choose(index) {
      this.loading=true;
      this.choosenName = index;
      var majorPkg = {
        //统一格式
        type: this.value,
        profession: this.choosenName,
        province: this.location
      };
      var index2 = store.getters.search(majorPkg);
      if (index2) {
        //获得在列表中的位置，赋值给majorNow
        store.state.majorNow=store.state.majors[index2-1]
      } else {
        //本地没有数据，向后端请求
        axios
          .post("http://localhost:8090/subjectQuery", majorPkg)
          .then(res => {
            console.log("从后端接收到单个专业的数据",this.choosenName, res.data.year2019);
            if (res.data.fuck === null) {
              this.$notify.info({
              title: '找不到专业',
              message: '可以试试更换文理科或省份哦'
            });
              console.log("后端数据返回-注意，找不到这个专业");
              return;
            } else {
              //把已有和后端返回的信息写入majors列表
              store.commit("writein",{"majorPkg": majorPkg,"receive":res.data});
              //使majorNow的指针指向列表最后一个
              store.commit("changeNow")
              
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
      this.loading=false
    }
  }
};
</script>

<style>
#choosenName {
  margin-top: 20px;
  font-size: 1.4rem;
}

.jiange {
  height: 2rem;
}
</style>