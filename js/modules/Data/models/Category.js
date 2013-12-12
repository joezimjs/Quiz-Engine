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
		},

		getQuestion: function(id) {
			return this.get('questions').get(id);
		},

        // Custom toJSON to also JSONify 'questions'
        toJSON: function() {
            var data = Backbone.Model.prototype.toJSON.call(this);
            if (data.questions) {
                data.questions = data.questions.toJSON();
            }

            return data;
        }
	});

});