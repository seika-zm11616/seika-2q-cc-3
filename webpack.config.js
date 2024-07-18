module.exports = {
    watch: true,
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        fallback: {
          util: require.resolve("util/")
        }
    },
    entry: {
        main: './src/index.js',
        app: './src/app.js',
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
};