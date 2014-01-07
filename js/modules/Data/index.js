QuizEngine.module('Data', function(Data) {
    
    Data.addInitializer(function(options) {
        // Grab the data from the option passed in to the App's/Module's `start` method
        Data.questions = new Data.Categories((options && options.data && options.data.questions) || []);
        Data.quizzes = new Data.Quizzes((options && options.data && options.data.quizzes) || []);
    });

    Data.addFinalizer(function() {
        delete Data.questions;
        delete Data.quizzes;
    });

});