const path = require( 'path' );
var PACKAGE = require( './package.json' );
var version = PACKAGE.version;
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: './js/main.' + version + '.js',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    MiniCssExtractPlugin.loader,

                    // Translates CSS into CommonJS
                    "css-loader",

                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }
        ],
    },
    plugins: [ 'index', 'page1' ].map(
        ( file ) =>
            new HtmlWebpackPlugin( {
                title: 'HTML+JS+Sass boilerplate',
                template: './src/assets/' + file + '.html',
                inject: true,

                meta: {
                    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
                },
                filename: './' + file + '.html' //relative to root of the application
            } )
    ).concat(
        new MiniCssExtractPlugin( {
            filename: './css/main.' + version + '.css',
        } ),
    ),

    devServer: {
        static: {
            directory: path.join( __dirname, './src/public/' ),
        },
        port: 6871,
        watchFiles: [ 'src/*' ],
    },

};