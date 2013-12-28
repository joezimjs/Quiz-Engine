var init_question_data = [
    {
        name: "Tongue Twisters",
        questions: [
            {
                id: 1,
                text: "How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
                correctAnswer: 0,
                answers: [
                    {text: "A woodchuck could chuck lots of wood if a woodchuck could chuck wood."},
                    {text: "Is this really a question?"},
                    {text: "It depends on the woodchuck."}
                ]
            },
            {
                id: 2,
                text: "How many cans can a canner can if a canner can can cans?",
                correctAnswer: 2,
                answers: [
                    {text: "A canner can can lots of cans if a canner can can cans."},
                    {text: "Again? Really? Why are we doing this?"},
                    {text: "Irrelevant. There's no reason to can cans."}
                ]
            },
            {
                id: 3,
                text: "If Peter Piper picked a peck of pickled peppers, where's the peck of pickled peppers Peter Piper picked?",
                correctAnswer: 2,
                answers: [
                    {text: "By the other pecks of pickled peppers that Peter Piper picked."},
                    {text: "They went bad, so I threw them out"},
                    {text: "Oh, those were Peter's? I thought they were mine so I ate them."}
                ]
            },
            {
                id: 4,
                text: "This isn't a question? Wait, or is it?",
                correctAnswer: 0,
                answers: [
                    {text: "Well, technically it is."},
                    {text: "Is this a trick question?"},
                    {text: "Psh. No."}
                ]
            }
        ]
    },
    {
        name: "JavaScript Knowledge",
        questions: [
            {
                id: 5,
                text: "What's the most widely-used JavaScript library?",
                correctAnswer: 1,
                answers: [
                    {text: "Backbone.js"},
                    {text: "jQuery"},
                    {text: "MarionetteJS"}
                ]
            },
            {
                id: 6,
                text: "What does `typeof null` evaluate to?",
                correctAnswer: 0,
                answers: [
                    {text: "'object'"},
                    {text: "'string'"},
                    {text: "'null'"}
                ]
            },
            {
                id: 7,
                text: "Is the string '0' truthy or falsey",
                correctAnswer: 0,
                answers: [
                    {text: "truthy"},
                    {text: "falsey"}
                ]
            },
            {
                id: 8,
                text: "What is the keyword to access all of the arguments passed to a function?",
                correctAnswer: 2,
                answers: [
                    {text: "args"},
                    {text: "parameters"},
                    {text: "arguments"}
                ]
            }
        ]
    },
    {
        name: "MarionetteJS FTW",
        questions: [
            {
                id: 9,
                text: "Which of these lists contains all of the View classes for Marionette?",
                correctAnswer: 1,
                answers: [
                    {text: "ModelView, CollectionView, Layout"},
                    {text: "ItemView, CollectionView, CompositeView, Layout"},
                    {text: "View"}
                ]
            },
            {
                id: 10,
                text: "Who is the main author of Marionette?",
                correctAnswer: 0,
                answers: [
                    {text: "Derick Bailey"},
                    {text: "Addy Osmani"},
                    {text: "Paul Irish"}
                ]
            },
            {
                id: 11,
                text: "What is the main color in the Marionette logo?",
                correctAnswer: 0,
                answers: [
                    {text: "red"},
                    {text: "blue"},
                    {text: "green"}
                ]
            },
            {
                id: 12,
                text: "What is chapter 1 of <i>A Thorough Introduction to MarionetteJS</i> about?",
                correctAnswer: 2,
                answers: [
                    {text: "Regions"},
                    {text: "Modules"},
                    {text: "Application"}
                ]
            }
        ]
    }
];

var init_quiz_data = [
    {
        name: "Complete Quiz",
        questions: [
            {
                question: 1,
                chosenAnswer: 0
            },
            {
                question: 2,
                chosenAnswer: 0
            },
            {
                question: 3,
                chosenAnswer: 0
            },
            {
                question: 4,
                chosenAnswer: 0
            }
        ]
    },
    {
        name: "Incomplete Quiz",
        questions: [
            {
                question: 5,
                chosenAnswer: 0
            },
            {
                question: 6,
                chosenAnswer: 0
            },
            {
                question: 7,
                chosenAnswer: null
            },
            {
                question: 8,
                chosenAnswer: null
            }
        ]
    }
];

QuizEngine.start({
    data: {
        questions: init_question_data,
        quizzes: init_quiz_data
    }
});