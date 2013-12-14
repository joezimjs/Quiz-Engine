QuizEngine.module('Quiz', function(Quiz) {
    // Quiz Module Must be Manually Started
    Quiz.startWithParent = false;

    // Router needs to be created immediately, regardless of whether or not the module is started
    Quiz.controller = new Quiz.Controller();
    Quiz.router = new Quiz.Router({controller: Quiz.controller});

    Quiz.addInitializer(function(){
        Quiz.controller.show();
    });

    Quiz.addFinalizer(function(){
        Quiz.controller.hide();
        Quiz.stopListening();
    });

});