const defaultState = 0;

function reducer(state = defaultState, action) {
    switch(action.type) {
        case 'COUNT_VIDEO':
            return state + 1;
        default:
            return state;
    }
}

export default reducer;