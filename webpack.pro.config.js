const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[chunkhash].css',
            chunkFilename: '[name].[chunkhash].[id].css'
        })

    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: true

    }

})
