var QuizEngine = (function(){

    var Application = Marionette.Application.extend({});

    var application = new Application();

    application.addRegions({
        header: '[data-region=header]', // Not used right now
        body: '[data-region=body]',
        footer: '[data-region=footer]' // Not used right now
    });

    application.on('initialize:after', function() {
        Backbone.history.start();
    });

    return application;
})();