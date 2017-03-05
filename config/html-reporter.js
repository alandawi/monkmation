var HtmlReporter = require('nightwatch-html-reporter');

var reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: 'reports',
    reportFilename: 'report_monkmation_.html',
    themeName: 'default',
    hideSuccess: false,
    uniqueFilename: true,
    relativeScreenshots: false
});

module.exports = {
    write : function(results, options, done) {
        reporter.fn(results, done);
    }
};