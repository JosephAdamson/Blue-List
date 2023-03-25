// Copies individual files or entire directories, which already exist, to the build directory
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
    mode: "development",
    devtool: "cheap-module-source-map",
    entry: {
        popup: path.resolve("./src/popup/popup.tsx")
    },
    module: {
        rules: [
            {
                use: "ts-loader",
                test: /\.tsx$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: 'postcss-loader', // postcss loader needed for tailwindcss
                        options: {
                            postcssOptions: {
                                ident: 'postcss',
                                plugins: [tailwindcss, autoprefixer],
                            },
                        },
                    }
                ]
            },
            
        ]
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve('src/public'),
                to: path.resolve('dist')
            }]
        }),
        new HTMLWebpackPlugin({
            title: "blue list chrome extension",
            filename: "popup.html",
            chunks: ["popup"]
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "[name].js"
    }
}