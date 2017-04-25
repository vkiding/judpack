// test judpack create command
const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');
const child_process = require('child_process');
module.exports = function () {
  it('test judpack create command', function (done) {
    child_process.exec('rm -rf judpackdemo &&  node ./bin/judpack-create judpackdemo');
    setTimeout(function () {
      expect(fs.existsSync('./judpackdemo/package.json')).to.equal(true);
      expect(fs.existsSync('./judpackdemo/src/index.ju')).to.equal(true);
      expect(fs.existsSync('./judpackdemo/plugins')).to.equal(true);
      child_process.exec('cd judpackdemo && node ../bin/judpack-build web');
      // child_process.exec('node ../bin/judpack-platform add ios');
      child_process.exec('cd judpackdemo && node ../bin/judpack-platform add android');
      child_process.exec('cd judpackdemo && node ../bin/judpack-plugin add jud-plugin-amap');
      done();
    }, 25000);
  });
}
