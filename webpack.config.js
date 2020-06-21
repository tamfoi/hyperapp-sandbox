module.exports = {
  mode: "production",
  entry: "./app.js",
  output: {
    path: __dirname + "/dist",
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
