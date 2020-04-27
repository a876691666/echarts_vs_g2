const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
        "@img": path.resolve(__dirname, "src/assets/markdown-img")
      }
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            "html-loader",
            {
              loader: "markdown-loader",
              options: {
                langPrefix: "hljs language-",
                style: "Vs 2015",
                highlight: function(code, language) {
                  const hljs = require("highlight.js");
                  const validLanguage = hljs.getLanguage(language)
                    ? language
                    : "plaintext";
                  return hljs.highlight(validLanguage, code).value;
                }
              }
            }
          ]
        }
      ]
    }
  }
};
