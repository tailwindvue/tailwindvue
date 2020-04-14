module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'eslint:recommended',
        'plugin:vue/recommended',
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/max-attributes-per-line': ['warn', {
            'multiline': {
                'allowFirstLine': true
            }
        }],
        'vue/html-indent': ['off'],
        'vue/html-closing-bracket-newline': ['warn', {
            'singleline': 'never',
            'multiline': 'never'
        }],
    },
    overrides: [
        {
            files: [
                '**/tests/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                jest: true
            }
        }
    ]
};
