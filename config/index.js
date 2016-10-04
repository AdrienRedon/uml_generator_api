'use strict';
/**
 * @file Defines the app settings.
 *
 * Most of the configuration can be done using system environment variables.
 */

// Load environment variables from .env file
var dotenv = require('dotenv');
dotenv.load();

// nodeEnv can either be "development" or "production"
var nodeEnv = process.env.NODE_ENV || "development";
var port = process.env.PORT || 8000;

// Exports configuration
module.exports = {
  env: nodeEnv,
  port: port,
};