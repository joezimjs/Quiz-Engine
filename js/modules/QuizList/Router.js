QuizEngine.module('QuizList', function(QuizList) {
	
	QuizList.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"list": "showList"
		},
		
		routes: {
			"": "redirectToMain"
		},

		redirectToMain: function() {
			Backbone.history.navigate('list', { trigger: true, replace: true});
		}
	});

});