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

        nextQuestion: function() {
            this.currentQuestionNumber++;
            return this.getCurrentQuestion();
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

            return parseInt(this.getCorrect() / this.get('questions').length * 100, 10);
        },

        getCorrect: function() {
            var self = this;
            var correct = this.get('questions').reduce(function(total, question){
                if (question.isCorrect()) {
                    return ++total;
                }

                return total;
            }, 0);

            return correct;
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