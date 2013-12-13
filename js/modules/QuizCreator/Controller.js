QuizEngine.module('QuizCreator', function(QuizCreator) {
	
	QuizCreator.Controller = Marionette.Controller.extend({
		// When the module starts, we need to make sure we have the correct view showing
		show: function() {
			// There is only one view we can show, so always just use showForm
			this.showForm();
		},

		// When the module stops, we need to clean up our views
		hide: function() {
			QuizEngine.body.close();
		},

		// Show List of quizzes for the user
		showForm: function() {
			this._ensureSubAppIsRunning();

			this.data = QuizEngine.module('Data').questions;
			this.view = new QuizCreator.FormView({collection:this.data});

			QuizEngine.body.show(this.view);
		},

		// Makes sure that this subapp is running so that we can perform everything we need to
		_ensureSubAppIsRunning: function() {
			QuizEngine.execute('subapp:start', 'QuizCreator');
		}
	});

});