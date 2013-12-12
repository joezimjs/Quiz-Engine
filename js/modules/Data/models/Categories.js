QuizEngine.module('Data', function(Data) {
    
    Data.Categories = Backbone.Collection.extend({
        model: Data.Category,

        getQuestion: function(id) {
            var question = null;

            this.each(function(category) {
                var tempQuestion = category.getQuestion(id);

                if (tempQuestion) {
                    question = tempQuestion;
                    return false;
                }
            });

            return question;
        }
    });

});