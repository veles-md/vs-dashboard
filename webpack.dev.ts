import path from "path";
import { Configuration } from "webpack";
import HtmlWebPackPlugin from "html-webpack-plugin";

interface WebpackConfig extends Configuration {
  devServer: {
    historyApiFallback: boolean;
    hot: boolean;
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
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
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
