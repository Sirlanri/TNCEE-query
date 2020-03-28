import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

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
      
      var min17 = Math.min.apply(null,Object.keys(state.majorNow.data17))
      var max17 = Math.max.apply(null,Object.keys(state.majorNow.data17))
      var min18 = Math.min.apply(null,Object.keys(state.majorNow.data18))
      var max18 = Math.max.apply(null,Object.keys(state.majorNow.data18))
      var min19 = Math.min.apply(null,Object.keys(state.majorNow.data19))
      var max19 = Math.max.apply(null,Object.keys(state.majorNow.data19))
      var finalmin = Math.min(min17,min18,min19)
      var finalmax = Math.max(max17,max18,max19)
      for (let index = finalmin; index <= finalmax; index++) {
        maxormin.push(index)
      }
      console.log("X轴数据：",maxormin);
      return maxormin
    },
    
    //以下列表形式可能要进行更改为对象格式
    //获得对应的分数密度数据
    get17:(state)=>key=>{
      if (state.majorNow.data17[key] == undefined) {
        return 0
      }
      return state.majorNow.data17[key].gradeProportion
    },
    get18:(state)=>key=>{
      if (state.majorNow.data18[key] == undefined) {
        return 0
      }
      return state.majorNow.data18[key].gradeProportion
    },
    get19:(state)=>key=>{
      if (state.majorNow.data19[key] == undefined) {
        return 0
      }
      return state.majorNow.data19[key].gradeProportion
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
      major1.sex=all.receive.year2018.sex.manRate;
      major1.scoremin={};
      major1.rankmin={};
      major1.scoreave={};
      //最低分
      major1.scoremin.min17=all.receive.year2017.minGrade
      major1.scoremin.min18=all.receive.year2018.minGrade
      major1.scoremin.min19=all.receive.year2019.minGrade
      //平均分
      major1.scoreave.ave17=all.receive.year2017.average
      major1.scoreave.ave18=all.receive.year2018.average
      major1.scoreave.ave19=all.receive.year2019.average
      //平均名次all.
      major1.rankmin.rank17=all.receive.year2017.minRank
      major1.rankmin.rank18=all.receive.year2018.minRank
      major1.rankmin.rank19=all.receive.year2019.minRank
      //一分详情
      major1.data17=all.receive.year2017.data
      major1.data18=all.receive.year2018.data
      major1.data19=all.receive.year2019.data
      //性别比

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
