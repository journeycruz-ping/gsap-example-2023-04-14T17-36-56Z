import gulp from "gulp";
// eslint-disable-next-line import/no-unresolved
import gulpESLintNew from "gulp-eslint-new";
import { paths } from "./paths";

const { src } = gulp;

export const lintScripts = () => src(paths.js)
    .pipe(gulpESLintNew({ fix: true }))
    .pipe(gulpESLintNew.fix())
    .pipe(gulpESLintNew.format())
    .pipe(gulpESLintNew.failAfterError());

export default lintScripts;
