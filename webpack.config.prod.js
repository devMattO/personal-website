/*eslint-disable */
const webpack           = require("webpack");
const path              = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer      = require("autoprefixer");

module.exports = {

  entry: {
    main: path.join(__dirname, "./js/app.jsx")
  },

  output: {
    path:       path.join(__dirname, "dist"),
    filename:   "[name].js",
    publicPath: "/"
  },

  module: {
    loaders: [
      {
        test:    /\.(js|jsx)$/,
        include: path.join(__dirname, "js"),
        loaders: [
          "babel"
        ],
      },

      {
        test:    /\.scss$/,
        loaders: [
          "style",
          "css",
          "sass"
        ]
      },

      {
        test:    /\.css$/,
        loaders: [
          "style",
          "css",
        ]
      },

      {
        test:    /\.json$/,
        loaders: [
          "json"
        ]
      },

      {
        test:    /\.(png|jpg|gif)$/,
        loaders: [
          "url?limit=50000"
        ]
      },

      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },

      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },

      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },

      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },

      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=image/svg+xml"
      },

      {
        test: /\.ico$/,
        loader: "url-loader"
      }
    ]
  },

  postcss: [ autoprefixer({ browsers: ["last 2 versions"] }) ],

  resolve: {
    extensions: ["", ".js", ".jsx", ".css", ".scss", ".less"],
    root:       [
      path.join(__dirname, "src", "javascripts"),
      path.join(__dirname, "src", "images")
    ],
    modulesDirectories: ["node_modules"]
  },

  devtool: false,
  // devtool: "#source-map",
  stats:   {
    colors: true
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      },
      "API_ENDPOINT": process.env.npm_package_config_apiEndpoint
    }),

    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),

    new webpack.ProvidePlugin({
      jQuery: "jquery",
      _:      "underscore"
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new HtmlWebpackPlugin({
      template: "./index.tpl.html"
    }),

    new webpack.optimize.DedupePlugin(),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),

    new webpack.optimize.AggressiveMergingPlugin()
  ]

};