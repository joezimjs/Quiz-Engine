QuizEngine.module('Data', function(Data) {
	
	Data.Quizzes = Backbone.Collection.extend({
		model: Data.Quiz
	});

});