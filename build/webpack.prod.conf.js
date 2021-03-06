const merge=require('webpack-merge');
const baseWebpackConfig=require('./webpack.base.conf.js');
const webpack=require('webpack');
const path=require('path');
const DIST_PATH=path.resolve(__dirname,"../dist");
//打包之前清除文件
const CleanWebpackPlugin=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
//打包的时候分析包大小等
const BundleAnalyzerPlugin=require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//分离css
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const styleUtils=require("./loaderUtils");

module.exports=merge(baseWebpackConfig,{
    mode:"production",//会将 process.env.NODE_ENV 的值设为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.
    devtool:'cheap-module-source-map',//不带列映射(column-map)的 SourceMap，将加载的 Source Map 简化为每行单独映射。
    output:{
        filename:"js/[name].[hash].js",
        path:DIST_PATH
    },
    module:{
        rules:styleUtils.styleLoaders({
            sourceMap:true,
            usePostCSS:true,
            useTypescriptCssModule:false,
            useCssModule:false,
            isBuild:true
        })
    },
    plugins:[
        new CleanWebpackPlugin({}),//每次打包前清除dist
        new HtmlWebpackPlugin({
            //将目录下的index.html引进生成的dist中的index.html
            template:'src/public/index.html',
            title:'测试Vue环境搭建',
            favicon:'src/assets/favicon-shield.ico',
            minify:{
                removeComments:true,
                collapseWhitespace:true,
                removeAttributeQuotes:true
            },
            
        }),
        new BundleAnalyzerPlugin({//打包分析
            // analyzerPort:10000,
            // openAnalyzer:true,
        }),
        new MiniCssExtractPlugin({//分离css
            filename:"css/[name].[chunkhash:8].css",
            chunkFilename:"css/[id].[hash].css"
        })
    ]
});
