var Utils                    = require("../../utils")
  , AbstractConnectorManager = require("../abstract/connector-manager")

var ConnectorManager = module.exports = function(sequelize, config) {
  this.sequelize = sequelize
  this.config    = config
}

Utils.inherit(ConnectorManager, AbstractConnectorManager)
