import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    majorNow:{  //当前选中的专业
      name:'',type:'',province:'',
      //三届的平均 最低分 最低位次
      scoreave:[],
      rankmin:[],
      scoremin:[],
      //密度图数据
      axisx:[],
      axis17:[],
      axis18:[],
      axis19:[],
      sex:0.01, //男女比=男/总

    },
    
    majors:[
      //存储专业的列表，用户从服务器每获取一个专业，就存入
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
      console.log("X轴数据：",state.majorNow.axisx);
      return state.majorNow.axisx
    },
    
    //Go版本，啥都不用处理，数据直接拿来用，爽！
    //获得对应的分数密度数据
    get17:(state)=>{
      console.log("获取17密度",state.majorNow.axis17);
      return state.majorNow.axis17
    },
    get18:(state)=>{
      console.log("获取18密度",state.majorNow.axis18);
      return state.majorNow.axis18
    },
    get19:(state)=>{
      console.log("获取19密度",state.majorNow.axis19);
      return state.majorNow.axis19
    },

    getrankx19:(state)=>(numScore)=>{
      var temp=state.majorNow.data19[numScore]
      if (temp != null) {
        return temp.rank
      }else{
        return null
      }
    },
    getrankx18:(state)=>(numScore)=>{
      var temp=state.majorNow.data18[numScore]
      if (temp != null) {
        return temp.rank
      }else{
        return null
      }
    },
    getrankx17:(state)=>(numScore)=>{
      var temp=state.majorNow.data17[numScore]
      if (temp != null) {
        return temp.rank
      }else{
        return null
      }
    },
    //获取位次
    getrank19:(state)=>key=>{
      if (state.majorNow.data19[key] == undefined) {
        return null
      }
      else{
        return state.majorNow.data19[key].rank
      }
    },
    getrank18:(state)=>key=>{
      if (state.majorNow.data18[key] == undefined) {
        return null
      }
      return state.majorNow.data18[key].rank
    },
    getrank17:(state)=>key=>{
      if (state.majorNow.data17[key] == undefined) {
        return null
      }
      return state.majorNow.data17[key].rank
    },
  },
  mutations: {
    

    writein(state,all){

      var major1 = new Object();
      major1.name=all.majorPkg.profession;
      major1.type=all.majorPkg.type;
      major1.province=all.majorPkg.province;
      major1.sex=all.receive.sex;
      major1.scoremin={};
      major1.rankmin={};
      major1.scoreave={};
      //最低分
      major1.scoremin = all.receive.minscore  //一个列表，有三个元素，17 18 19
      //平均分
      major1.scoreave = all.receive.avescore
      //平均名次all.
      major1.rankmin = all.receive.minrank
      //一分详情
      major1.axisx = all.receive.axisx
      major1.axis17 = all.receive.axis17
      major1.axis18 = all.receive.axis18
      major1.axis19 = all.receive.axis19

      state.majors.push(major1)
      console.log("majors列表已更新");
    },
    changeNow(state){
      state.majorNow=state.majors[state.majors.length-1]
      console.log("majorNow赋值完毕",state.majorNow.name);
    }
    



  },
  actions: {
 
  },
  modules: {
  }
})
