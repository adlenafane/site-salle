'use strict';

var fs = require('fs');

/**
 * Module dependencies.
 */
exports.getTranslations = function(req, res) {
  var filepath = __dirname + '/../data/' + 'translations.json';
  var file = fs.readFileSync(filepath);
  res.send(JSON.parse(file));
};
exports.postTranslations = function(req, res) {
  var translations = JSON.stringify(req.body, null, 4);
  if (!translations) { res.status(400).end(); }
  var filepath = __dirname + '/../data/' + 'translations.json';
  var file = fs.writeFileSync(filepath, translations);
  res.status(200).end();
};

exports.getPlanning = function(req, res) {
    var filepath = __dirname + '/../data/' + 'planning.json';
    var file = fs.readFileSync(filepath);
    res.send(JSON.parse(file));
};
exports.postPlanning = function(req, res) {
  var planning = JSON.stringify(req.body.data, null, 4);
  if (!planning) { res.status(400).end(); }
  var filepath = __dirname + '/../data/' + 'planning.json';
  var file = fs.writeFileSync(filepath, planning);
  res.status(200).end();
};
