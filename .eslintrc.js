module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'allowImportExportEverywhere': false
  },
  'env': {
    'mocha': true,
    'browser': true,
    'worker': true,
    'node': true
  },
  'rules': {
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'no-plusplus': 0,
    'no-loop-func': 0,
    'no-mixed-operators': [
      'error', {
        'allowSamePrecedence': true
      }
    ],
    'no-param-reassign': [
      'error', {
        'props': false
      }
    ],
    'no-prototype-builtins': 0,
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-bitwise': 0,
    'import/prefer-default-export': 0,
    'prefer-default-export': 0,
    'func-names': 0,
    'arrow-body-style': 0,
  }
};
