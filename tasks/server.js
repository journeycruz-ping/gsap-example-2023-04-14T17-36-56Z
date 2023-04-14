import browsersync from "browser-sync";

export const browser = browsersync.create();

export const server = (cb) => {
    browser.init({
        host: "localhost",
        open: true,
        port: 3000,
        ghostMode: false,
        server: ["./", "./src/dist"],
    });
    cb();
};

export const browserReload = (cb) => {
    browser.reload();
    cb();
};
