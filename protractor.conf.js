exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine2',
    specs: [
        'tests/e2e/*Test.js'
    ],
    seleniumArgs: ['-browserTimeout=60'],
    capabilities: {
        'browserName': 'firefox'
        //'chromeOptions': {
        //   args: ['--disable-web-security']
        //}
    },
    allScriptsTimeout: 15000,
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 15000,
        isVerbose: true
    }
};
