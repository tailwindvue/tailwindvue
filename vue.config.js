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
    css: {
        extract: true
    }
};
