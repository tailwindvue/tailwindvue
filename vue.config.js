const path = require('path');
const objectify = require('./src/utilities/objectify');

module.exports = {
    configureWebpack: config => {
        config.resolve.alias = {
            ...config.resolve.alias,
            ...{
                Components: path.resolve(__dirname, 'src/components'),
            }
        };
    },
    devServer: {
        before: function () {
            objectify.thing();
            console.log('Made it here');
        }
    },
    css: {
        extract: true
    }
};
