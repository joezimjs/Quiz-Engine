QuizEngine.module('Data', function(Data) {
    
    Data.Answer = Backbone.Model.extend({
        defaults: {
            text: ""
        },

        // Custom toJSON
        toJSON: function() {
            var data = Backbone.Model.prototype.toJSON.call(this);

            return data;
        }
    });

});