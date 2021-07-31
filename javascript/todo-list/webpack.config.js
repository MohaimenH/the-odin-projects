const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        TODO: "./src/TODO.js",
        Project: "./src/Project.js",
        appLogic: "./src/appLogic.js",
        DOM: "./src/DOM.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Dominoes - TODO App",
            template: "./src/index.html",
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
};
