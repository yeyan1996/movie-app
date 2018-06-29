const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.config.js')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
module.exports = merge(webpackBaseConfig, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: [MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[hash:base64:5]'
                        }
                    },
                    'postcss-loader', 'sass-loader']
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
    // new OptimizeCssAssetsPlugin({
    // 	assetNameRegExp: /\.style\.css$/g,
    // 	cssProcessor: require('cssnano'),
    // 	cssProcessorOptions: { discardComments: { removeAll: true } },
    // 	canPrint: true
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    // 	compress: {   //压缩代码
    // 		dead_code: true,  //移除没被引用的代码
    // 		warnings: false,   //当删除没有用处的代码时，显示警告
    // 		loops: true //当do、while 、 for循环的判断条件可以确定是，对其进行优化
    // 	},
    // 	except: ['$super', '$', 'exports', 'require']  //混淆,并排除关键字
    // })

    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
        runtimeChunk: true

    }

    // optimization:{
    // 	splitChunks:{
    // 		cacheGroups:{ // 单独提取JS文件引入html
    // 			vendor:{  // 键值可以自定义
    // 				chunks:'initial',
    // 				name:'vendor',  // 入口的entry的key
    // 				enforce:true // 强制
    // 			}
    // 		}
    // 	}
    // }

})
