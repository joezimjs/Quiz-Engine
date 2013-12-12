QuizEngine.module('QuizList', function(QuizList) {
    
    QuizList.QuizView = Marionette.ItemView.extend({
        tagName: 'tr',
        template: '#quizlist-quiz',
        templateHelpers: function() {
            var model = this.model;
            
            return {
                score: function() {
                    var score = model.getScore();

                    return score === null ? "N/A" : score + "%";
                },
                id: function() {
                    return model.cid;
                },
                viewAction: function() {
                    return model.getStatus() === "Complete" ? "Review" : "Continue";
                }
            };
        },

        events: {
            'click [data-action=delete]': 'deleteQuiz'
        },

        deleteQuiz: function(event) {
            this.model.destroy();
        }
    });

});