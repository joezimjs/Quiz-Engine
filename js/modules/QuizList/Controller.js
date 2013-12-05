QuizEngine.module('QuizList', function(QuizList) {
	
	QuizList.Controller = Marionette.Controller.extend({
		// When the module starts, we need to make sure we have the correct view showing
		show: function() {
			// TODO
		},

		// When the module stops, we need to clean up our views
		hide: function() {
			// TODO
		},

		// Show List of quizzes for the user
		showList: function() {
			this._ensureSubAppIsRunning();
			// TODO
		},

		// Makes sure that this subapp is running so that we can perform everything we need to
		_ensureSubAppIsRunning: function() {
			QuizEngine.execute('subapp:start', 'QuizList');
		}
	});

});