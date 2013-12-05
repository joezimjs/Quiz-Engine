QuizEngine.module('Data', function(Data) {
	
	Data.Quiz = Backbone.Model.extend({
		defaults: {
			name: "",
			questions: null
		},

		initialize: function() {
			var questions = this.get('questions');

			if (questions) {
				this.set('questions', new Data.QuizQuestions(questions));
			}

			this.currentQuestionNumber = 0;
		},

		getCurrentQuestion: function() {
			return this.get('questions').at(this.currentQuestionNumber - 1);
		},

		// Determine if the quiz is in progress or complete
		getStatus: function() {
			// Any questions where 'chosenAnswer' is null are unanswered, so the quiz would be "In Progress"
			return this.get('questions').where({chosenAnswer: null}).length > 0 ? "In Progress" : "Complete";
		},

		nextQuestion: function() {
			this.currentQuestionNumber++;
			return this.getCurrentQuestion();
		}

	});

});