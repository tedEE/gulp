module.exports = function() {
	$.gulp.task('pug', function () {
	return $.gulp.src('src/pug/pages/*.pug')
				.pipe($.plumber())
				.pipe($.gp.pug({
					pretty:true //иначе html будет выводиться в одну строку
				}))
				.pipe($.gulp.dest('build'))
				.on('end', $.bs.reload);
});
}