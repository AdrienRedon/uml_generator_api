"use strict";

var fs = require("fs");
var restify = require("restify");

var config = require('../../../../config');


module.exports.get = function get(req, res, next) {
  res.send('get 1 workflow');
  next();
};


module.exports.del = function del(req, res, next) {
  res.send('del 1 workflow');
  next();
};