// test judpack create command
const create = require('./flow/judpack-create.flow');
const platformAdd = require('./flow/judpack-platform.flow');
const buildWeb = require('./flow/judpack-build-web.flow');
const pluginCreate = require('./flow/judpack-plugin-create.flow');
const pluginAdd = require('./flow/judpack-plugin-add.flow');
const judPluginCreate = require('./flow/judpack-judplugin.flow');

describe('test "judpack" command', function () {
  this.timeout(40000);
  create();
  platformAdd();
  pluginCreate();
  buildWeb();
  pluginAdd();
  judPluginCreate.createIOS();
  judPluginCreate.createAndroid();

});