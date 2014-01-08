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
        },

        getQuestionsByCategories: function(categories) {
            var self = this;

            if (_.isArray(categories)) {
                var questions = [];

                _.each(categories, function(categoryId){
                    questions.push(self.get(categoryId).getQuestions());
                });

                return _.flatten(questions);
            }

            if (_.isNumber(categories) || _.isString(categories)) {
                return this.get(categories).getQuestions();
            }

            return null;
        }
    });

});