QuizEngine.module('QuizCreator', function(QuizCreator) {
    
    QuizCreator.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "new-quiz": "showForm"
        }
    });

});