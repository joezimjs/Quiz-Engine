QuizEngine.Router = Marionette.AppRouter.extend({
		routes: {
			"": "redirectToMain"
		},

		redirectToMain: function() {
			Backbone.history.navigate('list', { trigger: true, replace: true});
		}
	});