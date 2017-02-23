var conf = require('../../nightwatch.conf.js');

module.exports = {
  'MediaMonksBA - Basic Example' : function (browser) {
    browser
      .url('https://www.mediamonks.com')
      .waitForElementVisible('body', 1000)
      .pause(1000)
      .verify.containsText(".contact-table-name:first-child", "AMSTERDAM HQ")
      .saveScreenshot(conf.imgpath(browser) + 'mediamonks.png')
      .end();
  }
};