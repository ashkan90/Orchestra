import Vue from 'vue'
import store from '@/events/store'
import App from '@/App.vue'
import router from '@/routes/web'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueAxios from 'vue-axios'
import VueMasonry from 'vue-masonry-css'


Vue.use(VueAxios, axios)
Vue.use(Vuetify)
Vue.use(VueMasonry)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
