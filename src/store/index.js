import { createStore } from 'vuex'

export default createStore({
  state: {
		page: 'home',
		navOpen: false,
	},
	getters: {
		getState: state => {
			return state;
		}
	},
  mutations: {},
  actions: {},
  modules: {}
})
