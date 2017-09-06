/**
 * Created by chenjiajun on 2017/9/6.
 */
export default [
	{
		name: 'index',
		path: '/',
		component: (resolve) => {
			require.ensure(['./index.vue'], () => {
				resolve(require('./index.vue'))
			})
		},
		meta: {
			title: 'index'
		}
	}
]