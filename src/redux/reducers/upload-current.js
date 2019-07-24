const defaultState = {};

function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'UPLOAD_CURRENT':
            return action.payload;
        default:
            return state;
    }
}

export default reducer;