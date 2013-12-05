QuizEngine.module('Data', function(Data) {
	
	Data.Category = Backbone.Model.extend({
		defaults: {
			name: "",
			questions: null
		},

		initialize: function() {
			var questions = this.get('questions');

			if (questions) {
				this.set('questions', new Data.Questions(questions));
			}
		}
	});

});