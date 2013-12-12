QuizEngine.module('QuizList', function(QuizList) {
	
	QuizList.Controller = Marionette.Controller.extend({
		// When the module starts, we need to make sure we have the correct view showing
		show: function() {
			// There is only one view we can show, so always just use showList
			this.showList();
		},

		// When the module stops, we need to clean up our views
		hide: function() {
			QuizEngine.body.close();
		},

		// Show List of quizzes for the user
		showList: function() {
			this._ensureSubAppIsRunning();

			this.quizData = QuizEngine.module('Data').quizzes;
			this.mainView = new QuizList.QuizzesView({collection:this.quizData});

			QuizEngine.body.show(this.mainView);
		},

		// Makes sure that this subapp is running so that we can perform everything we need to
		_ensureSubAppIsRunning: function() {
			QuizEngine.execute('subapp:start', 'QuizList');
		}
	});

});