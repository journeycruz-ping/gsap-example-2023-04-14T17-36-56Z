import terser from "gulp-terser";
import gulp from "gulp";
import { paths } from "./paths";

const { src, dest } = gulp;

export const minifyScripts = async () => src(paths.jsBundle, { allowEmpty: true })
    .pipe(terser())
    .pipe(dest(paths.jsBundle));

export default minifyScripts;
