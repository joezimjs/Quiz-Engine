QuizEngine.module('QuizList', function(QuizList) {
	// QuizList Module Must be Manually Started
	QuizList.startWithParent = false;

	// Router needs to be created immediately, regardless of whether or not the module is started
	QuizList.controller = new QuizList.Controller();
	QuizList.router = new QuizList.Router({controller: QuizList.controller});

	QuizList.addInitializer(function(){
		QuizList.controller.show();
	});

	QuizList.addFinalizer(function(){
		QuizList.controller.hide();
		QuizList.stopListening();
	});

});