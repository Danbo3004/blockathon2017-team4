module.exports = function(Util) {
  Util.disableRemoteMethodByName('create');
  Util.disableRemoteMethodByName('count');
  Util.disableRemoteMethodByName('destroyById');
  Util.disableRemoteMethodByName('destroyAll');
  Util.disableRemoteMethodByName('findOne');
  Util.disableRemoteMethodByName('updateAll');
  Util.disableRemoteMethodByName('upsert');
  Util.disableRemoteMethodByName('upsertWithWhere');
  Util.disableRemoteMethodByName('replaceById');
  Util.disableRemoteMethodByName('replaceOrCreate');
  Util.disableRemoteMethodByName('findOrCreate');
  Util.disableRemoteMethodByName('updateAttribute');
  Util.disableRemoteMethodByName('updateAttributes');
  Util.disableRemoteMethodByName('destroy');
  Util.disableRemoteMethodByName('replaceAttributes');
  Util.disableRemoteMethodByName('createChangeStream');
  Util.disableRemoteMethodByName('prototype.patchAttributes');

  //Util.disableRemoteMethodByName('find');
  Util.disableRemoteMethodByName('findById');
  Util.disableRemoteMethodByName('replaceById');
  Util.disableRemoteMethodByName('exists');
}
