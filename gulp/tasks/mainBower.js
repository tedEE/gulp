module.exports = function() {
$.gulp.task('mainfiles', function() {
    return $.gulp.src($.mainBowerFiles())
        .pipe($.gulp.dest("src/static/js"))
});
}