// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/iconfont.css'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import { Button, Icon, Collapse, CollapseItem } from 'vant'
Vue.use(Button) // Button组件全局注册, 真正注册的组件名VanButton
Vue.use(Icon)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Element, { size: 'small', zIndex: 3000 })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
