QuizEngine.module('QuizList', function(QuizList) {

    QuizList.QuizView = Marionette.ItemView.extend({
        tagName: 'tr',
        template: '#quizlist-quiz',
        templateHelpers: function() {
            var model = this.model;

            return {
                score: function() {
                    return model.isInProgress() ? "In Progress" : model.getScore() + "%";
                },
                id: function() {
                    return model.cid;
                },
                viewAction: function() {
                    return model.isComplete() ? "Review" : "Continue";
                }
            };
        },

        events: {
            'click [data-action=delete]': 'deleteQuiz'
        },

        deleteQuiz: function() {
            this.model.destroy();
        }
    });

});