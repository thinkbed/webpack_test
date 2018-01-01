const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.css$/, use: [ {loader: 'style-loader'}, {loader: 'css-loader'} ]}
        ]
    },
    devServer: {
        compress: true,
        hot: true,
    },
    plugins: [
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            title: 'Test App',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}
