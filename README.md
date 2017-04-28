# MonkMation
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/alandawi/monkmation/issues)
[![Dependency Status](https://david-dm.org/alandawi/monkmation.svg)](https://github.com/alandawi/monkmation)
[![devDependency Status](https://david-dm.org/alandawi/monkmation/dev-status.svg)](https://david-dm.org/alandawi/monkmation#info=devDependencies)

Starter Kit for QA automation tasks - MediaMonks BA (unofficial)

## How can I use it?
Follow the next steps _**(Fewer steps than the Moonwalk)**_:

### 1. Clone

Clone the repository by _copy-pasting_ the following command into your terminal:

```sh
git clone https://github.com/alandawi/monkmation.git && cd monkmation
```

### 2. Install

Install the *required* dependencies
including Selenium Server and `chromedriver`:

```sh
npm install
```

### 3. Run test

Run the Nightwatch tests:

```sh
npm test
```

This are all the main scripts:

```sh
npm run cleanreports        # clean the reports folder
npm run cleanscreenshots    # clean the screenshots folder
npm run cleanfolders        # run the cleanscreenshots & cleanreports scripts
npm run test                # run the test with the default environment
npm run test:chrome         # run the test with the Chrome environment
npm run test:firefox        # run the test with the Firefox environment
npm run test:ie             # run the test with the Internet Explorer environment
```

## Documentation
View the [documentation](https://github.com/alandawi/monkmation/wiki).

## Where I can find download the driver's?
+ Chrome: https://sites.google.com/a/chromium.org/chromedriver/downloads
+ Internet Explorer: http://selenium-release.storage.googleapis.com/index.html
+ Firefox: is included in the selenium-server-standalone.jar available in the Selenium downloads. The driver comes in the form of an xpi (firefox extension) which is added to the firefox profile when you start a new instance of FirefoxDriver.

```sh
"selenium" : {
  ...
  "cli_args" : {
    "webdriver.chrome.driver" : "./drivers/chromedriver.exe",
    "webdriver.ie.driver" : "./drivers/IEDriverServer.exe"
  }
}
```

More information: https://github.com/nightwatchjs/nightwatch/wiki

## Custom Commands and Assertions
Most of the files in the "custom" folder come from [nightwatch-commands](https://github.com/mobify/nightwatch-commands).

## Screenshots
![alt text](https://cloud.githubusercontent.com/assets/1291730/25543124/a1d5bd3a-2c2b-11e7-8918-e60814d068ec.png "Console Report")

![alt text](https://cloud.githubusercontent.com/assets/1291730/25543139/adc84d60-2c2b-11e7-8ca0-e153ac26cd08.png "HTML Report")

## MIT Licence
