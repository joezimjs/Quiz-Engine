QuizEngine.module('Data', function(Data) {
    
    Data.Questions = Backbone.Collection.extend({
        model: Data.Question
    });

});