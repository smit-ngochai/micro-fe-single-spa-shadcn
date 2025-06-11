const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 9001,
  },
  configureWebpack: {
    externals: [
      "@client-gate/client-gate-shared-dependency",
      "reka-ui",
      "vue",
      "single-spa",
    ],
  },
});
