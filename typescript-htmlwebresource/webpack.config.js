const path = require('path');

module.exports = {
  entry: {
    www_crm: './src/crm.ts',
    www_contactcards: './src/html/www_contactcards.ts'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'www',
      type: 'assign-properties',
    }
  },
};