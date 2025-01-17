const path = require('path');

module.exports = {
    entry: './src/gallery.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'], // Compile SCSS to CSS
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], // Transpile modern JS
                    },
                },
            },
        ],
    },
    mode: 'development', // Switch to 'production' for optimized builds
};
