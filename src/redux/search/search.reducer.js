const INITIAL_STATE = {
    primarySearchTerm: '',
    secondarySearchTerm: '',
    errorMessage: undefined,
    isFetching: false,
    items: [],
}

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_SEARCH_TERM':
            return {
                ...state,
                [action.payload1]: action.payload2
            };

        case 'FETCH_ITEMS_START':
            return {
                ...state,
                isFetching: true,
                errorMessage: undefined
            };

        case 'FETCH_ITEMS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                items: action.payload,
            };

        case 'FETCH_ITEMS_FAILURE':
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };

        default:
            return state;

    }
}

export default searchReducer;