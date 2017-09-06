/**
 * Created by kid on 2017/5/31.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import alert from './modules/alert';
import sideBar from './modules/sideBar';

Vue.use(Vuex);

const state = {
	fetchState: false,
	userInfo: {}
};

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
	modules: {
		alert,
		sideBar
	}
});