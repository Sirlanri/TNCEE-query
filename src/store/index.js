import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backAddress:'http://localhost:8090/',

    majorNow:{  //当前选中的专业
      name:'',type:'',province:'',
      //三届的平均 最低分
      scoreave:{
        ave17:0,  
        ave18:0, 
        ave19:0,
      },
      rankmin:{
        rank17:0, 
        rank18:0,
        rank19:0,
      },
      scoremin:{
        min17:0,  
        min18:0, 
        min19:0, 
      },
      
      sex:0.01, //男女比

    },
    majors:[
      //存储专业的列表，用户从服务器每获取一个专业，就存入
      {name:'工业设计',province:'山东',type:'理工',scoreave:{ave17:500,ave18:510,ave19:513},rankmin:{rank17:10000,rank18:12000,rank19:10400},scoremin:{min17:492,min18:498,min19:501},sex:0.7},
      {name:'自动化',province:'山东'  ,type:'理工',scoreave:{ave17:488,ave18:499,ave19:500,},rankmin:{rank17:10000,rank18:12000,rank19:10400},scoremin:{min17:457,min18:443,min19:420},sex:0.4},
      {name:'机械设计制造及其自动化',province:'山东',type:'理工',scoreave:{ave17:498,ave18:488,ave19:505,},rankmin:{rank17:10000,rank18:12000,rank19:10400},scoremin:{min17:445,min18:225,min19:354},sex:0.7},
      {name:'材料成型及控制工程',province:'山东',type:'理工',scoreave:{ave17:488,ave18:499,ave19:500,},rankmin:{rank17:10000,rank18:12000,rank19:10400},scoremin:{min17:457,min18:443,min19:420},sex:0.5},
      {name:'机器人工程',province:'山东',type:'理工',scoreave:{ave17:458,ave18:449,ave19:520,},rankmin:{rank17:10000,rank18:12000,rank19:10400},scoremin:{min17:470,min18:482,min19:529},sex:0.1},
      {name:'工业设计(校企合作，山东新视觉数码有限公司)',province:'山东',type:'理工',scoreave:{ave17:484,ave18:489,ave19:570,},rankmin:{rank17:10000,rank18:12000,rank19:10400},scoremin:{min17:457,min18:483,min19:420},sex:0.4},
      {name:'机械设计制造及其自动化(中外合作办学)',province:'山东',type:'理工',scoreave:{ave17:471,ave18:499,ave19:531,},rankmin:{rank17:10000,rank18:12000,rank19:10400},scoremin:{min17:457,min18:443,min19:428},sex:0.8},
    ]
  },
  mutations: {
    appendMajor(majors,newMajor){
      majors.push(newMajor)
    },

    //每选中一个专业，判断是否保存过，如果true，将majorNow更改，不再向服务器请求
    isChoosen(state,stuck){
      for(var i=0;i<state.majors.length;i++){
        if (state.majors[i].name == stuck.majorName && stuck.majorType == state.majors[i].type && state.majors[i].province == stuck.province ){
          state.majorNow = state.majors[i]
          console.log("匹配已有数据成功");
          return true
        }
      }
      return false
      
    },

    getMajor(state,majorName){
      axios.post(state.backAddress+'yuming',majorName)
        .then(res=>{
          console.log(res)
        })
    },



  },
  actions: {
    
  },
  modules: {
  }
})
