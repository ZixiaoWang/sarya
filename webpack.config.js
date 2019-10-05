const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const path = require('path');

module.exports = () => {
    return {
        entry: './main.tsx',
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, './dist')
        },
        module: {
            rules: [
                { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },
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
            new MiniCSSExtractPlugin({
                filename: 'main.css'
            })
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