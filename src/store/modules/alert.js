/**
 * Created by kid on 2017/1/6.
 */
import * as types from '../mutation-types';

const state = {
	isShow: false,
	alertMsg: '信息……'
};

const actions = {
	showAlert({commit}) {
		commit(types.ALERT_SHOW);
	},
	hideAlert({commit}) {
		commit(types.ALERT_HIDE);
	}
};

const getters = {
	isShow: state => state.isShow,
	alertMsg: state => state.alertMsg
};

const mutations = {
	[types.ALERT_SHOW](state, msg) {
		state.isShow = true;
		if (msg) {
			state.alertMsg = msg;
		}
	},
	[types.ALERT_HIDE](state) {
		state.isShow = false;
	}
};

export default {
	state,
	mutations,
	actions,
	getters
}