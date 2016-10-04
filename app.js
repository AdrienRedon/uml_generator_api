'use strict';
/**
 * @file Configure the application.
 */

var restify = require('restify');
var fs = require('fs');

var config = require('./config');
var logError = require('./config/services.js').logError;

var lib = require('./lib/');
var handlers = lib.handlers;
var middlewares = lib.middlewares;

var server = restify.createServer();

server.use(middlewares.logger);
server.use(restify.queryParser());
server.use(restify.gzipResponse());

require("./config/routes.js")(server, handlers);

// Log errors
server.on('uncaughtException', function(req, res, route, err) {
  logError(err, req, {
    uncaughtRestifyException: true,
    statusCode: req.statusCode,
  });

  if(!res._headerSent) {
    res.send(new restify.InternalServerError(err, err.message || 'unexpected error'));
    return true;
  }

  return false;
});

module.exports = server;
