import initialState from './initialState';
import update from 'immutability-helper';


let reducer = (state=initialState, action) => {
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
            let value= action.payload.value;
            return update(state, {
                technology: {
                    [nameTechnology]: {
                        $set: value
                    }
                }
            })
        }

        case 'NEXT_ACTIVE_QUESTION': {
            let nameTechnology = ++initialState.activeQuestion;
            console.log(`Номер вопроса: ${nameTechnology}`);

            //срабатывает при достижении конца массива вопросов
            if (initialState.activeQuestion> initialState.questions.length) {
                console.log('aaaaaaaaaaaaaaaa')
            }

            return update(state, {
                activeQuestion: {
                    $set: nameTechnology
                }
            })
        }

        case 'PREW_ACTIVE_QUESTION': {
            let nameTechnology;
            //проверка на то, чтобы номера вопросов не ушли в минус
            if (initialState.activeQuestion<=1) {
                nameTechnology=1;
                alert("Вы уже на первом вопросе :)")
            }
            if (initialState.activeQuestion>1) {
                nameTechnology= --initialState.activeQuestion;
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

        default: {
            return state;
        }
    }
};

export  default reducer;