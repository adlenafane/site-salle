'use strict';

module.exports = function(app) {
    var users = require('../../app/controllers/users');

	// Translations Routes
	var data = require('../../app/controllers/data');

    app.route('/api/translations')
        .get(data.getTranslations)
        .post(users.requiresLogin, data.postTranslations);
    app.route('/api/planning')
        .get(data.getPlanning)
        .post(users.requiresLogin, data.postPlanning);
};
