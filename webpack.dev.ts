import path from "path";
import { Configuration } from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";

interface WebpackConfig extends Configuration {
  devServer: {
    historyApiFallback: boolean;
    port: number;
  };
}

const config: WebpackConfig = {
  mode: "development",
  entry: "./src/main.tsx",
  devtool: "source-map",
  devServer: {
    historyApiFallback: true,
    port: 8080,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      components: path.resolve(__dirname, "src", "components"),
      pages: path.resolve(__dirname, "src", "pages"),
      utils: path.resolve(__dirname, "src", "utils"),
      store: path.resolve(__dirname, "src", "store"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
  ],
};

export default config;
