const path = require('path');

module.exports = {
    configureWebpack: config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            ...{
                Components: path.resolve(__dirname, 'src/components'),
            }
        };
    },

    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].template = './demo/public/index.html';
                return args;
            });
    },

    css: {
        extract: true
    },
};
