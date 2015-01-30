'use strict';

var fs = require('fs');

/**
 * Module dependencies.
 */
exports.getTranslation = function(req, res) {
  var filepath = __dirname + '/../data/' + 'translations.json';
  var file = fs.readFileSync(filepath);
  res.send(JSON.parse(file));
};

exports.getPlanning = function(req, res) {
	var filepath = __dirname + '/../data/' + 'planning.json';
	var file = fs.readFileSync(filepath);
	res.send(JSON.parse(file));
};
