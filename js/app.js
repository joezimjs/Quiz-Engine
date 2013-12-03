var QuizEngine = (function(){

	var Application = Marionette.Application.extend({
		startSubApp: function(name, args) {
			var newApp = this.module(name);

			if (this.currentApp === newApp) {
				return;
			}

			if (this.currentApp) {
				this.currentApp.stop();
			}

			this.currentApp = newApp;
			newApp.start(args);
		}
	});

	var App = new Application();

	App.addRegions({
		header: '#header',
		body: '#body',
		footer: '#footer'
	});

	return App;
})();