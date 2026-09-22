import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { env } from "node:process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filepath = 'index';
const entryPath = './src/index.js';



export default (env) => {

  return {
    mode: env.mode,

    entry: entryPath,

    output: {
      path: path.resolve(__dirname, `dist`),
      filename: `${filepath}.[hash].js`,
      clean: true,
    },

    module: {
      rules: [{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      }
      ]
    },
    resolve: {
      extensions: [".jsx", ".js"],
    },

    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
    ],

    devServer: {
      port: 3000,
      open: true,
    }
  }


}
