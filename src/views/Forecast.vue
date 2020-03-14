<template>
  <div>
      
        <el-row :gutter="20">

          <el-col :span="5">
            <el-select v-model="province" filterable>
              <el-option v-for="(item,index) in provinces"
              :key="index" :label="item" :value="item">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="5">
            <el-select v-model="type" filterable placeholder="科目类别">
              <el-option v-for="(item,index) in types"
                :key="index" :label="item" :value="item">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="5">
            <el-input v-model="score" placeholder="高考分数"></el-input>
          </el-col>
          <el-col :span="5">
            <el-input v-model="rank" placeholder="排名"></el-input>
          </el-col>
          <el-col :span='4'>
            <el-button type="primary" @click="lookfor">查询</el-button>
          </el-col>
          
        </el-row>
        
        <el-divider></el-divider>
        <keep-alive>

        <el-row type="flex" justify="center">
          <el-col :span="6">
            <el-radio-group v-model="whichyear" style="margin-bottom: 10px; margin-top:20px'">
              <el-radio-button label="suitMajors19">2019</el-radio-button>
              <el-radio-button label="suitMajors18">2018</el-radio-button>
              <el-radio-button label="suitMajors17">2017</el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>

        <el-table :data="whichyear"
          style="width:100%">
        <el-table-column prop="profession" label="专业名称" width="200">
        </el-table-column>
        <el-table-column
          prop="max" label="最高分数/名次" 
        ></el-table-column>
        <el-table-column
          prop="ave" label="平均分数/名次" 
        ></el-table-column>
        <el-table-column
          prop="min" label="最低分数/名次" 
        ></el-table-column>
        
          <!--
        <el-table-column
          label="操作"
          >
          
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" size="normal" plain>查看</el-button>
          </template>
         
        </el-table-column>
           -->
        </el-table>
        
        </keep-alive>

        
        

  </div>
  
</template>

<script>
import axios from 'axios';
import store from '@/store/index'
export default {
  name:'forecast',
  data(){
    return{
      whichyear:'suitMajors19',
      loading:false,
      province:'山东',
      score:'' ,
      rank:'',
      type:'理工',
      provinces:[
        "山东","河北","山西","辽宁","吉林","黑龙江","江苏","浙江","安徽","福建","江西","河南","湖北","湖南","广东","海南","四川","贵州","云南","陕西","甘肃","青海","台湾","北京市","天津市","上海市","重庆市","内蒙古自治区","广西壮族自治区","宁夏回族自治区","新疆维吾尔自治区","西藏自治区","香港特别行政区","澳门特别行政区"
      ],
      types:[
        '理工','文史','艺术文','艺术理','200'
      ],

      //分year2019 year2018 year2017
      suitMajors19: [
        //每个元素有 profession minScore maxScore minRank averageRank maxRange average idea 
      ],  
      suitMajors18:[],
      suitMajors17:[],


    }
  },
  methods:{
    clearzero(words){
      //把0替代成暂无数据
      words.forEach(single=>{
        if (single==0) {
          single="暂无数据"
        }
      })
      return words
    },

    lookfor(){
      var sendData={
        "score":this.score,
        "province":this.province,
        "rank":this.rank,
        "type":this.type
      }
      this.loading=true
      axios.post('http://loaclhost:8090/rankQuery',sendData)
        .then(res=>{
          if (res.status==200){
            this.suitMajors=[]
            res.data.year2019.forEach(element => {
              element=this.clearzero(element)
              element.max=element.maxScore+'/'+element.maxRange
              element.ave=element.average+'/'+element.averageRank
              element.min=element.minScore+'/'+element.minRank
              this.suitMajors19.push(element)
            });
            res.data.year2018.forEach(element => {
              element=this.clearzero(element)
              element.max=element.maxScore+'/'+element.maxRange
              element.ave=element.average+'/'+element.averageRank
              element.min=element.minScore+'/'+element.minRank
              this.suitMajors18.push(element)
            });
            res.data.year2017.forEach(element => {
              element=this.clearzero(element)
              element.max=element.maxScore+'/'+element.maxRange
              element.ave=element.average+'/'+element.averageRank
              element.min=element.minScore+'/'+element.minRank
              this.suitMajors17.push(element)
            });

            
            
          }
          else{
            this.$notify.info({
            title: '提示',
            message: '找不到合适的专业哟亲~'
          });
          }
        });
        this.loading=false
    },

    //这个跳转暂时用不了，以后想办法解决
    handleClick(item){
      console.log(item.profession,'准备-执行跳转操作');
      var majorPkg={
        profession:item.profession,type:this.type,province:this.province
      }
      var result=store.getters.search(majorPkg)
      if (result) {
        store.state.majorNow = store.state.majors[result - 1];
      }else {
        //本地没有数据，向后端请求
        axios
          .post("https://api.ri-co.cn/gaokaov1.0/subjectQuery", majorPkg)
          .then(res => {
            console.log("从后端接收到单个专业的数据", res.data.year2019);
            if (res.data.year2019 == []) {
              this.$notify.info({
                title: '消息',
                message: '没有合适的专业哦~'
              });
              console.log("注意，找不到这个专业");
              return;
            } else {
              //把已有和后端返回的信息写入vuex
              store.commit("firstchange", majorPkg);
              store.commit("wirtein", res.data);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
        
        
      this.$router.push({"name":'Browse'})
      
      

    }
  }
}
</script>

<style>

</style>