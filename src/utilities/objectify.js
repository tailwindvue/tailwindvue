#!/usr/bin/env node

const compiler = require('vue-template-compiler');
const camelCase = require('lodash.camelcase');
const fs = require('fs');
const yargs = require('yargs');

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

const args = yargs
    .option('input', {
        alias: 'i',
        type: 'string',
        description: 'The file to convert.'
    })
    .option('output', {
        alias: 'o',
        type: 'string',
        description: 'The file to output.'
    }).argv;

console.clear();

if (args.input && args.output) {
    fs.readFile(args.input, 'utf8', (error, contents) => {
        if (error) {
            return console.error(error);
        }

        fs.writeFile(args.output, `module.exports = ${JSON.stringify(objectify(contents), null, 4).replace(/"/g, `'`)};`, 'utf8', (error) => {
            if (error) {
                console.error(error);
            }
        });

        console.info('\x1b[32m', `Success: Converted ${args.input} to ${args.output}`);
    });
}

if (!args.input) {
    console.error('\x1b[31m', 'Error: The input file option is required.');
}

if (!args.output) {
    console.error('\x1b[31m', 'Error: The output file option is required.');
}
