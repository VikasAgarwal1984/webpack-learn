const path = require("path");

module.exports = {
    mode: 'development',
    devtool: false,
    entry: "./src/index_src.js",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },
    "module": {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    "sass-loader"
                ]
            }
        ]
    }
};
