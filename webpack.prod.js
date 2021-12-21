const path = require("path");
const {merge} = require("webpack-merge");
const common = require("./webpack.common");
const clean = require("clean-webpack-plugin");
const optimizeCss = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const terserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new clean.CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            minify: {
                removeComments: false,
                collapseWhitespace: false,
                preserveLineBreaks: true
            }
        })
    ],
    optimization: {
        minimizer: [
            new optimizeCss(),
            new terserPlugin()
        ]
    },
    "module": {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // 3. Extract css into files
                    'css-loader',
                    "sass-loader"
                ]
            }
        ],
    }
});
