const HTMLWebpackPlugin = require("html-webpack-plugin");

const path = require('path')


module.exports ={
plugins:[
    new HTMLWebpackPlugin( {title: "Webpack Output"})
]
}
