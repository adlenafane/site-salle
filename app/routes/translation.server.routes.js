'use strict';

module.exports = function(app) {
	// Translations Routes
	var data = require('../../app/controllers/data');

  app.route('/api/translation').get(data.getTranslation);
	app.route('/api/planning').get(data.getPlanning);
};
