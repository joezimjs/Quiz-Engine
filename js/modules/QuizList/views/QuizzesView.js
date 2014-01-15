QuizEngine.module('QuizList', function(QuizList) {
    
    QuizList.QuizzesView = Marionette.CompositeView.extend({
        template: '#quizlist-quizzes',
        itemView: QuizList.QuizView,
        itemViewContainer: '[data-item-view-container]',
        
        emptyView: QuizList.NoQuizzesView
    });

});