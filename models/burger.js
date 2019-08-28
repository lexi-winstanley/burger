const orm = require('../config/orm.js');

const burger = {
    all: function(callback) {
        orm.all('burgers', function(res) {
          callback(res);
        });
      },
      create: function(valuesArr, callback) {
        orm.create('burgers', ['burger_name'], valuesArr, function(res) {
          callback(res);
        });
      },
      update: function(columnValueObject, condition, callback) {
        orm.update('burgers', columnValueObject, condition, function(res) {
          callback(res);
        });
      }
};

module.exports = burger;