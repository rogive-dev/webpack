module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-typescript",
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          chrome: "58",
          ie: "11",
          node: "current"
        }
      }
    ]
  ]
};