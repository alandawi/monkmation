# MonkMation
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/alandawi/monkmation/issues)
[![Dependency Status](https://david-dm.org/alandawi/monkmation.svg)](https://github.com/alandawi/monkmation)
[![devDependency Status](https://david-dm.org/alandawi/monkmation/dev-status.svg)](https://david-dm.org/alandawi/monkmation#info=devDependencies)

Starter Kit for QA automation tasks - MediaMonks BA (unofficial)


#### Where I can find download the driver's?

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

## _How can I use it_?

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

See the package.json to use other commands

### Custom Commands and Assertions

Most of the files in the "custom" folder come from [nightwatch-commands](https://github.com/mobify/nightwatch-commands).

### MIT Licence