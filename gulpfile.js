var gulp=require("gulp"),del=require("del"),minify=require("gulp-minifier"),ghPages=require("gulp-gh-pages"),dirJs="minified/assets/js",dirCss="minified/assets/css",dirVendor="minified/vendor",dirRoot="minified",dirTest="minified/test",dirImages="minified/assets/images";gulp.task("minify",function(){gulp.src(["*.html","*.js","*.css"]).pipe(minify({collapseWhitespace:!0,minify:!0,minifyJS:!0,minifyCSS:!0})).pipe(gulp.dest(dirRoot)),gulp.src(["assets/js/*.js"]).pipe(minify({collapseWhitespace:!0,minify:!0,minifyJS:!0,minifyCSS:!0})).pipe(gulp.dest(dirJs)),gulp.src(["assets/css/*.css"]).pipe(minify({collapseWhitespace:!0,minify:!0,minifyJS:!0,minifyCSS:!0})).pipe(gulp.dest(dirCss)),gulp.src(["vendor/*.js"]).pipe(minify({collapseWhitespace:!0,minify:!0,minifyJS:!0,minifyCSS:!0})).pipe(gulp.dest(dirVendor)),gulp.src(["test/*.html","test/*.js"]).pipe(minify({collapseWhitespace:!0,minify:!0,minifyJS:!0,minifyCSS:!0})).pipe(gulp.dest(dirTest)),gulp.src("assets/images/*").pipe(gulp.dest(dirImages))}),gulp.task("clean",function(i){del(["minified/**/*"],i)}),gulp.task("deploy",function(){return gulp.src("./minified/**/*").pipe(ghPages())});