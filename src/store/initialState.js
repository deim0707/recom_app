
const initialState = {
    activeQuestion: 1,
    showDisplay: 'welcome',

    questions: [
         {
            question_text: '1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, ad aliquid aperiam architecto consequatur corporis culpa cupiditate dignissimos distinctio dolor eos error exercitationem hic in ipsam iusto labore maxime minus neque nesciunt nisi nulla odio optio possimus quas, quibusdam quos recusandae rem soluta temporibus vel velit veniam voluptas voluptatem.',
            answer: [
                'bem1',
                'adaptive1',
                'struct1'
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