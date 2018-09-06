module.exports = function() {
	const libs = {
		jquery : 'src/libs/jquery/dist/jquery.min.js',
		wow : 'src/libs/wow/dist/wow.min.js'
	}
// ['node_modules/jquery/dist/jquery.min.js', 'node_modules/slick-carousel/slick/slick.min.js']


	$.gulp.task('scripts:lib', function () {
	return $.gulp.src([libs.jquery, libs.wow])
				.pipe($.gp.concat('libs.min.js'))
				.pipe($.gulp.dest('build/js/'))
				.pipe($.bs.reload({
					stream:true
				}));
});


	$.gulp.task('scripts', function () {
	return $.gulp.src(['src/static/js/main.js'])
				.pipe($.gulp.dest('build/js/'))
				.pipe($.bs.reload({
					stream:true
				}));
});
}