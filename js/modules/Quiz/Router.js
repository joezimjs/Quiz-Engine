QuizEngine.module('Quiz', function(Quiz) {
    
    Quiz.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "quiz/:cid": "showQuiz"
        }
    });

});