const defaultState = [];

function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'NEXTS_STOPS':
            return action.payload;
        default:
            return state;
    }
}

export default reducer;