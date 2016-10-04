"use strict";

var restify = require("restify");
var config = require("../../../config/");

module.exports.get = function get(req, res, next) {
  res.send('All workflow');
  next();
};

module.exports.post = function get(req, res, next) {
  res.send('Create new workflow');
  next();
};