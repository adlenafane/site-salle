'use strict';

var description = 'Magicform Fontenay aux roses, salle de sport et de fitness pour 29,90€ par mois.' +
        'Notre équipe et nos coachs diplômés sont à votre disposition tous les jours (7/7) pour vous aider à atteindre vos objectifs.' +
        'Remise en forme, perte de poids, musculation, rééducation, nous vous aideront à y arriver !';

module.exports = {
    app: {
        title: 'Magicform FAR - Fontenay aux Roses',
        description: description,
        keywords: 'Magic form, Sport, Gym, Fitness, Muscu, Cardio, LesMills'
    },
    port: process.env.PORT || 3000,
    templateEngine: 'swig',
    sessionSecret: 'MEAN',
    sessionCollection: 'sessions',
    assets: {
        lib: {
            css: [
                'public/dist/style.css',
                'public/lib/textAngular/src/textAngular.css'
            ],
            js: [
                'public/lib/jquery/dist/jquery.js',
                'public/lib/angular/angular.js',
                'public/lib/angular-resource/angular-resource.js',
                'public/lib/angular-cookies/angular-cookies.js',
                'public/lib/angular-animate/angular-animate.js',
                'public/lib/angular-touch/angular-touch.js',
                'public/lib/angular-sanitize/angular-sanitize.js',
                'public/lib/angular-ui-router/release/angular-ui-router.js',
                'public/lib/angular-ui-utils/ui-utils.js',
                'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'public/lib/angular-translate/angular-translate.js',
                'public/lib/angular-translate-loader-url/angular-translate-loader-url.js',
                'public/lib/lodash/dist/lodash.js',
                'public/lib/angular-google-maps/dist/angular-google-maps.js',
                'public/lib/json-editor/dist/jsoneditor.js',
                'public/lib/angular-json-editor/src/angular-json-editor.js',
                'public/lib/angulartics/src/angulartics.js',
                'public/lib/angulartics/src/angulartics-ga.js',
                'public/lib/textAngular/dist/textAngular-rangy.min.js',
                'public/lib/textAngular/dist/textAngular-sanitize.min.js',
                'public/lib/textAngular/dist/textAngular.min.js'
            ]
        },
        css: [
            'public/css/*.css'
        ],
        js: [
            'public/config.js',
            'public/application.js',
            'public/modules/*/*.js',
            'public/modules/*/*[!tests]*/*.js'
        ],
        tests: [
            'public/lib/angular-mocks/angular-mocks.js',
            'public/modules/*/tests/*.js'
        ]
    }
};
