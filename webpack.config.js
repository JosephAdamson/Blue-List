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
        popup: path.resolve("./src/popup/popup.tsx"),
        options: path.resolve("./src/options/options.tsx"),
        background: path.resolve("./src/background/background.ts")

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
        ...getHTMLPlugins([
            "popup",
            "options"
        ])
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    output: {
        filename: "[name].js"
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all',
        },
    }
}


function getHTMLPlugins(chunks) {
    return chunks.map(chunk => new HTMLWebpackPlugin({
        title: "Blue List chrome extension",
        filename: `${chunk}.html`,
        chunks: [chunk]
    }));
}