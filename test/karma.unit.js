module.exports = function (config) {
    var browser = process.env.KARMA_BROWSER || 'PhantomJS';

    config.set({
        basePath: '../',
        frameworks: ['mocha', 'sinon-chai', 'chai'],
        files: [
            'test/unit/**/*-TU.js'
        ],
        preprocessors: {
            'dist/js/soec.js': 'coverage',
        },
        coverageReporter: {
            type: 'html',
            dir: 'dist/reports/karma/coverage/'
        },
        exclude: [],
        reporters: ['spec', 'coverage'],
        port: 9997,
        runnerPort: 9100,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: [browser],
        captureTimeout: 10000,
        singleRun: true,
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-sinon-chai',
            'karma-spec-reporter',
            'karma-coverage',
            'karma-coffee-preprocessor',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher'
        ]
    });
};
