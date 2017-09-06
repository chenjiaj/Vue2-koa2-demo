/**
 * Created by kid on 2016/12/30.
 */
import * as types from './mutation-types';
import fetch from 'isomorphic-fetch';
import {Message} from 'element-ui';

export default {
	async [types.GETDATA]({commit}, parameters) {
		let result;
		let data;
		let opts = {
			credentials: 'include',
			method: parameters.method
		};
		parameters.data ? opts.body = JSON.stringify(parameters.data) : opts;

		commit(types.CHANGE_FETCH_STATE);

		try {
			result = await fetch(parameters.url, opts);
			if (result.status >= 400) {
				Message({
					message: '服务器内部错误',
					type: 'error'
				});
				commit(types.CHANGE_FETCH_STATE);

				return {
					code: -1
				}
			} else {
				data = result.json();
				commit(types.CHANGE_FETCH_STATE);

				return data;
			}
		} catch (err) {
			commit(types.CHANGE_FETCH_STATE);
			Message({
				message: '请求接口错误',
				type: 'error'
			});
			return {
				code: -1
			}
		}
	}
}