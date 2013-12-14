QuizEngine.module('Quiz', function(Quiz) {
    
    Quiz.Controller = Marionette.Controller.extend({
        // When the module starts, we need to make sure we have the correct view showing
        show: function() {
            // No Special Setup Needed: no-op
        },

        // When the module stops, we need to clean up our views
        hide: function() {
            QuizEngine.body.close();
            this.data = this.view = null;
        },

        // Show List of quizzes for the user
        showQuiz: function(cid) {
            this._ensureSubAppIsRunning();

            this.data = QuizEngine.module('Data').quizzes.get(cid);

            // Show quiz review if the quiz is completed
            if (this.data && this.data.getStatus() === "Complete") {
                this.view = new Quiz.QuizReviewView({model:this.data});
            }
            // Show the quiz itself, from the beginning, or where they left off
            else if (this.data) {
                this.view = new Quiz.QuizView({model:this.data});
            }
            // Let the user know the quiz doesn't exist
            else {
                this.view = new Quiz.Quiz404View();
            }

            QuizEngine.body.show(this.view);
        },

        // Makes sure that this subapp is running so that we can perform everything we need to
        _ensureSubAppIsRunning: function() {
            QuizEngine.execute('subapp:start', 'Quiz');
        }
    });

});