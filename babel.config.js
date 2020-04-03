module.exports = {
    presets: ['@vue/cli-plugin-babel/preset'],
    plugins: [
        ['prismjs', {
            languages: ['javascript', 'bash', 'markup'],
            plugins: ['normalize-whitespace'],
            theme: 'tomorrow',
            css: true
        }]
    ]
};
