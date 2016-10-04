"use strict";
/**
 * @file Defines the routes available on the server
 *
 * Will define all availables exposed HTTP paths, and their methods (GET / POST / ...).
 */
var lib = require('../lib/');
var handlers = lib.handlers;

// Routes client requests to handlers
module.exports = function(server) {
  server.get('/workflow', handlers.workflow.index.get);
  server.post('/workflow', handlers.workflow.index.post);
  server.get('/workflow/:id', handlers.workflow.id.index.get);
  server.del('/workflow/:id', handlers.workflow.id.index.del);
};