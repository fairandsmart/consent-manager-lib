const path = require('path');

module.exports = {
  entry: {
    'my-lib': './src/index.ts',
    'my-lib.min': './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, '_bundles'),
    filename: 'consent.js',
    libraryTarget: 'umd',
    library: 'FairAndSmart',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  plugins: [
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
}
