import React from 'react';
import { connect } from 'react-redux';

// Takes in two arrays of items and return a single array with the common items only.

const RefinedSearchResults = ({ primarySearchItems, secondarySearchItems }) => {

    const filteredDrinks = [];
    // create arrays of only drink ids from second list
    const secondaryIds = [];
    secondarySearchItems.forEach(drinkObj => {
        secondaryIds.push(drinkObj.idDrink);
    });
    // if ids from second list are in the first list, then add drink to new refined list
    primarySearchItems.forEach(drinkObj => {
        if(secondaryIds.includes(drinkObj.idDrink)) {
            filteredDrinks.push(drinkObj);
        }
    });
    console.log("FILTERED",filteredDrinks);

    if (primarySearchItems.length > 0 && secondarySearchItems.length > 0 && filteredDrinks.length < 1) {
        return (
            <div>
                Sorry, looks like we don't have any drinks containing both
                of those ingredients. Try something else.
            </div>
        )
    }
    else {
        return (
            <div>
                <ul>
                    {filteredDrinks.map(item => (
                        <li key={item.idDrink}>{item.strDrink}</li>
                    ))}
                </ul>
            </div>
    
        )
    }
}

const mapStateToProps = state => ({
    primarySearchItems: state.search.primarySearchItems,
    secondarySearchItems: state.search.secondarySearchItems,
})

export default connect(mapStateToProps)(RefinedSearchResults);