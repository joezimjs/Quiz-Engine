QuizEngine.module('Quiz', function(Quiz) {
    
    Quiz.QuizView = Marionette.Layout.extend({
        template: '#quiz-quiz',
        emptyTemplate: '#quiz-quiz404',

        getTemplate: function() {
            if (this.model) {
                return this.template;
            }
            else {
                return this.emptyTemplate;
            }
        },

        regions: {
            quizData: '#quiz-subview-container'
        }
    });

});