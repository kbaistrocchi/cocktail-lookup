export const setSearchTerm = (name, value) => ({
    type: 'SET_SEARCH_TERM',
    payload1: name,
    payload2: value
});

export const updateLatestSearchTerm = value => ({
    type: 'UPDATE_LATEST_SEARCH_TERM',
    payload: value
})

export const fetchItemsStart = () => ({
    type: 'FETCH_ITEMS_START'
})

export const fetchItemsSuccess = (itemsMap, listToUpdate) => ({
    type: 'FETCH_ITEMS_SUCCESS',
    payload1: listToUpdate,
    payload2: itemsMap
})

export const fetchItemsFailure = errorMessage => ({
    type: 'FETCH_ITEMS_FAILURE',
    payload: errorMessage
})

export const fetchItemsStartAsync = (term, listToUpdate) => {
    console.log("listToUpdate", listToUpdate);
    return dispatch => {
        dispatch(fetchItemsStart());
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${term}`)
            .then(res => res.json())
            .then((result) => {
                const itemsMap = result.drinks;
                dispatch(fetchItemsSuccess(itemsMap, listToUpdate));
            }).catch(error => dispatch(fetchItemsFailure(error.message)));
    }
}

export const clearSecondaryItems = () => ({
    type: 'CLEAR_SECONDARY_ITEMS'
})

export const clearForm = () => ({
    type: 'CLEAR_FORM'
})