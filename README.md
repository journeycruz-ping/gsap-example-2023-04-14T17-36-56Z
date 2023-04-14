# GreenSock Animation Platform - DrawSVG with ScrollTrigger example and starter source code

This is an NPM starter kit for getting started with GSAP ScrollTrigger and DrawSVG plugins. It provides the necessary files and dependencies for building projects with Ping Design System. The kit includes the following dependencies:

- Bootstrap 5
- LottiePlayer
- LottieInteractivity
- GSAP


## Getting Started

To use this starter kit, follow these steps:

1. Clone the repository to your local machine.
2. Install the dependencies by running `npm install` in your terminal.
3. Start the development server by running `npm start` in your terminal.
4. Visit http://localhost:3000/ in your browser to view the starter kit. Visit http://localhost:3001/ to view Browsersync.
5. (Optional) To lint styles while you develop, start the development server with the SCSS linter by running `npm run start:lint`.


## Building for Production

To build the starter kit for production, run the following command:

```
npm run build

```

This will run the AEM packager to create a `target` folder containing all the compiled files ready for deployment to AEM. Upload the `target/pic-npm-starter-1.0-<date>.zip` file to the CRX Package Manager and once published, your site will be visible at the `jcrPath` set in `packager-config.yaml`.


## Customizing the Starter Kit

This starter kit comes with a sample component and a sample page to demonstrate how to use this project. To customize the starter kit, follow the steps below:

1. Modify the `src/js` folder to create your own JavaScript modules.
2. Modify the `src/views` folder to create your own pages and partials(components) with [Handlebars.js](https://handlebarsjs.com/).
3. Modify the `src/scss` folder to customize the styles.


## Contributing

If you wish to contribute to this starter kit, please fork it and create a new branch for your changes. Once you have made your changes, create a pull request and we will review your code.


## License

This starter kit is released under the MIT license. See the [LICENSE](https://gitlab.corp.pingidentity.com/web-dev/npm-starter/-/blob/main/LICENSE) file for more details.
