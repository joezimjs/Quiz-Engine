QuizEngine.module('Data', function(Data) {
	
	Data.Question = Backbone.Model.extend({
		defaults: {
			text: "",
			correctAnswer: 0,
			answers: []
		},
		initialize: function() {
			var answers = this.get('answers');

			if (answers) {
				this.set('answers', new Data.Answers(answers));
			}
		}
	});

});