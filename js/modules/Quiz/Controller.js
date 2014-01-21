QuizEngine.module('Quiz', function(Quiz) {
    
    Quiz.Controller = Marionette.Controller.extend({
        // When the module starts, we need to make sure we have the correct view showing
        show: function() {
            // No Special Setup Needed: no-op
        },

        // When the module stops, we need to clean up
        hide: function() {
            QuizEngine.body.close();
            this.stopListening();
            this.data = this.view = null;
        },

        showQuiz: function(cid) {
            this._ensureSubAppIsRunning();
            this.stopListening();

            this.data = QuizEngine.module('Data').quizzes.get(cid);
            this.view = new Quiz.QuizView({model:this.data});

            QuizEngine.body.show(this.view);
            if (this.data) {
                if (this.data.isComplete()) {
                    this.showReview();
                }
                else {
                    this.listenTo(this.data, 'question:answered', this.showQuestion);
                    this.listenTo(this.data, 'completed', this.showReview);
                    this.showQuestion();
                }
            }
        },

        showReview: function() {
            var subView = new Quiz.QuizReviewView({model: this.data});

            this.renderSubView(subView);
        },

        showQuestion: function() {
            var question = this.data.getCurrentQuestion();

            if (question) {
                var subView = new Quiz.QuizQuestionView({
                    model: question, 
                    questionNumber: this.data.getCurrentPosition(),
                    quizLength: this.data.get('questions').length
                });

                this.renderSubView(subView);
            }
        },

        renderSubView: function(subView) {
            this.view.quizData.show(subView);
        },

        // Makes sure that this subapp is running so that we can perform everything we need to
        _ensureSubAppIsRunning: function() {
            QuizEngine.execute('subapp:start', 'Quiz');
        }
    });

});