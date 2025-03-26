import { ModuleOptions } from "webpack";
import { BuildOptions } from "./types/types";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");



export function buildLoaders (options: BuildOptions): ModuleOptions['rules'] {

const isDev = options.mode === 'development'
const assetsLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }

const svgLoader = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: [{ loader: '@svgr/webpack', options: { icon: true } }],
}

const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ?  'style-loader' : MiniCssExtractPlugin.loader, 
      "css-modules-typescript-loader", 
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
}
const tsLoader = {
    // test: /\.tsx?/,
    // use: 'ts-loader',
    // exclude: /node_modules/,
    test: /\.tsx?/,
    use: [{
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      }
    }

    ],
    exclude: /node_modules/,
    }

    return [
    scssLoader,
    tsLoader,
    assetsLoader,
    svgLoader
    
]
 } 
   