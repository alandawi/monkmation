var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: 'reports',
    reportFilename: 'pretty_report_monkmation.html',
    themeName: 'cover',
    hideSuccess: false,
    uniqueFilename: false,
    relativeScreenshots: false
});

module.exports = {
    write : function(results, options, done) {
        reporter.fn(results, done);
    }
};