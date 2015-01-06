'use strict';

module.exports = {
    app: {
        title: 'Magicform FAR - Fontenay aux Roses',
        description: 'Website for an awesome sport place',
        keywords: 'Magid form, Sport, Gym, Fitness, Muscu, Cardio, LesMills'
    },
    port: process.env.PORT || 3000,
    templateEngine: 'swig',
    sessionSecret: 'MEAN',
    sessionCollection: 'sessions',
    assets: {
        lib: {
            css: [
                'public/dist/style.css'
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
                'public/lib/angular-json-editor/src/angular-json-editor.js'
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
