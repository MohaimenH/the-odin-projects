const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "production",
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
        new MiniCssExtractPlugin(),
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,

                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
};
