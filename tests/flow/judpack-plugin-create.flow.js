const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const child_process = require('child_process');

module.exports = function () {
  it('test judpack plugin create command', function (done) {
    child_process.exec('rm -rf jud-plugin &&  node ./bin/judpack-plugin create  jud-plugin');
    setTimeout(function () {
      const hasPackage = fs.existsSync('./jud-plugin/package.json');
      const hasConfig = fs.existsSync('./jud-plugin/plugin.xml');
      const hasWeb = fs.existsSync('./jud-plugin/web');
      const hasAndroid = fs.existsSync('./jud-plugin/android');
      const hasIos = fs.existsSync('./jud-plugin/ios');
      const fileCheck = (hasPackage && hasConfig && hasWeb && hasAndroid && hasIos);
      expect(fileCheck).to.equal(true);
      done();
    }, 2500);      
  });
}
