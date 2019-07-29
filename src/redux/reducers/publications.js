const defaultState = [];

function reducer(state = defaultState, action) {
    switch(action.type) {
        case 'GET_PUBLICATIONS_SUCCESS':
            return action.payload;
        case 'ADD_PUBLICATION_SUCCESS':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}

export default reducer;