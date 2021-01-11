// vue.config.js

module.exports = {
    assetsDir: './assets/',
    filenameHashing: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/longread'
        : '/'
}
