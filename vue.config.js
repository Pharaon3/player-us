// vue.config.js
module.exports = {
  devServer: {
        disableHostCheck: true,
        overlay: {
	      warnings: false,
	      errors: false
	    }
    },
   publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/'
}