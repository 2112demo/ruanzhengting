import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/view/index/index'
import NewOrder from '@/view/new/new'
import NewTwo from '@/view/new(2)/index'
// import NewThree from '@/view/new/new(3)/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/new',
      name: 'newOrder',
      component: NewOrder
    },
    {
      path: '/two',
      name: 'newtwo',
      component: NewTwo
    }
    // {
    //   path: '/three',
    //   name: 'newThree',
    //   component: NewThree
    // }
  ]
})
