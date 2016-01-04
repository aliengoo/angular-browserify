"use strict";

let HttpStatus = require("http-status");

module.exports = res => {
  return error => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    error
  });
};