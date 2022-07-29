const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        myApp: './src/myApp.ts',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        library: {
            name: 'WWW',
            type: 'assign-properties', 
        } ,
        path: path.resolve(__dirname, 'dist'),
    },
};