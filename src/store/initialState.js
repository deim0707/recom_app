const initialState = {
    activeQuestion: 1,
    showDisplay: 'welcome',
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
            question_text: 'Ваш проект предполагает изменения технического задания в процессе работы над ним??',
            answers: [
                {
                    numberOfAnswer: 1,
                    text: 'Да',
                    nameTechnology: 'spiral',
                    price: 1
                },
                {
                    numberOfAnswer: 2,
                    text: 'Скорее да, чем нет',
                    nameTechnology: 'incr',
                    price: 1
                },
                {
                    numberOfAnswer: 3,
                    text: 'Нет',
                    nameTechnology: 'kaskad',
                    price: 1
                }
            ]
        },
        {
            question_text: 'Какая файловая структура предпочтительнее?',
            answers: [
                {
                    numberOfAnswer: 1,
                    text: 'Файлы соответсуют блокам ',
                    nameTechnology: 'bem',
                    price: 1
                },
                {
                    numberOfAnswer: 2,
                    text: 'Стандартная для всех проектов ',
                    nameTechnology: 'smacss',
                    price: 1
                },
                {
                    numberOfAnswer: 3,
                    text: 'Не важно',
                    nameTechnology: 'bem',
                    price: 0
                }
            ]
        },

        {
            question_text: 'Ваш проект предполагает необходимость промежуточного продукта?',
            answers: [
                {
                    numberOfAnswer: 1,
                    text: 'Да',
                    nameTechnology: 'spiral',
                    price: 1
                },
                {
                    numberOfAnswer: 2,
                    text: 'Скорее нет, чем да',
                    nameTechnology: 'incr',
                    price: 1
                },
                {
                    numberOfAnswer: 3,
                    text: 'Нет',
                    nameTechnology: 'kaskad',
                    price: 1
                }
            ]
        },
        {
            question_text: 'Требования к проекту',
            answers: [
                {
                    numberOfAnswer: 1,
                    text: 'Формируются на начальном этапе ',
                    nameTechnology: 'kaskad',
                    price: 1
                },
                {
                    numberOfAnswer: 2,
                    text: 'Изменяются в процессе ',
                    nameTechnology: 'incr',
                    price: 1
                },
                {
                    numberOfAnswer: 3,
                    text: 'Формируются в процессе ',
                    nameTechnology: 'spiral',
                    price: 1
                }
            ]
        },
        {
            question_text: 'Проект имеет строгие ограничения по срок выполнения?',
            answers: [
                {
                    numberOfAnswer: 1,
                    text: 'Да',
                    nameTechnology: 'kaskad',
                    price: 1
                },
                {
                    numberOfAnswer: 2,
                    text: 'Скорее нет, чем да',
                    nameTechnology: 'incr',
                    price: 1
                },
                {
                    numberOfAnswer: 3,
                    text: 'Нет',
                    nameTechnology: 'spiral',
                    price: 1
                }
            ]
        },
       
        {
            question_text: 'На сколько использование применях технологий проработанно в команде? проект предполагает необходимость промежуточного продукта?',
            answers: [
                {
                    numberOfAnswer: 1,
                    text: 'Проект типовой ',
                    nameTechnology: 'kaskad',
                    price: 1
                },
                {
                    numberOfAnswer: 2,
                    text: 'Применяемые технологии ранее использовались, но не проработанны ',
                    nameTechnology: 'incr',
                    price: 1
                },
                {
                    numberOfAnswer: 3,
                    text: 'Применяемые технологии плохо проработанны ',
                    nameTechnology: 'spiral',
                    price: 1
                }
            ]
        },
        
    ],

    technology: {
        px: 0,
        em: 0,
        rem: 0,
        incr: 0,
        kaskad: 0,
        spiral: 0,
        bem: 0,
        smacss: 0
    }

};

export default initialState;