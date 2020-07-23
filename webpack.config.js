const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const path = require('path');

module.exports = () => {
    return {
        entry: './main.tsx',
        output: {
            filename: '[hash].min.js',
            path: path.resolve(__dirname, './dist')
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.scss?$/,
                    use: [
                        { loader: MiniCSSExtractPlugin.loader },
                        'css-loader',
                        { loader: 'sass-loader', options: { sourceMap: false } }
                    ],
                    exclude: /node_modules/
                },
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                Pages: path.resolve(__dirname, './src/pages'),
                Components: path.resolve(__dirname, './src/components')
            }
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './src/template.html'),
                filename: '../index.html',
                inlineSource: '.(js|css)$',
                title: 'Sarya Fintech',
                minify: true
            }),
            new MiniCSSExtractPlugin({
                filename: 'name.[hash].css'
            })
            // new HtmlWebpackInlineSourcePlugin()
        ],
        target: 'web',
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.css$/,
                        chunks: 'all',
                        enforce: true,
                    },
                },
            },
        },
    }
}