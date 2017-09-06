/**
 * Created by chenjiajun on 2017/9/5.
 */

export default [
	{
		name: 'example',
		path: '/example',
		component: (resolve) => {
			require.ensure(['./example.vue'], () => {
				resolve(require('./example.vue'))
			})
		},
		meta: {
			title: 'example'
		}
	}, {
		name: 'example1',
		path: '/example1',
		component: (resolve) => {
			require.ensure(['./example1.vue'], () => {
				resolve(require('./example1.vue'))
			})
		},
		meta: {
			title: 'example1'
		}
	}
]