import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backAddress:'http://localhost:8090/',

    majorNow:{  //当前选中的专业
      name:'',
      //三届的平均 最低分
      scoreave:{
        ave17:0,  
        ave18:0, 
        ave19:0, 
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
      {name:'工业设计',scoreave:{ave17:500,ave18:510,ave19:513},scoremin:{min17:492,min18:498,min19:501}},
      {name:'自动化',scoreave:{ave17:488,ave18:499,ave19:500},scoremin:{min17:457,min18:443,min19:420}}
    ]
  },
  mutations: {
    appendMajor(majors,newMajor){
      majors.push(newMajor)
    },

    //每选中一个专业，判断是否保存过，如果true，将majorNow更改，不再向服务器请求
    isChoosen(state,majorName){
      for(var i=0;i<state.majors.length;i++){
        if (state.majors[i].name == majorName){
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
