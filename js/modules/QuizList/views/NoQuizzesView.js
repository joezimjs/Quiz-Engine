QuizEngine.module('QuizList', function(QuizList) {
    
    QuizList.NoQuizzesView = Marionette.ItemView.extend({
        tagName: 'tr',
        template: '#quizlist-noquizzes'
    });

});