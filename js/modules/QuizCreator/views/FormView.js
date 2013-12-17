QuizEngine.module('QuizCreator', function(QuizCreator) {
    
    QuizCreator.FormView = Marionette.ItemView.extend({
        template: '#quizcreator-form',
        templateHelpers: function() {
            return {};
        },

        events: {
            'click [data-action=start]': 'createQuiz'
        },

        createQuiz: function() {
            var categories = [],
                questions = [],
                quizName = this.$el.find('#quizName').val(),
                quiz;

            if (!quizName) {
                alert("Please enter a quiz name");
                return;
            }

            this.$el.find('input[type=checkbox]:checked').each(function() {
                categories.push(parseInt(this.value, 10));
            });

            if (categories.length < 1) {
                alert("Please select at least one category");
                return;
            }

            _.each(categories, function(categoryIndex){
                questions.push(QuizEngine.module('Data').questions.at(categoryIndex).getQuestions());
            });

            quiz = QuizEngine.module('Data').quizzes.createQuiz(quizName, _.flatten(questions));
            Backbone.history.navigate('quiz/' + quiz.cid, {trigger:true});
        }
    });

});