module.exports = {
  entry: [
    // includes a custom regenerator runtime and core-js
     './client/index.js'
  ],
  output: {
     path: __dirname,
     filename: './public/bundle.js'
  },
  devtool: 'source-map',
  module: {
     rules: [
        {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           // teaching webpack to use babel
           loader: 'babel-loader',
           options: {
              presets: [
                 '@babel/preset-react'
              ]
           }
        },
        {
           test: /\.css$/,
           use: [
              'style-loader',
              'css-loader',
           ]
        }
     ]
  }
}