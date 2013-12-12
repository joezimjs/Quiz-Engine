QuizEngine.module('Data', function(Data) {
    
    Data.QuizQuestion = Backbone.Model.extend({
        defaults: {
            question: null,
            chosenAnswer: null
        },

        initialize: function() {
            var q = this.get('question');

            if (_.isNumber(q)) {
                this.set('question', QuizEngine.module('Data').questions.getQuestion(q));
            }
        },

        // Custom toJSON to also JSONify 'question'
        toJSON: function() {
            var data = Backbone.Model.prototype.toJSON.call(this);
            if (data.question) {
                data.question = data.question.toJSON();
            }

            return data;
        }
    });

});