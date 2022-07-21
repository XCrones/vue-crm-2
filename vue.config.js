const { defineConfig } = require('@vue/cli-service');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-crm-2/' : '/',
};

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
});
