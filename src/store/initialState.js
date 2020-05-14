const initialState = {
    activeQuestion: 1,
    showDisplay: 'questions',
    buttonsDisabled: {
        next: true,
        prew: false
    },

    questions: [
        {
            question_text: 'Как вы предпочитаете указывать размеры элеметов?',
            answers: [
                {
                    numberOfAnswer: 1,
                    text: 'Лучше указать фиксированно, а потом переопределить в медиа-запросе.',
                    nameTechnology: 'px',
                    price: 1
                },
                {
                    numberOfAnswer: 2,
                    text: 'Относительно шрифта заданного <html>.',
                    nameTechnology: 'em',
                    price: 1
                },
                {
                    numberOfAnswer: 3,
                    text: 'Относительно ширины блока.',
                    nameTechnology: 'rem',
                    price: 1
                }
            ]
        },

        {
            question_text: 'Как вы предпочитаете указывать размеры элеметов?',
            answers: [
                {
                    numberOfAnswer: 1,
                    text: 'b1',
                    nameTechnology: 'px',
                    price: 1
                },
                {
                    numberOfAnswer: 2,
                    text: 'b2',
                    nameTechnology: 'em',
                    price: 1
                },
                {
                    numberOfAnswer: 3,
                    text: 'b3',
                    nameTechnology: 'rem',
                    price: 1
                }
            ]
        },

        {
            question_text: 'Как вы предпочитаете указывать размеры элеметов?',
            answers: [
                {
                    numberOfAnswer: 1,
                    text: 'c1',
                    nameTechnology: 'px',
                    price: 1
                },
                {
                    numberOfAnswer: 2,
                    text: 'c2',
                    nameTechnology: 'em',
                    price: 1
                },
                {
                    numberOfAnswer: 3,
                    text: 'c3',
                    nameTechnology: 'rem',
                    price: 1
                }
            ]
        },
    ],

    technology: {
        px: 1,
        em: 2,
        rem: 3
    }

};

export default initialState;