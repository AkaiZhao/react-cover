const path = require('path')

module.exports = (_, argv) => ({
  mode: argv.mode || 'production',
  entry: './src/index.tsx',
  output: {
    path: argv['output-path'] || path.join(__dirname, 'dist'),
    filename: 'lib.min.js',
    library: 'react-cover',
    libraryTarget: 'umd',
  },
  devtool: argv.mode === 'development' ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  externals: {
    react: {
      root: 'React',
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDom',
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
    },
    'react-loading': {
      root: 'ReactLoading',
      commonjs: 'react-loading',
      commonjs2: 'react-loading',
      amd: 'react-loading',
    },
  },

})
