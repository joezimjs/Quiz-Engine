QuizEngine.module('QuizCreator', function(QuizCreator) {
    // QuizCreator Module Must be Manually Started
    QuizCreator.startWithParent = false;

    // Router needs to be created immediately, regardless of whether or not the module is started
    QuizCreator.controller = new QuizCreator.Controller();
    QuizCreator.router = new QuizCreator.Router({controller: QuizCreator.controller});

    QuizCreator.addInitializer(function(){
        QuizCreator.controller.show();
    });

    QuizCreator.addFinalizer(function(){
        QuizCreator.controller.hide();
        QuizCreator.stopListening();
    });

});