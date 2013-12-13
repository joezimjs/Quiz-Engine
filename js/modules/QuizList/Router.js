QuizEngine.module('QuizList', function(QuizList) {
	
	QuizList.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"list": "showList"
		}
	});

});