import gulp from "gulp";
import del from "del";
import watcher from "./tasks/watch";
import { server } from "./tasks/server";
import { bundleHTML, bundleScripts, bundleHbs } from "./tasks/bundle";
import { minifyScripts } from "./tasks/minify";

export const clean = () => del(["src/dist/js", "src/dist/index.html"]);

export const watch = gulp.series(clean, bundleHbs, bundleScripts, server, watcher);

export const build = gulp.series(
    gulp.parallel(bundleHTML),
    gulp.parallel(bundleScripts, minifyScripts),
);

export default build;
