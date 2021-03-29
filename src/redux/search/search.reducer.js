const INITIAL_STATE = {
    primarySearchTerm: '',
    secondarySearchTerm: '',
    errorMessage: undefined,
    isFetching: false,
    primarySearchItems: [],
    secondarySearchItems: [],
    latestSearchTerm: '',
    latestSecondaryTerm: '',
    filteredItems: []
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
                [action.payload2]: action.payload1
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
            };

        case 'UPDATE_FILTERED_ITEMS':
            const filteredDrinks = [];
            // create array of only drink ids from second list
            const secondaryIds = [];
            state.secondarySearchItems.forEach(drinkObj => {
                secondaryIds.push(drinkObj.idDrink);
            });
            // if ids from second list are in the first list, then add drink to new refined list
            state.primarySearchItems.forEach(drinkObj => {
                if(secondaryIds.includes(drinkObj.idDrink)) {
                    filteredDrinks.push(drinkObj);
                }
            });
            return {
                ...state,
                filteredItems: filteredDrinks
            };

        case 'CLEAR_FORM':
            return {
                ...INITIAL_STATE
            }

        default:
            return state;

    }
}

export default searchReducer;