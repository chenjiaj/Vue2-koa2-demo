/**
 * Created by kid on 2016/12/30.
 */
import * as types from './mutation-types';

export default {
	[types.CHANGE_FETCH_STATE](state) {
		state.fetchState = !state.fetchState;
	}
}