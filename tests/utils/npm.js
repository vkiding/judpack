const chai = require('chai');
const expect = chai.expect;
// const fs = require('fs');
const npmTool = require('../../src/utils/npm');

module.exports = function() {
  it('plugin publish', function() {
    return npmTool.publish('npm','','./jud-plugin')
      .then(function(result) {
        expect(result).to.equal(false);
      }) 
  });
 
};
