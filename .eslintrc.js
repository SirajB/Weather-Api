module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "no-unused-vars": [2, {"vars": "all", "args": "none"}],
        "no-console": "off",
        "prefer-destructuring": ["error", {
          "VariableDeclarator": {
            "array": false,
            "object": false
          },
          "AssignmentExpression": {
            "array": false,
            "object": false
          }
        }, {
          "enforceForRenamedProperties": false
        }]
      }
};