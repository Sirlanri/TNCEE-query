import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element.js'
import ECharts from 'vue-echarts' 

//import VCharts from 'v-charts'

Vue.config.productionTip = false
Vue.use(ECharts)
//Vue.use(VCharts)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
