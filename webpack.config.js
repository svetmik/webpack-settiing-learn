import path from 'node:path';
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from 'webpack';
import Dotenv from 'dotenv-webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathFile = 'index';



export default (env) => {

  // Вернет true, если стоит dev режим сборка проекта
  const isDev = env.mode === 'development';
  
  // Если не был прописан режим мода, по умолчанию выставляется dev режим
  const mode = env.mode ?? 'development';
  return {

    mode: mode,

    // Указываем путь до входной точки:
    entry: path.resolve(__dirname, 'src', `${pathFile}.tsx`),

    output: {
      // Путь до директории
      path: path.resolve(__dirname, 'dist'),
      // Имя файла со сборкой
      filename: `${pathFile}.[contenthash].js`,
      clean: true
    },

    // Указываем тут, что будем использовать спец. модуль для определенных файлов (лоадер)
    module: {

      rules: [

       {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },

      {
          // Указываем правило для  лоадера
          test: /\.tsx?$/,
          use: "ts-loader",
          // Эту папку не обрабатываем
          exclude: /node_modules/,
        },


      ],
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },


    plugins: [
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') }),
      new Dotenv({
        path: './.env.local',
      }),

      isDev && new webpack.ProgressPlugin()
    ],

    devtool: isDev && 'inline-source-map',

    devServer: isDev ? {
      port: env.port ?? 3000,
      open: true,
    } : undefined
  }

}