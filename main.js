import App from './App'
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
import './api'

import AppEmpty from '@/components/AppEmpty.vue'
import UserItem from '@/components/UserItem.vue'

Vue.config.productionTip = false

Vue.use(uView)
Vue.component('AppEmpty', AppEmpty)
Vue.component('UserItem', UserItem)

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()