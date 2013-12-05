QuizEngine.module('Data', function(Data) {
	
	Data.addInitializer(function(options) {
		// We do not have any initial quiz data, but if we do have it in the future, this is already ready
		Data.quizzes = new Data.Quizzes((options && options.data && options.data.quizzes) || []);
	});

	Data.addFinalizer(function() {
		delete Data.quizzes;
	});

});