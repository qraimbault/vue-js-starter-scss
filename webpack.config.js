const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const env = process.env.NODE_ENV;
const sourceMap = env === "development";
const minify = env === "production";

const config = {
  entry: path.join(__dirname, "src", "main.js"),
  mode: env,
  output: {
    publicPath: ""
  },
  serve: {
    host: "localhost",
    port: 3000
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  devtool: sourceMap ? "cheap-module-eval-source-map" : undefined,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [path.join(__dirname, "src")]
      },
      {
        test: /\.scss$/,
        loader:
          "vue-style-loader!css-loader!resolve-url-loader!sass-loader?sourceMap"
      },
      {
        test: /\.(png|jp(e*)g|svg|ico)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1,
              name: "images/[hash]-[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // you can also read from a file, e.g. `variables.scss`
              data: `@import "@/scss/master.scss";`
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, "dist", "index.html"),
      template: path.join(__dirname, "static", "index.html"),
      inject: true,
      minify: minify
        ? {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true
          }
        : false
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "static", "assets", "*"),
        to: path.join(__dirname, "dist", "assets"),
        flatten: true
      }
    ])
  ],
  resolve: {
    alias: {
      "@API$": path.resolve(__dirname, "src/helpers/API.js"),
      "@Config$": path.resolve(__dirname, "src/config.js"),
      "@Component": path.resolve(__dirname, "src/components/"),
      "@View": path.resolve(__dirname, "src/views/"),
      "@MasterStyle$": path.resolve(__dirname, "src/scss/master.scss"),
      "@Asset": path.resolve(__dirname, "src/assets/"),
      "@Test": path.resolve(__dirname, "__test__"),
      "@": path.resolve(__dirname, "src/"),
    }
  }
};

if (minify) {
  config.optimization.minimizer = [
    new UglifyJsPlugin({
      cache: true,
      parallel: true
    })
  ];
}

module.exports = config;
