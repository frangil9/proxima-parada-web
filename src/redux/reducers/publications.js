const defaultState = [];

function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'GET_PUBLICATIONS_SUCCESS':
            return action.payload;
        case 'UPDATE_PUBLICATION_SUCCESS':
            return state.map(publication => {
                if (publication._id === action.payload._id) {
                    publication.title = action.payload.title;
                    publication.description = action.payload.description;
                    return publication;
                } else
                    return publication;
            });
        case 'DELETE_PUBLICATION_SUCCESS':
            return state.filter(publication => {
                return publication._id !== action.payload._id
            });
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