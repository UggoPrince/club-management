module.exports = {
    "extends": ["airbnb-base", "prettier"],
    "plugins": ["prettier"],
    "rules": {
      "prettier/prettier": ["error"],
      "linebreak-style": ["error", "unix"],
      "no-restricted-syntax": ["error", "WithStatement"]
    }
};
