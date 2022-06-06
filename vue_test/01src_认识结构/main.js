// 这里引入的vue不具有模板解析器
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


new Vue({
  // render: h => h(App),
  render(createElement){
    return createElement(App)
  }
}).$mount('#app')
