const HtmlWebpackPlugin = require('html-webpack-plugin');
const FederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports ={
    // default webpack search the below file
    // entry: './src/index.js',
    mode: 'development',
    devServer: {
        port: 4200,
    },
    plugins: [
        new FederationPlugin({
            name: 'list',
            filename: 'list.js',
            exposes: {
                './listIndex': './src/index'
             },
             shared: ['lodash']
        }),
        new HtmlWebpackPlugin(
        {
            template: './public/index.html'
        }
    )]
}