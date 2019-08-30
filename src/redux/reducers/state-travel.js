const defaultState = {};

function reducer(state = defaultState, action) {
    switch(action.type) {
        case 'STATE_TRAVEL':
            return action.payload;
        default:
            return state;
    }
}

export default reducer;