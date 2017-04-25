const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');

const pluginName = 'jud-action-sheet';

module.exports = function () {
  it('test judpack plugin add command', function (done) {
    setTimeout(function () {
      const pluginExist = fs.existsSync('./judpackdemo/plugins/' + pluginName);
      const iosPluginReady = fs.existsSync('./judpackdemo/platforms/ios/Judplugin/Judplugin/Plugins/' + pluginName);
      // const iosPluginReady = fs.existsSync('./judpackdemo/platforms/ios/Judplugin/Judplugin/Plugins/' + pluginName);
      const fileCheck = pluginExist && iosPluginReady;
      expect(fileCheck).to.equal(true);
      done();
    }, 38000);     
  });
};

