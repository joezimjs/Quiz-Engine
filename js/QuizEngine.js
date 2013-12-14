var QuizEngine = (function(){

    var Application = Marionette.Application.extend({});

    var application = new Application();

    application.addRegions({
        header: '#header', // Nothing uses this, but an extension could.
        body: '#body',
        footer: '#footer' // Nothing uses this, but an extension could.
    });

    application.on('initialize:after', function() {
        Backbone.history.start();
    });

    return application;
})();