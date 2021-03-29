export const setSearchTerm = (name, value) => ({
    type: 'SET_SEARCH_TERM',
    payload1: name,
    payload2: value
});

export const updateLatestSearchTerm = (value, termToUpdate) => ({
    type: 'UPDATE_LATEST_SEARCH_TERM',
    payload1: value,
    payload2: termToUpdate
});

export const fetchItemsStart = () => ({
    type: 'FETCH_ITEMS_START'
});

export const fetchItemsSuccess = (itemsMap, listToUpdate) => ({
    type: 'FETCH_ITEMS_SUCCESS',
    payload1: listToUpdate,
    payload2: itemsMap
});

export const fetchItemsFailure = errorMessage => ({
    type: 'FETCH_ITEMS_FAILURE',
    payload: errorMessage
});

export const updateFilteredItems = () => ({
    type: 'UPDATE_FILTERED_ITEMS'
});

export const fetchItemsStartAsync = (term, listToUpdate) => {
    return dispatch => {
        dispatch(fetchItemsStart());
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${term}`)
            .then(res => res.json())
            .then((result) => {
                const itemsMap = result.drinks;
                dispatch(fetchItemsSuccess(itemsMap, listToUpdate));
            })
            .then(() => dispatch(updateFilteredItems()))
            .catch(error => dispatch(fetchItemsFailure(error.message)));
    }
};

export const clearForm = () => ({
    type: 'CLEAR_FORM'
});