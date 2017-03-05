var conf = require('../../nightwatch.conf.js');

module.exports = {
    before : function(browser) {
        console.log('Setting up...');
        browser.maximizeWindow();
    },

    after : function(browser) {
        console.log('Closing down...');
        browser.end();
    },

    beforeEach : function(browser) {
        console.log('beforeEach...');
    },

    afterEach : function() {
        console.log('afterEach...');
    },

    "Home Section": function(browser) {
        // Open website
        browser
            .url('https://www.mediamonks.com')
            .waitForElementVisible('body', 1000)
            .pause(4000);

        // Check header
        browser
            .expect.element('header.main-header').to.be.visible;

        // Check header content
        browser
            .expect.element('header.main-header').text.to.not.contain('The Night Watch').after(500);

        // Save an screenshot of the website
        browser
            .pause(4000)
            .saveScreenshot(conf.imgpath(browser) + 'mediamonks.png');
    },

    "About Section": function(browser) {
        // Open website
        browser
            .url('https://www.mediamonks.com/about')
            .waitForElementVisible('body', 1000)
            .pause(2000);

        // Check title and slider
        browser
            .verify.containsText("article.case-intro h1", "ABOUT")
            .expect.element('article.image-slider').to.be.visible;

        // Check nav into the slider
        browser
            .moveToElement('article.image-slider', 0, 0)
            .click("li.btn-prev a")
            .pause(1000)
            .click("li.btn-next a")
    }
};