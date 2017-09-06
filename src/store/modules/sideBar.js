/**
 * Created by kid on 2017/1/6.
 */
import * as types from '../mutation-types';
import store from '../index';

const state = {
	sidebarSetting: {
		folded: false,
		expandedMenu: 'result',
		onURL: '/home/result/my0'
	}
};

const actions = {
	toggleSideBar({commit}) {
		commit(types.TOGGLE_SIDE_BAR);
	},
	setSidebar({commit}, setting) {
		commit(types.SET_SIDEBAR, setting);
	}
};

const getters = {
	sidebarSetting: state=> state.sidebarSetting
};

const mutations = {
	[types.TOGGLE_SIDE_BAR](state) {
		state.sidebarSetting.folded = !state.sidebarSetting.folded;
		saveChageToStorage(state);
	},
	[types.SET_SIDEBAR](state, setting) {
		state.sidebarSetting = setting;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}

function saveChageToStorage(state) {
	let storage = window.localStorage;
	let uid = store.getters.userInfo.id;
	let key = `folded-${uid}`;
	storage[key] = state.sidebarSetting.folded.toString();
}