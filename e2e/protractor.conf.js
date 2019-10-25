// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 30000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  multiCapabilities: [{
    'browserName': 'chrome',
    'chromeOptions ': {
      args: [ "--headless", "--no-sandbox", "--disable-browser-side-navigation" ]
    }
  },
    {
      browserName: 'chrome',
      'deviceName': 'Google Pixel 2',
      'chromeOptions ': {
        args: [ "--headless", "--no-sandbox", "--disable-browser-side-navigation" ]
      }
    }],
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 3000,
    includeStackTrace: true,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
