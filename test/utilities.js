/* eslint-disable no-undef */

/**
 * Get a valid css selector from theme classes.
 *
 * @param key
 * @returns {string}
 */
export function selector(key) {
    console.log('key', key);
    return '.' + key.replace(/ /g, '.').replace(/:/g, '\\:');
}

/**
 * Expect extension to check whether the wrapper contains an element with theme classes
 * @param {Wrapper=} wrapper
 * @param {Key} key
 * @returns {Object}
 */
export function toContainElement(wrapper, key) {
    if (wrapper.find(selector(key)).exists()) {
        return {
            message: () => `expected ${wrapper.name()} not to contain an element with classes ${key}`,
            pass: true,
        };
    } else {
        return {
            message: () => `expected ${wrapper.name()} to contain an element with classes ${key}`,
            pass: false,
        };
    }
}

/**
 * Expect extension to check whether wrapper classes contain theme classes
 *
 * @param {Wrapper=} wrapper
 * @param {String} key
 * @returns {Object}
 */
export function toHaveClasses(wrapper = null, key) {
    if (key.split(' ').every(item => wrapper.classes().includes(item))) {
        return {
            message: () => `expected ${wrapper.name()} not to contain the classes ${key}`,
            pass: true,
        };
    } else {
        return {
            message: () => `expected ${wrapper.name()} to contain the classes ${key}`,
            pass: false,
        };
    }
}


