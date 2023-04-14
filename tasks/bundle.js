import babelify from "babelify";
import browserify from "browserify";
import gulp from "gulp";
import source from "vinyl-source-stream";
import replace from "gulp-replace";
import notify from "gulp-notify";
import htmlmin from "gulp-htmlmin";
// eslint-disable-next-line import/no-extraneous-dependencies
import hb from "gulp-hb";
import { paths } from "./paths";

const { src, dest } = gulp;

export const bundleHbs = () => src("./src/index.html")
    .pipe(hb()
        .partials("./src/views/partials/**.hbs"))
    .pipe(dest("src/dist"));

export const bundleHTML = () => src(paths.html)
    .pipe(replace("src/dist/css/style.css", "./css/style.css"))
    .pipe(replace("src/dist/js/index.js", "./js/index.js"))
    .pipe(replace("src/assets/", "./assets/"))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest("src/dist"));

export const bundleScripts = () => browserify([paths.jsSrc])
    .transform(babelify, {
        presets: ["@babel/preset-env"],
        plugins: [
            "@babel/plugin-transform-runtime",
            "@babel/plugin-proposal-object-rest-spread",
        ],
        sourceMapsAbsolute: true,
    })
    .bundle()
    .on("error", notify.onError((error) => `JS error: ${error.message}`))
    .pipe(source("index.js"))
    .pipe(dest(paths.jsBundle));
