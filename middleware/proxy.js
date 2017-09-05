/**
 * Created by kid on 2017/5/17.
 */
const request = require('request');
const defaultOptions = {
	target: ''
};

module.exports = (context, options = defaultOptions)=> async(ctx, next)=> {
	const re = new RegExp('^\\' + context + '(\\/|\\/\\w+)?');
	const pass = re.test(ctx.req.url);

	if (!pass) return next();

	let opts = {
		method: 'POST',
		url: options.target + ctx.req.url.substring(4),
		json: true,
		body: JSON.parse(await ctx.request.body),
		headers: {
			'content-Type': 'application/json; charset=utf-8'
		}
	};

	console.log(opts);

	ctx.body = await getData(ctx, opts);
	console.log('响应');
};

function getData(ctx, opts) {
	return new Promise((resolve, reject)=> {
		request(opts, (e, r, body)=> {
			if (!e) {
				console.log(body);
				if (ctx.req.url == '/api/login') {
					ctx.session.userInfo = body.data;
				}
				resolve(body);
			} else {
				reject(e);
			}
		})
	});
}