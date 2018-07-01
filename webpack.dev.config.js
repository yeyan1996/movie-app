const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js')
module.exports = merge(webpackBaseConfig, {
    mode: 'development',
    devServer: {
        port: 9000,
        host: '0.0.0.0',
        publicPath: '/',
        contentBase: path.join(__dirname, 'dist'),
        overlay: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        proxy: {
            '/api': {
                target: 'https://m.maizuo.com/v4',
                // pathRewrite: {
                //     '^/api': ''
                // },
                changeOrigin: true, // 允许跨域
                secure: false // 支持https协议

            }
        }

    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ['vue-style-loader',
                    {
                        loader: 'css-loader'
                        // options: {
                        //     modules: true,
                        //     localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        // }
                    },
                    'postcss-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    }
})
