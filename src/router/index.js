import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import MainContainer from '@/components/MainContainer/MainContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
      // name: 'MainContainer',
      // component: MainContainer
    }
  ]
})
