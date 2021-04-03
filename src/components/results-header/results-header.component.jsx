import React from 'react';
import { connect } from 'react-redux';

import './results-header.styles.scss';

const SearchResultsHeader = ({
    errorMessage,
    filteredItems,
    latestSearchTerm,
    latestSecondaryTerm,
    primarySearchItems,
}) => {
    let count = primarySearchItems.length;
    // There are drinks with both items
    if (filteredItems.length > 0) {
        return (
            <h2>
                We found {filteredItems.length} {" "}
                {filteredItems.length > 1 ? "drinks" : "drink"} containing both {" "}
                {latestSearchTerm} and {latestSecondaryTerm}!
            </h2>
        )
    }
    // No drinks with both items
    else if (latestSecondaryTerm.length > 0) {
        return (
            <h2>
                Sorry, we can't find any drinks that contain both {" "}
                {latestSearchTerm} and {latestSecondaryTerm}. Try
                a different ingredient to refine your search. Maybe "lime"
                 or "salt"?
            </h2>
        )
    }
    // Only 1 item searched and contains drinks
    else if (count > 0) {
        return <h2>We found {count} {" "} {count > 1 ? "cocktails" : "cocktail"} containing {latestSearchTerm}</h2>;
    }
    // No drinks with first item
    else if (latestSearchTerm.length > 0) {
        return <h2>Sorry, we couldn't find any cocktails containing "{latestSearchTerm}"</h2>
    }
    // No search term entered
    else if (latestSearchTerm.length < 1) {
        return <h2>Try searching for something, for example "gin"</h2>
    }
    else return <h2>Error: {errorMessage}</h2>;

}

const mapStateToProps = state => ({
    errorMessage: state.search.errorMessage,
    filteredItems: state.search.filteredItems,
    latestSearchTerm: state.search.latestSearchTerm,
    latestSecondaryTerm: state.search.latestSecondaryTerm,
    primarySearchItems: state.search.primarySearchItems,
})

export default connect(mapStateToProps)(SearchResultsHeader);