const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const child_process = require('child_process');

function createIOS() {
  it('test judpack judplugin create ios command', function (done) {
    child_process.exec('rm -rf Judplugin &&  node ./bin/judpack-judplugin create  ios');
    setTimeout(function () {
      const hasDir = fs.existsSync('./Judplugin');
      const isIos = fs.existsSync('./Judplugin/Judplugin.podspec');

      const fileCheck = (hasDir && isIos);
      expect(fileCheck).to.equal(true);
      done();
    }, 2500);
  });
}

function createAndroid() {
  it('test judpack judplugin create andorid command', function (done) {
    child_process.exec('rm -rf Judplugin &&  node ./bin/judpack-judplugin create  android');
    setTimeout(function () {
      const hasDir = fs.existsSync('./Judplugin');
      const isAndroid = fs.existsSync('./Judplugin/build.gradle');

      const fileCheck = (hasDir && isAndroid);
      expect(fileCheck).to.equal(true);
      done();
    }, 2500);
  });
}

module.exports = {
  createIOS:createIOS,
  createAndroid:createAndroid
}
