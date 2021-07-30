const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
        TODO: "./src/TODO.js",
        Project: "./src/Project.js",
        appLogic: "./src/appLogic.js",
        DOM: "./src/DOM.js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Dominoes - TODO App",
        }),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
};
