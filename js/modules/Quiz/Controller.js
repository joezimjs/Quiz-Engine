QuizEngine.module('Quiz', function(Quiz) {
    
    Quiz.Controller = Marionette.Controller.extend({
        // When the module starts, we need to make sure we have the correct view showing
        show: function() {
            // No Special Setup Needed: no-op
        },

        // When the module stops, we need to clean up our views
        hide: function() {
            QuizEngine.body.close();
            this.stopListening();
            this.data = this.view = this.subView = null;
        },

        // Show List of quizzes for the user
        showQuiz: function(cid) {
            this._ensureSubAppIsRunning();
            this.stopListening();

            this.data = QuizEngine.module('Data').quizzes.get(cid);
            this.view = new Quiz.QuizView({model:this.data});

            QuizEngine.body.show(this.view);
            if (this.data) {
                this.listenTo(this.data, 'all', this.refresh);
                this.showQuizData();
            }
        },

        showQuizData: function() {
            if (this.data.getStatus() === 'Complete') {
                // Show the Quiz Review
                this.subView = new Quiz.QuizReviewView({model: this.data});
            }
            else {
                // They're still taking the quiz. Show a question they can answer
                var question = this.data.getCurrentQuestion();
                this.subView = new Quiz.QuizQuestionView({
                    model: question, 
                    questionNumber: this.data.currentNumber,
                    quizLength: this.data.get('questions').length
                });
            }

            this.view.quizData.show(this.subView);
        },

        refresh: function() {
            this.view.render();
            this.showQuizData();
        },

        // Makes sure that this subapp is running so that we can perform everything we need to
        _ensureSubAppIsRunning: function() {
            QuizEngine.execute('subapp:start', 'Quiz');
        }
    });

});