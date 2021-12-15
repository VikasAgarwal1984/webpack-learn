const path = require("path");

module.exports = {
    mode: 'development',
    devtool: false,
    entry: "./src/index_src.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    }
};
