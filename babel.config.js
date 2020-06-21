module.exports = {
  presets: [["@babel/preset-env", { targets: { ie: "11" } }]], // 構文の変換
  plugins: [
    ["@babel/plugin-transform-runtime", { corejs: 3 }], // グローバル汚染が起こらない様にポリフィル
    ["@babel/plugin-transform-react-jsx", { pragma: "h" }], //jsx
  ],
};
