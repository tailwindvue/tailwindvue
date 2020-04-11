const theme = require('../stubs/theme');

module.exports = {

    /**
     * Generate an array of classes from the default theme;
     *
     * @returns {[String]}
     */
    generate() {
        return this.generateFrom(theme);
    },

    /**
     * Generate an array of classes from a given theme;
     *
     * @param {Object} theme
     * @returns {[String]}
     */
    generateFrom(theme) {
        return this.getClassesFrom(theme);
    },

    /**
     * Get an array of string classes from an object.
     *
     * @param {Object} object
     * @returns {String[]}
     */
    getClassesFrom(object) {
        return Object.values(object).flatMap(value => {
            return typeof value === 'object' ? this.getClassesFrom(value) : value.split(' ');
        });
    }
};
