//import the vue instance
import Vue from 'vue'
//import the App component
import App from './App'
//import the vue router
import VueRouter from 'vue-router'
//import the bootstrap vue
import BootstrapVue from 'bootstrap-vue'
//tell vue to use the router
Vue.use(VueRouter)
//tell vue to use the BootStrap
Vue.use(BootstrapVue)

//import CSS
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '../src/assets/css/main.css'

/* Import components */
import Home from './components/Home.vue'
import BitCoin from './components/BitCoin.vue'
import Sports from './components/Sports.vue'
import Entertainment from './components/Entertainment.vue'
/* Import components */

// define your routes 
const routes = [
  { path: '/', component: Home },
  { path: '/bit-coin', component: BitCoin },
  { path: '/sports', component: Sports },
  { path: '/entertainment', component: Entertainment },
]

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})


//instatinat the vue instance
new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router,
  render: h => h(App)
}).$mount('#app')//mount the router on the app