QuizEngine.module('Data', function(Data) {
    
    Data.Quizzes = Backbone.Collection.extend({
        model: Data.Quiz,

        createQuiz: function(name, questions) {
            var quiz = {
                name: name,
                questions: questions
            };

            return this.add(quiz);
        }
    });

});