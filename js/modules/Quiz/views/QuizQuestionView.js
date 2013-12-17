QuizEngine.module('Quiz', function(Quiz) {
    
    Quiz.QuizQuestionView = Marionette.ItemView.extend({
        template: '#quiz-quizquestion',
        templateHelpers: function() {
            var options = this.options;

            return {
                questionNumber: function() {
                    return options.questionNumber;
                },
                nextButtonText: function() {
                    if (options.questionNumber === options.quizLength) {
                        return "Submit Quiz";
                    }
                    else {
                        return "Next Question";
                    }
                }
            };
        },

        events: {
            'click [data-action=next]': 'submitAnswer'
        },

        submitAnswer: function(event) {
            var selectedAnswer = this.$(':radio:checked').val();
            this.model.set('chosenAnswer', parseInt(selectedAnswer), 10);
            
            event.preventDefault();
        }
    });

});