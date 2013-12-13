QuizEngine.module('Data', function(Data) {
	
	Data.Quizzes = Backbone.Collection.extend({
		model: Data.Quiz,

		createQuiz: function(name, questions) {
			var quiz = {
				name: name,
				questions: []
			}

			_.each(questions, function(question) {
				quiz.questions.push({
					question: question.get('id')
				});
			});

			return this.add(quiz);
		}
	});

});