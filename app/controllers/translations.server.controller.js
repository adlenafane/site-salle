'use strict';

var fs = require('fs');

/**
 * Module dependencies.
 */
exports.getTranslation = function(req, res) {
	var filepath = __dirname + '/../data/' + 'translations.json';
	var translation = fs.readFileSync(filepath);
	res.send(JSON.parse(translation));
};
