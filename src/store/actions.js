//change showed display
export let changeShowDisplay = (nameDisplay) => ({
    type: 'CHANGE_DISPLAY',
    payload: {
        nameDisplay
    }
});
//change technology
export let changeTechnology = (technology, value) => ({
    type: 'CHANGE_TECHNOLOGY',
    payload: {
        technology,
        value
    }
});
//change Active Question
export let nextActiveQuestion = () => ({
    type: 'NEXT_ACTIVE_QUESTION',
});

export let prewActiveQuestion = () => ({
    type: 'PREW_ACTIVE_QUESTION',
});
export let changeActiveQuestion = (value) => ({
    type: 'CHANGE_ACTIVE_QUESTION',
    payload: {
        value
    }
});
export let changeBtnDisabled = (typeBtn, status) => ({
    type: 'CHANGE_BTN_DISABLED',
    payload: {
        typeBtn,
        status
    }
});
