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

        if (process.env.VUE_CLI_BUILD_TARGET) {
            return;
        }

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
