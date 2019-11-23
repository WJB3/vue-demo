const path=require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');

exports.cssLoaders=function(options){
    options=options||{}

    const styleLoader={
        loader:"style-loader",
        options:{
            sourceMap:options.sourceMap
        }
    }

    const cssLoader={
        loader:"css-loader",
        options:{
            sourceMap:options.sourceMap
        }
    }

    const postcssLoader={
        loader:"postcss-loader",
        options:{
            sourceMap:options.sourceMap
        }
    }

    function generateLoaders(loader,loaderOptions){
        
        const loaders=options.isBuild?[cssLoader]:[styleLoader,cssLoader]

        if(loader){
            loaders.push({
                loader:loader+'-loader',
                options:Object.assign({},loaderOptions,{
                    sourceMap:options.sourceMap
                })
            })
        }

        if(options.usePostCSS){
            loaders.push(postcssLoader)
        }

        if(options.isBuild){
            loaders.unshift(MiniCssExtractPlugin.loader)
        }

        if(options.useTypescriptCssModule){
            loaders.push({
                loader:'typed-css-modules-loader',
                options:{
                    modules:true
                }
            })
        }

        return loaders;
    }

    return {
        css:generateLoaders(),
        less:generateLoaders("less")
    }
}

exports.styleLoaders=function(options){
    const output=[];
    const loaders=exports.cssLoaders(options);

    for(const extension in loaders){
        const loader=loaders[extension];

        if(extension==="css"){
            output.push({
                test:new RegExp("\\."+extension+"$"),
                include:[
                    path.resolve("src/"),
                    path.resolve('node_modules')
                ],
                use:loader
            })
        }else{
            output.push({
                test:new RegExp("\\."+extension+"$"),
                include:[
                    path.resolve("src/")
                ],
                exclude:[/node_modules/],
                use:loader
            })
        }
    }
    output.forEach(item=>{
        console.log(item);
    })
    return output;
}