#!/bin/env node
"use strict";


var config = require("../config");
var server = require('../app');

server.listen(config.port, function() {
  console.log("server listening on port " + config.port);
});