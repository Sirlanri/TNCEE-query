<template>
  <div>
      
        <el-row :gutter="20">

          <el-col :span="5">
            <el-select v-model="province" filterable placeholder="省份">
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
            <el-input v-model="rank" placeholder="省排名(可选)"></el-input>
          </el-col>
          <el-col :span='4'>
            <el-button type="primary" @click="lookfor">查询</el-button>
          </el-col>
          
        </el-row>
        <el-divider></el-divider>
        <keep-alive>

        
        <el-table :data="suitMajors"
          style="width:100%">
        <el-table-column prop="profession" label="专业名称" width="200">
        </el-table-column>
        <el-table-column
          prop="maxScore" label="最高分" 
        ></el-table-column>
        <el-table-column
          prop="average" label="平均分" 
        ></el-table-column>
        <el-table-column
          prop="minScore" label="最低分" 
        ></el-table-column>
        <el-table-column
          prop="minRank" label="平均名次" 
        ></el-table-column>
        <el-table-column
          label="操作"
          >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="primary" size="normal" plain>查看</el-button>
          </template>
        </el-table-column>

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
      province:'山东',
      score:'' ,
      rank:'',
      type:'理工',
      provinces:[
        "山东省","河北省","山西省","辽宁省","吉林省","黑龙江省","江苏省","浙江省","安徽省","福建省","江西省","河南省","湖北省","湖南省","广东省","海南省","四川省","贵州省","云南省","陕西省","甘肃省","青海省","台湾省","北京市","天津市","上海市","重庆市","内蒙古自治区","广西壮族自治区","宁夏回族自治区","新疆维吾尔自治区","西藏自治区","香港特别行政区","澳门特别行政区"
      ],
      types:[
        '理工','文史','艺文','艺理','200'
      ],
      suitMajors: [
        //每个元素有 profession minScore maxScore minRank average
        {"profession":"计算机科学与技术",
          "minScore":450,
          "maxScore":506,
          "minRank":90467,
          "average":499,
        },
        {"profession":"工业设计",
          "minScore":450,
          "maxScore":506,
          "minRank":90467,
          "average":499,
        },

      ],  

    }
  },
  methods:{
    lookfor(){
      var sendData={
        "score":this.score,
        "province":this.province,
        "rank":this.rank,
        "type":this.type
      }
      axios.post('http://localhost:8090/scoreQuery',sendData)
        .then(res=>{
          if (res.status==200){
            res.data.year19.forEach(element => {
              this.suitMajors.push(element)
              console.log('接收到专业名称：',element.profession);
            });

          }
        })
    },
    handleClick(item){
      console.log(item.profession);
      if (store.commit('isChoosen',{majorName:item.profession,majorType:this.type,province:this.province})) {
        console.log("返回true");
        
        this.$router.push({"name":'Browse'})
      }else{
        console.log(store.commit('isChoosen',{majorName:item,majorType:this.type,province:this.province}))
      }
      
      

    }
  }
}
</script>

<style>

</style>