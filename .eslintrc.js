module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "airbnb"
  ],
  "plugins": [
    "import",
    "jsx-a11y",
    "react",
    "react-hooks"
  ],
  "rules": {
    "semi": [2, "never"],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "jsx-quotes": ["error", "prefer-single"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
}