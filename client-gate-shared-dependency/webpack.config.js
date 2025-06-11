const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
// const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { VueLoaderPlugin } = require("vue-loader");
const path = require("path");

// require("dotenv").config({ path: "../.env" });

module.exports = async (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "client-gate",
    projectName: "client-gate-shared-dependency",
    webpackConfigEnv,
    argv,
  });

  let plugins = [new VueLoaderPlugin()];

  const configs = merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: ["vue-loader"],
        },
        {
          test: /\.s[ac]ss$/i,
          oneOf: [
            // CSS module rule
            {
              resourceQuery: /module/,
              use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                {
                  loader: "css-loader",
                  options: {
                    modules: {
                      localIdentName: "[hash:10]",
                      localIdentHashSalt: "client-gate-shared-dependency",
                    },
                    importLoaders: 1,
                  },
                },
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },
            // Regular rule (non-CSS module)
            {
              use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },
          ],
        },
      ],
    },
    externals: ["reka-ui", "vue"],
    plugins,

    devServer: {
      port: 9002,
    },

    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "assets"),
      },
    },
  });

  return configs;
};
