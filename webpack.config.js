const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dispatcher.js',
        library: 'events',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
};
