const INITIAL_STATE = {
    primarySearchTerm: '',
    secondarySearchTerm: '',
    errorMessage: undefined,
    isFetching: false,
    primarySearchItems: [],
    secondarySearchItems: [],
    latestSearchTerm: '',
}

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_SEARCH_TERM':
            return {
                ...state,
                [action.payload1]: action.payload2
            };

        case 'UPDATE_LATEST_SEARCH_TERM':
            return {
                ...state,
                latestSearchTerm: action.payload
            }

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
                [action.payload1]: action.payload2,
            };

        case 'FETCH_ITEMS_FAILURE':
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };

        case 'CLEAR_SECONDARY_ITEMS':
            return {
                ...state,
                secondarySearchItems: []
            }

        case 'CLEAR_FORM':
            return {
                ...INITIAL_STATE
            }

        default:
            return state;

    }
}

export default searchReducer;