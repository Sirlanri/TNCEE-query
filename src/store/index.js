import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    backAddress:'http://localhost:8090',

    datax:[],
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
      //每一分的详细信息
      data19:{},
      data18:{},
      data17:{},
      
      sex:0.01, //男女比

    },
    majors:[
      //存储专业的列表，用户从服务器每获取一个专业，就存入
      {name:'工业设计',province:'山东',type:'理工',scoreave:{ave17:500,ave18:510,ave19:513},rankmin:{rank17:10000,rank18:12000,rank19:10400},scoremin:{min17:492,min18:498,min19:501},sex:0.7,data19:{"546": 0.034482758620689655,
      "534": 0.13793103448275862,
      "535": 0.3103448275862069,
      "536": 0.06896551724137931,
      "537": 0.10344827586206896,
      "538": 0.06896551724137931,
      "539": 0.06896551724137931,
      "555": 0.034482758620689655,
      "541": 0.13793103448275862,
      "543": 0.034482758620689655},data18:{"516": 0.125,
      "517": 0.075,
      "518": 0.0625,
      "519": 0.1125,
      "520": 0.0875,
      "521": 0.05,
      "522": 0.025,
      "523": 0.05,
      "524": 0.0375,
      "525": 0.0625,
      "557": 0.0125,
      "526": 0.0375,
      "527": 0.025,
      "528": 0.0125,
      "560": 0.0125,
      "529": 0.025,
      "530": 0.0125,
      "531": 0.025,
      "532": 0.05,
      "533": 0.0125,
      "535": 0.0375,
      "536": 0.0125,
      "538": 0.0375},data17:{"512": 0.044444444444444446,
      "513": 0.044444444444444446,
      "514": 0.06666666666666667,
      "515": 0.1,
      "516": 0.03333333333333333,
      "518": 0.044444444444444446,
      "519": 0.011111111111111112,
      "520": 0.011111111111111112,
      "521": 0.011111111111111112,
      "522": 0.011111111111111112,
      "528": 0.011111111111111112,
      "529": 0.011111111111111112,
      "536": 0.011111111111111112,
      "505": 0.1,
      "506": 0.07777777777777778,
      "507": 0.1111111111111111,
      "508": 0.1,
      "509": 0.1,
      "510": 0.06666666666666667,
      "511": 0.03333333333333333}},
      {name:'自动化',province:'山东'  ,type:'理工',scoreave:{ave17:488,ave18:499,ave19:500,},rankmin:{rank17:10000,rank18:12000,rank19:10400},scoremin:{min17:457,min18:443,min19:420},sex:0.4},
      {name:'机械设计制造及其自动化',province:'山东',type:'理工',scoreave:{ave17:498,ave18:488,ave19:505,},rankmin:{rank17:10000,rank18:12000,rank19:10400},scoremin:{min17:445,min18:225,min19:354},sex:0.7},
      {name:'材料成型及控制工程',province:'山东',type:'理工',scoreave:{ave17:488,ave18:499,ave19:500,},rankmin:{rank17:10000,rank18:12000,rank19:10400},scoremin:{min17:457,min18:443,min19:420},sex:0.5},
      {name:'机器人工程',province:'山东',type:'理工',scoreave:{ave17:458,ave18:449,ave19:520,},rankmin:{rank17:10000,rank18:12000,rank19:10400},scoremin:{min17:470,min18:482,min19:529},sex:0.1},
      {name:'工业设计(校企合作，山东新视觉数码有限公司)',province:'山东',type:'理工',scoreave:{ave17:484,ave18:489,ave19:570,},rankmin:{rank17:10000,rank18:12000,rank19:10400},scoremin:{min17:457,min18:483,min19:420},sex:0.4},
      {name:'机械设计制造及其自动化(中外合作办学)',province:'山东',type:'理工',scoreave:{ave17:471,ave18:499,ave19:531,},rankmin:{rank17:10000,rank18:12000,rank19:10400},scoremin:{min17:457,min18:443,min19:428},sex:0.8},
    ]
  },
  getters:{
    search:(state)=>majorPkg=>{
      console.log("正在单步匹配已有数据");
      for(var i=0;i<state.majors.length;i++){
        if (state.majors[i].name == majorPkg.profession && majorPkg.type == state.majors[i].type && state.majors[i].province == majorPkg.province ){
          console.log("匹配已有数据成功");
          return  i+1
        }
      }
      console.log("本地没有此数据");
      return 0
    },
    getX:(state)=>{
      var maxormin=[];
      
      var min17 = Math.min.apply(Object.keys(state.majorNow.data17))
      var max17 = Math.max.apply(Object.keys(state.majorNow.data17))
      var min18 = Math.min.apply(Object.keys(state.majorNow.data18))
      var max18 = Math.max.apply(Object.keys(state.majorNow.data18))
      var min19 = Math.min.apply(Object.keys(state.majorNow.data19))
      var max19 = Math.max.apply(Object.keys(state.majorNow.data19))
      var finalmin = Math.min(min17,min18,min19)
      var finalmax = Math.max(max17,max18,max19)
      for (let index = finalmin; index <= finalmax; index++) {
        maxormin.push(index)
      }
      console.log("X轴数据：",maxormin);
      return maxormin
    },
    get17:(state)=>key=>{
      return state.majorNow.data17[key]
    },
    get18:(state)=>key=>{
      return state.majorNow.data18[key]
    },
    get19:(state)=>key=>{
      return state.majorNow.data19[key]
    },
  },
  mutations: {
    firstchange(state,majorPkg){
      state.majorNow.name=majorPkg.profession;
      state.majorNow.type=majorPkg.type;
      state.majorNow.province=majorPkg.province;
    },

    writein(state,receive){
      //最低分
      state.majorNow.scoremin.min19=receive.year2019.minGrade
      state.majorNow.scoremin.min18=receive.year2018.minGrade
      state.majorNow.scoremin.min17=receive.year2017.minGrade
      //平均分

      //平均名次
      state.majorNow.rankmin.rank17=receive.year2017.minRank
      state.majorNow.rankmin.rank18=receive.year2018.minRank
      state.majorNow.rankmin.rank19=receive.year2019.minRank
      //一分详情
      state.majorNow.data17=receive.year2017.data
      state.majorNow.data18=receive.year2018.data
      state.majorNow.data19=receive.year2019.data

    },
    



  },
  actions: {
 
  },
  modules: {
  }
})
