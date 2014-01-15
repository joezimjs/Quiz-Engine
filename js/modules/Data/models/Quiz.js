QuizEngine.module('Data', function(Data) {
    
    Data.Quiz = Backbone.Model.extend({
        defaults: {
            name: "",
            questions: null
        },

        initialize: function() {
            this.set('questions', new Data.QuizQuestions(this.get('questions')));

            this.listenTo(this.get('questions'), 'all', this._forwardEvents);
        },

        getCurrentQuestion: function() {
            // Get the first question that hasn't been answered
            return this.get('questions').find(function(question) {
                if (question.get('chosenAnswer') === null) {
                    return true;
                }
            });
        },

        getCurrentPosition: function() {
            // Get the number for the first question that hasn't been answered
            return this.get('questions').reduce(function(memo, question, index) {                
                if (question.get('chosenAnswer') === null && memo === 0) {
                    return index + 1;
                }

                return memo;
            }, 0);
        },

        // Determine if the quiz is in progress or complete
        getStatus: function() {
            // Any questions where 'chosenAnswer' is null are unanswered, so the quiz would be "In Progress"
            return this.get('questions').where({chosenAnswer: null}).length > 0 ? "In Progress" : "Complete";
        },

        getScore: function() {
            if (this.getStatus() === "In Progress") {
                return null;
            }

            return Math.round(this.getCorrect() / this.get('questions').length * 100);
        },

        getCorrect: function() {
            return this.get('questions').filter(function(question) {
                return question.isCorrect();
            }).length;
        },

        // Custom toJSON to also JSONify 'questions'
        toJSON: function() {
            var data = Backbone.Model.prototype.toJSON.call(this);
            if (data.questions && data.questions.toJSON) {
                data.questions = data.questions.toJSON();
            }

            return data;
        },

        _forwardEvents: function() {
            var args = Array.prototype.slice.call(arguments);
            args[0] = 'questions:' + args[0];
            this.trigger.apply(this, args);
        }

    });

});