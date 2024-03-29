const path = require('path')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports ={
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
   entry:  path.resolve(__dirname, 'src', 'index.tsx'),
   output:{
       path: path.resolve(__dirname, 'dist'),
       filename:'bundle.js',
       publicPath: '/',
   },
   resolve: {
       extensions: ['.js', '.jsx', '.ts', '.tsx'],
   },
   devServer:{
  
    static: path.resolve(__dirname, 'public'),  
   },
module:{
    rules: [
        {
            test: /\.(j|t)sx$/,
            exclude: /node_modules/,
            use:'babel-loader',
        },
        {
        test: /\.scss$/,
            exclude: /node_modules/,
            use:['style-loader', 'css-loader', 'sass-loader'],
        }
    ]
}
};