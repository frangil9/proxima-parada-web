const defaultState = {};

function reducer(state = defaultState, action) {
    switch(action.type) {
        case 'CURRENT_STOP':
            return action.payload;
        default:
            return state;
    }
}

export default reducer;