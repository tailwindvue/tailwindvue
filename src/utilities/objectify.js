const compiler = require('vue-template-compiler');
const camelCase = require('lodash.camelcase');
const fs = require('fs');

function mapThing(thing) {
    let theme = {};

    if (thing.attrsMap && thing.attrsMap.class) {
        theme.class = thing.attrsMap.class;
    }

    if (thing.attrsMap && thing.attrsMap[':variants']) {
        theme.variants = Function(`"use strict";return (${thing.attrsMap[':variants']})`)();
    }

    if (thing.children && thing.children.length) {
        theme.children = thing.children.filter(item => item.tag).reduce((collection, item) => {
            return Object.assign(collection, mapThing(item));
        }, {});
    }

    return {
        [camelCase(thing.tag)]: theme,
    };
}

function objectify(thing) {
    let compiled = compiler.compile(thing);

    return mapThing(compiled.ast).theme.children;
}

module.exports = {
    thing: () => {
        fs.readFile('../stubs/theme.vue', 'utf8', (error, contents) => {
            fs.writeFile('../stubs/theme.js', `module.exports = ${JSON.stringify(objectify(contents))};`, 'utf8', (error) => {
                console.log(error);
            });
        });
    }
};
