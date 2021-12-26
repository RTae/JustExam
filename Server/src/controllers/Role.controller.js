const Role = require('../services/role.service');
const stdCode = require('./stdError');

module.exports = {

  async getRole(req, res) {
    try {
      const data = await Role.getAllRole();
      stdCode.querySuccess(data, res);
    } catch (e) {
      stdCode.Unexpected(e, res);
    }
  },

  addRole(req, res) {
    stdCode.Unexpected(stdCode.inCurrectPath(req), res);
  },

  updateRole(req, res) {
    stdCode.Unexpected(stdCode.inCurrectPath(req), res);
  },

  deleteRole(req, res) {
    stdCode.Unexpected(stdCode.inCurrectPath(req), res);
  },
};
