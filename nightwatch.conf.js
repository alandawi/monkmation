var   FILECOUNT         = 0;
const BINPATH           = './node_modules/nightwatch/bin/';
const REPORTS_PATH      = "./reports/";
const SCREENSHOT_PATH   = "./screenshots/";
const DRIVERS_PATH      = "./drivers/";
const CUSTOM_PATH       = "./custom/";

module.exports = {
  "src_folders": [
    "test/basic"
  ],
  "custom_commands_path": CUSTOM_PATH + "commands",
  "custom_assertions_path": CUSTOM_PATH + "assertions",
  "output_folder": REPORTS_PATH,
  "selenium": {
    "start_process": true,
    "server_path": "./node_modules/nightwatch/bin/selenium.jar",
    "host": "127.0.0.1",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver" : "./node_modules/nightwatch/bin/chromedriver",
      "webdriver.ie.driver" : DRIVERS_PATH + "IEDriverServer.exe"
    }
  },
  "test_settings": {
    "default": {
      "screenshots": {
        "enabled": true,
        "path": SCREENSHOT_PATH,
        "on_failure": true
      },
      "globals": {
        "waitForConditionTimeout": 5000
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
            "args": [
                "window-size=1600,900"
            ]
        },
        "javascriptEnabled": true,
      }
    },
    "local": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "127.0.0.1",
      "silent": false,
      "screenshots": {
        "enabled": true,
        "path": SCREENSHOT_PATH
      },
      "globals": {
        "waitForConditionTimeout": 15000
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "chromeOptions": {
          "args": [
            `Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46
            (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3`,
            "--window-size=640,1136"
          ]
        },
        "javascriptEnabled": true,
        "acceptSslCerts": true
      }
    },
    "chrome": {
      "desiredCapabilities": {
        "browserName": "chrome",
        "javascriptEnabled": true 
      }
    },
    "firefox" : {
      "desiredCapabilities": {
        "browserName": "firefox"
      }
    },
    "ie": {
      "desiredCapabilities": {
          "browserName" : "internet explorer",
          "javascriptEnabled" : true,
          "acceptSslCerts" : true
      }
    }
  }
}

/**
 * selenium-download does exactly what it's name suggests;
 * downloads (or updates) the version of Selenium (& chromedriver)
 * on your localhost where it will be used by Nightwatch.
 /the following code checks for the existence of `selenium.jar` before trying to run our tests.
 */
require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) {
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function(error) {
      if (error) throw new Error(error);
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});

function padLeft (count) {
  return count < 10 ? '0' + count : count.toString();
}

function imgpath (browser) {
  var a = browser.options.desiredCapabilities;
  var meta = [a.platform];
  meta.push(a.browserName ? a.browserName : 'any');
  meta.push(a.version ? a.version : 'any');
  meta.push(a.name);
  var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
  return SCREENSHOT_PATH + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOT_PATH = SCREENSHOT_PATH;
