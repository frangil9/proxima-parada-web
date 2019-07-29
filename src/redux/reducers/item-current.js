const defaultState = {};

function reducer(state = defaultState, action) {
    switch(action.type) {
        case 'GET_ITEM_CURRENT_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}

export default reducer;