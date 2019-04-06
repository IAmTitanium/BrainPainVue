import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Layout from './components/layout';
import IndexPage from './pages/index';
import OrderListPage from './pages/orderList'
import Detail from './pages/detail'
import DetailSonOne from './pages/detailSon/one'
import DetailSonTwo from './pages/detailSon/two'
import DetailSonThree from './pages/detailSon/three'
import DetailSonFour from './pages/detailSon/four'

Vue.use(VueRouter)
Vue.use(VueResource)

let router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: IndexPage,
  }, {
    path: '/orderList',
    component: OrderListPage,
  }, {
    path: '/detailSon',
    component: Detail,
    redirect: '/detailSon/one',
    children: [{
      path: 'one',
      component: DetailSonOne
    }, {
      path: 'two',
      component: DetailSonTwo
    }, {
      path: 'three',
      component: DetailSonThree
    }, {
      path: 'four',
      component: DetailSonFour
    }]
  }]
})

new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: {Layout},
})
