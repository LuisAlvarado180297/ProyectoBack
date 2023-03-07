'use strict';

const logs = require('express').Router();
const prefix = 'logs';

const controller = require('../controllers/main.controller');

logs.get(`${prefix}/`, controller.all);
logs.post(`${prefix}/`, controller.create);
logs.get(`${prefix}/:id`, controller.info);
logs.put(`${prefix}/:id`, controller.update);
logs.delete(`${prefix}/:id`, controller.delete);

module.exports = logs;