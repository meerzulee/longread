// vue.config.js

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/ne-pod-etim-solncem/' : '/',
    assetsDir: './assets/',
    filenameHashing: false,
}
