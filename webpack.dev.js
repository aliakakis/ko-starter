var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');

var extractSass = new ExtractTextPlugin({
    filename: "css/screen.css"
});

module.exports = {
    watch: true,
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build/dev/')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            "es2015",
                            "stage-0"
                        ],
                        "plugins": [
                            "transform-decorators-legacy"
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(["build/dev"]),
        extractSass,
        new webpack.SourceMapDevToolPlugin(),
        new CopyWebpackPlugin([
            { from: 'index.html' },

            { from: 'bower_components', to: 'bower_components' },
            { from: 'semantic/dist', to: 'semantic/dist' },

            { from: 'src/css/fonts', to: 'css/fonts' },
            { from: 'src/css/images', to: 'css/images' },
        ]),
    ]
};