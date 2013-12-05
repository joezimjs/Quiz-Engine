QuizEngine.module('Data', function(Data) {
	
	Data.Answer = Backbone.Model.extend({
		defaults: {
			text: ""
		}
	});

});