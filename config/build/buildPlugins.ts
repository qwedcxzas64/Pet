import  path from 'path'
import  HtmlWebpackPlugin from 'html-webpack-plugin'
import { Configuration, DefinePlugin } from "webpack";
import { BuildOptions } from './types/types';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';


const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

export function buildPlugins ({mode, paths, analyzer, platform} : BuildOptions) : Configuration ['plugins'] {
  const isProd = mode === 'production'



    return [
    new HtmlWebpackPlugin({ template: paths.html }),
        isProd && new MiniCssExtractPlugin({
          filename : 'css/[name].[contenthash:8].css',
          chunkFilename : 'css/[name].[contenthash:8].css'
        }),
        isProd && new BundleAnalyzerPlugin(),
        new DefinePlugin({
          __PLATFORM__ : JSON.stringify(platform) 
        }),
        new ForkTsCheckerWebpackPlugin(), // Выносим проверку типов в отдельный процесс для оптимизации  В деве
        
]
}