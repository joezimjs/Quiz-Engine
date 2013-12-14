QuizEngine.module('Data', function(Data) {
    
    Data.QuizQuestions = Backbone.Collection.extend({
        model: Data.QuizQuestion
    });

});