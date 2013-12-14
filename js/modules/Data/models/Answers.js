QuizEngine.module('Data', function(Data) {
    
    Data.Answers = Backbone.Collection.extend({
        model: Data.Answer
    });

});