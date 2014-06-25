var browserName = process.env.KARMA_BROWSER;
if (!browserName) {
    browserName = 'chrome';
}

exports.config = {
    baseUrl: 'http://localhost:9000/',
    specs: ['e2e/dsl/*.js'],
    capabilities: {
        'browserName': (process.env.KARMA_BROWSER || 'chrome').toLowerCase()
    },
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};
