const path = require('path');

module.exports = {
  "extends": [
    "airbnb",
  ],
  "globals": {
    "navigator": true,
    "window": true
  },

  "rules": {
    "no-console": "off",
    "no-continue": "off",
    "no-nested-ternary": "off",
    "no-underscore-dangle": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-filename-extension": "off",
    "jsx-a11y/anchor-is-valid": ["error", {
      "specialLink": ["to"]
    }]
  },
  "settings": {
    "import/resolver": {
      "node": {
        // From NODE_PATH in .env
        "paths": [
          path.resolve(__dirname, 'src/'),
          path.resolve(__dirname, 'src/app/')
        ]
      }
    }
  }
};