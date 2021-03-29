import React from 'react';
import { connect } from 'react-redux';

const SearchResultsHeader = ({
    errorMessage
    latestSearchTerm,
    latestSecondaryTerm,
    primarySearchItems,
    secondarySearchItems,
    secondarySearchTerm
}) => {
    let count1 = primarySearchItems.length;
    // There are drinks with both items
    if (latestSecondaryTerm.length > 0) {
        return <p></p>
    }
    // No drinks with both items
    // Drinks with only first item
    
    if (count1 > 0) {
        return <p>We found {count} cocktails containing {latestSearchTerm}</p>;
    }
    // No drinks with first item
    else if (latestSearchTerm.length < 1) {
        return <p>Try searching for something, for example "gin"</p>
    }
    // No search term entered
    else return <p>Sorry, we couldn't find any cocktails containing "{latestSearchTerm}"</p>;

}

const mapStateToProps = state => ({
    errorMessage: state.search.errorMessage,
    latestSearchTerm: state.search.latestSearchTerm,
    latestSecondaryTerm: state.search.latestSecondaryTerm,
    primarySearchItems: state.search.primarySearchItems,
    secondarySearchItems: state.search.secondarySearchItems,
    secondarySearchTerm: state.search.secondarySearchTerm
})

export default connect(mapStateToProps)(SearchResultsHeader);