var path = require('path');

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'dist/bundle.js',
        path: path.join(__dirname, '/'),
    },
    devServer: {
        port: 8080,
        historyApiFallback: true
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {test: /\.js/, use: 'babel-loader'}
        ]
    }
};
