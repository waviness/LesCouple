import * as login from './login'
import * as home from './home'
import * as maker from './maker'
import * as order from './order'
import * as mzone from './mzone'
import Vue from 'vue'

const api = {
	...login,
	...home,
	...maker,
	...order,
	...mzone,
}

Vue.prototype.$api = api
export default api
