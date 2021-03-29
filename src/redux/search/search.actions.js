export const setSearchTerm = (name, value) => ({
    type: 'SET_SEARCH_TERM',
    payload1: name,
    payload2: value
});

export const fetchItemsStart = () => ({
    type: 'FETCH_ITEMS_START'
})

export const fetchItemsSuccess = itemsMap => ({
    type: 'FETCH_ITEMS_SUCCESS',
    payload: itemsMap
})

export const fetchItemsFailure = errorMessage => ({
    type: 'FETCH_ITEMS_FAILURE',
    payload: errorMessage
})

export const fetchItemsStartAsync = (term) => {
    console.log("term", term);
    const apiRoot = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="
    const filteredApi = apiRoot.concat(term);
    console.log("api", filteredApi);
    return dispatch => {
        dispatch(fetchItemsStart());
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${term}`)
            .then(res => res.json())
            .then((result) => {
                const itemsMap = result.drinks;
                dispatch(fetchItemsSuccess(itemsMap));
            }).catch(error => dispatch(fetchItemsFailure(error.message)));
    }
}