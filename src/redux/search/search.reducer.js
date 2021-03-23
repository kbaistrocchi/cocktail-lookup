const INITIAL_STATE = {
    searchTerm: '',
}

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_SEARCH_TERM':
            return {
                ...state,
                searchTerm: action.payload
            };

        default:
            return state;

    }
}

export default searchReducer;