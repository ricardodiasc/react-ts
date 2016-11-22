var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: "./index.html",
    filename: "./index.html",
    inject: "body"
})


module.exports = {
    entry:"./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: "./dist/"
    },

    devtool: "source-map",
    
    resolve: {
        extensions: ["",".webpack.js",".web.js",".ts",".tsx", ".js"]
    },

    module: {
        loaders: [
            {test:/\.tsx?$/, loader: 'ts-loader'}
        ],


    },

    plugins: [HTMLWebpackPluginConfig]


}