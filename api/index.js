import * as login from './login'
import Vue from 'vue'

const api = {
	...login,
}

Vue.prototype.$api = api
export default api
