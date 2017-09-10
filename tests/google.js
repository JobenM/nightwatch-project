/* jshint expr: true */
module.exports = {
  'Demo test Google' : function (browser) {
browser
    .url('http://www.google.com')
    .setValue('input[id=lst-ib]', 'nightwatch')
    .click("input[value='Google Search']").pause(2000)
    .assert.containsText('#main', 'Night Watch')
    .end();
  }
};
