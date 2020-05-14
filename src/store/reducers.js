import initialState from './initialState';
import update from 'immutability-helper';


let reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_DISPLAY': {
            return update(state, {
                showDisplay: {
                    $set: action.payload.nameDisplay
                }
            })
        }

        case 'CHANGE_TECHNOLOGY': {
            let nameTechnology = action.payload.technology;
            let value = action.payload.value;
            console.log(`CHANGE_TECHNOLOGY на технологию ${nameTechnology} со значением ${value}`);

            return update(state, {
                technology: {
                    [nameTechnology]: {
                        $set: value
                    }
                }
            })
        }
//тут новый способ задачи стейта
        case 'NEXT_ACTIVE_QUESTION': {
            let numberQuestion = ++initialState.activeQuestion;
            if (numberQuestion >= state.questions.length) {
                numberQuestion = state.questions.length;
            }
            // console.log(`Номер вопроса: ${initialState.activeQuestion}`);
            //срабатывает при достижении конца массива вопросов
            if (initialState.activeQuestion > initialState.questions.length) {
                console.log('aaaaaaaaaaaaaaaa')
            }
            return Object.assign({}, state, {
                activeQuestion: numberQuestion,
            })
        }

        case 'PREW_ACTIVE_QUESTION': {
            let nameTechnology;
            //проверка на то, чтобы номера вопросов не ушли в минус
            if (initialState.activeQuestion <= 1) {
                nameTechnology = 1;
                alert("Вы уже на первом вопросе. И нашли пасхалку :)");
            }
            if (initialState.activeQuestion > 1) {
                nameTechnology = --initialState.activeQuestion;
            }
            console.log(`Номер вопроса: ${nameTechnology}`);

            return update(state, {
                activeQuestion: {
                    $set: nameTechnology
                }
            })
        }

        case 'CHANGE_ACTIVE_QUESTION': {
            return update(state, {
                activeQuestion: {
                    $set: action.payload.value
                }
            })
        }

        case 'CHANGE_BTN_DISABLED': {
            let status = action.payload.status;
            let typeBtn = action.payload.typeBtn;
            // console.log(`CHANGE_BTN_DISABLED сработал. Результат: ${initialState.buttonsDisabled.next}`);

            return Object.assign(
                {},
                state,
                {
                    buttonsDisabled: Object.assign(
                        {},
                        state.buttonsDisabled,
                        {[typeBtn]: status}
                    )
                })
        }

        default: {
            return state;
        }
    }
};

export default reducer;