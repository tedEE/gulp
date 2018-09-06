module.exports = function() {
	$.gulp.task('stylus', function () {
	return $.gulp.src('src/static/stylus/main.styl')
				.pipe($.gp.sourcemaps.init())
				.pipe($.gp.plumber())
				.pipe($.gp.stylus({
					'include css':true
				}))
				.pipe($.gcmq())
				.pipe($.gp.autoprefixer({
					browsers:['last 10 versions']
				}))
				.on("error", $.gp.notify.onError({
        title: "stile"
      }))
				.pipe($.gp.csso())
				.pipe($.gp.sourcemaps.write())
				.pipe($.gulp.dest('build/css/'))
				.pipe($.bs.reload({
					stream:true
				}));
});
}