module.exports = {
  presets: ["next/babel"],
  plugins: [
    "babel-plugin-styled-components",
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
    [
      "module-resolver",
      {
        root: ["."],
        extensions: [".ts", ".tsx", ".jsx", ".js", ".json"],
        alias: {
          "@components": "./src/components",
          "@utils": "./src/utils",
          "@libs": "./src/libs",
          "@apis": "./src/apis",
          "@pages": "./src/pages",
          "@styles": "./src/styles",
          "@reducer": "./src/reducer",
          "@containers": "./src/containers",
        },
      },
    ],
  ],
};
