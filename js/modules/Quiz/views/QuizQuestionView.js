QuizEngine.module('Quiz', function(Quiz) {
    
    Quiz.QuizQuestionView = Marionette.ItemView.extend({
        template: '#quiz-quizquestion',
        templateHelpers: function() {
            var options = this.options;

            return {
                questionNumber: function() {
                    return options.questionNumber;
                },
                isLastQuestion: function() {
                    return options.questionNumber === options.quizLength;
                }
            };
        },

        events: {
            'click [data-action=next]': 'submitAnswer'
        },

        submitAnswer: function(event) {
            var selectedAnswer = this.$(':radio:checked').val();

            if (typeof selectedAnswer === "undefined") {
                alert("Please select an answer");
            }
            else {
                this.model.set('chosenAnswer', parseInt(selectedAnswer, 10));
            }
            
            event.preventDefault();
        }
    });

});