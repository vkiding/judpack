// test judpack create command
const chai = require('chai');
const expect = chai.expect;
const fs = require('fs');

module.exports = function () {
  it('test judpack platform add android command', function (done) {
    
    setTimeout(function () {
      expect(fs.existsSync('./judpackdemo/platforms/android')).to.equal(true);
      done();
    }, 20000);      
  });
  
}


