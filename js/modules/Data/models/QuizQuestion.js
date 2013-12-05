QuizEngine.module('Data', function(Data) {
	
	Data.QuizQuestion = Backbone.Model.extend({
		defaults: {
			question: null,
			chosenAnswer: null
		}
	});

});