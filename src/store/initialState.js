
const initialState = {
    activeQuestion: 1,
    showDisplay: 'questions',
    buttonsDisabled: {
        next: false,
        prew: false
    },

    questions: [
         {
            question_text: 'Как вы предпочитаете указывать размеры элеметов?',
            answer: [
                'Лучше указать фиксированно, а потом переопределить в медиа-запросе.',
                'Относительно шрифта заданного <html>.',
                'Относительно ширины блока.'
            ]
        },
         {
            question_text: '2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut beatae commodi doloribus explicabo optio quia ratione repellat tempore voluptate.',
            answer: [
                'bem2',
                'adaptive2',
                'struct2'
            ]
         },
        {
            question_text: '3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut beatae commodi doloribus explicabo optio quia ratione repellat tempore voluptate.',
            answer: [
                'bem3',
                'adaptive3',
                'struct3'
            ]
        }
    ],

    technology: {
        bem: 11,
        adaptive: 2,
        struct: 0
    }

};

export default initialState;