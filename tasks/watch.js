import gulp from "gulp";
import { browserReload } from "./server";
import { bundleScripts, bundleHbs } from "./bundle";
import { lintScripts } from "./linter";
import { paths } from "./paths";

const { watch, series } = gulp;

const watcher = () => {
    watch(paths.html, series(bundleHbs, browserReload));
    watch(paths.js, series(lintScripts, bundleScripts, browserReload));
};

export default watcher;
