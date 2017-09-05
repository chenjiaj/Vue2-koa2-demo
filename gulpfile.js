const gulp = require('gulp');
const webpack = require('webpack');
const shell = require('gulp-shell');
const tar = require('gulp-tar');
const gzip = require('gulp-gzip');
const pkgconf = require('./package');
const webpackConf = require('./build/webpack.prod.conf');
const del = require('del');

gulp.task('webpack', function (callback) {
	del(['output/**']);
	webpack(webpackConf, function (err, stats) {
		callback();
	});
});

/**
 * 文件移动
 */
gulp.task('move', ['webpack'], function () {
	return gulp.src(['./**/*', '!node_modules/**', '!src', '!src/**', '!pkg/**', '!temp/**', '!output', '!output/**', '!.gitignore', '!build/**', '!build'])
		.pipe(gulp.dest('output/'));
});

/**
 * 中间件
 */
gulp.task('installModule', ['move'], shell.task([
	'cd output/ && npm install --production && cd ../'
]));

/**
 * 打包任务
 */
gulp.task('installtar', function () {
	tarfile = pkgconf.name + '-' + pkgconf.version + '.tgz';
	return gulp.start('clean');
});

gulp.task('tar', function () {
	//noinspection JSAnnotator
	return gulp.src('output/**')
		.pipe(tar(tarfile, {
			mode: 0755
		}))
		.pipe(gzip({
			append: false
		}))
		.pipe(gulp.dest('./pkg/'));
});

gulp.task('clean', ['tar'], function (cb) {
	del(['output/**'], cb);
});

gulp.task('default', ['installModule'], function () {
	gulp.start('installtar');
});
