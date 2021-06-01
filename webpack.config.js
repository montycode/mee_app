var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { GenerateSW } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    mode: 'production',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
      index: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.bundle.js',
      publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader?compact=false'
            },
            {
                test: /\.css$/,
                use: [
                "style-loader",
                { loader: "css-loader", options: { importLoaders: 1 } },
                "postcss-loader",
                ],
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                {
                    loader: 'file-loader',
                    options: { name: 'assets/[hash].[ext]' },
                },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                    }
                  }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@': path.resolve(__dirname, 'src/'),
        }
    },
    plugins: [        
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico'
      }),
      new WebpackPwaManifest({
        name: 'PBH - Mexicanos en el Extranjero',
        short_name: 'MEE',
        display: "standalone",
        start_url: '/',
        description: 'Mexicanos en el Extranjero',
        background_color: '#000000',
        theme_color: '#000000',
        crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
        ios: {
          'apple-mobile-web-app-title': 'Mexicanos en el Extranjero',
          'apple-mobile-web-app-status-bar-style': 'black'
        },
        icons: [
          {
            src: path.resolve('src/assets/img/pbh_icon.png'),
            sizes: [120, 152, 167, 180, 1024],
            destination: path.join('icons', 'ios'),
            ios: true
          },
          {
            src: path.resolve('src/assets/img/pbh_icon.png'),
            size: 1024,
            destination: path.join('icons', 'ios'),
            ios: 'startup'
          },
          {
            src: path.resolve('src/assets/img/pbh_icon.png'),
            sizes: [36, 48, 72, 96, 144, 192, 512],
            destination: path.join('icons', 'android')
          },
          {
              src: path.resolve('src/assets/img/pbh_icon.png'),
              size: '1024x1024',
              purpose: 'maskable'
          }
        ]
      }),
      new GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        importScripts: ['./public/firebase-messaging-sw.js'],
      })
    ],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'https://meeapi.herokuapp.com/api/v1'
        })
    }
}