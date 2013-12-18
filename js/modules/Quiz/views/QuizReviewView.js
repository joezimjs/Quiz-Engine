QuizEngine.module('Quiz', function(Quiz) {
    
    Quiz.QuizReviewView = Marionette.ItemView.extend({
        template: '#quiz-quizreview',

        templateHelpers: function() {
            var quiz = this.model;

            return {
                getCorrect: function() {
                    return quiz.getCorrect();
                },
                getTotal: function() {
                    return quiz.get('questions').length;
                },
                getScore: function() {
                    return quiz.getScore() + "%";
                },
                isCorrect: function(index) {
                    var question = quiz.get('questions').at(index);

                    return question.isCorrect();
                }
            };
        }
    });

});