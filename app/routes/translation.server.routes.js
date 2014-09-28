'use strict';

module.exports = function(app) {
	// Translations Routes
	var translations = require('../../app/controllers/translations');

	app.route('/api/translation').get(translations.getTranslation);
};
