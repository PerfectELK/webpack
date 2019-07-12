const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: ['./src/index.js','./src/scss/style.scss'],
    output:{
        filename: './js/[name].js',
        path: path.resolve(__dirname,'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: '/node-modules/',
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'./dist/style.css'
        }),
        new HtmlWebpackPlugin({
            title: 'title',
            filename: 'index.html',
            template: './index.html'
        })
    ]
};