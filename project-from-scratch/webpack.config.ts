import path from 'path';
import type { Configuration } from 'webpack';
import { HotModuleReplacementPlugin } from 'webpack';
import ESLintPlugin from 'eslint-webpack-plugin';

const isProduction = process.env.NODE_ENV === 'production';

const config: Configuration = {
  mode: (process.env.NODE_ENV as 'production' | 'development' | undefined) ?? 'development',
  entry: './src/index.tsx',
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new HotModuleReplacementPlugin(), new ESLintPlugin()],
};

export default config;
