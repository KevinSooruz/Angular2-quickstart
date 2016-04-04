/*******************************************
Gulp dependencies
********************************************/
const gulp = require("gulp"),
      del = require("del"),
      less = require("gulp-less"),
      minifyCss = require("gulp-minify-css"),
      plumber = require("gulp-plumber");

/***************************************************************************************
Remove Dist directory
***************************************************************************************/
gulp.task("clean", (cb) => {
    
    return del(["dist"], cb);
    
});

/***************************************************************************************
Compile less files and compress file into Dist directory
***************************************************************************************/
gulp.task("less", () => {
    
    return gulp.src("./src/css/src/style.less")
       .pipe(plumber())
       .pipe(less())
       .pipe(gulp.dest("./src/css"))
       .pipe(minifyCss({

            compatibility: "ie8"

        }))
        .pipe(gulp.dest("./dist/css"));
    
});

/***************************************************************************************
Copy all resources that are not TypeScript files into Dist directory
***************************************************************************************/
gulp.task("resources", () => {
    
    return gulp.src(["src/**/*", "!**/*.ts", "!**/*.spec.js", "!src/{css,css}/**"])
        .pipe(gulp.dest("dist"));
    
});

/***************************************************************************************
Copy all units tests that are not TypeScript files into Specs directory
***************************************************************************************/
gulp.task("unitsTests", () => {
    
    return gulp.src(["src/app/*.js", "src/app/**/*.js"])
        .pipe(gulp.dest("specs/units"));
    
});

/***************************************************************************************
Copy all required libraries into Dist and SRC directory
***************************************************************************************/
gulp.task("libs", () => {
    
    return gulp.src([
            "es6-shim/es6-shim.min.js",
            "systemjs/dist/system-polyfills.js",
            "angular2/bundles/angular2-polyfills.js",
            "angular2/es6/dev/src/testing/shims_for_IE.js",
            "systemjs/dist/system.src.js",
            "rxjs/bundles/Rx.js",
            "angular2/bundles/angular2.dev.js",
            "angular2/bundles/router.dev.js"
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest("src/lib"))
        .pipe(gulp.dest( "dist/lib"));
    
});

/***************************************************************************************
Build the project
***************************************************************************************/
gulp.task("build", ["resources", "less", "libs", "unitsTests"], () => {
    
    console.log("Building the project ...");
    
});

/*******************************************
Gulp watch
********************************************/
gulp.task("watch", () => {
    
    gulp.watch("src/css/src/*.less", ["less"]);
    gulp.watch("src/**/*.spec.js", ["unitsTests"]);
    gulp.watch("src/**/*", ["resources"]);
    
});

gulp.task("default", ["watch"]);