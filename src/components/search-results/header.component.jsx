import React from 'react';
import { connect } from 'react-redux';

const SearchResultsHeader = ({
    latestSearchTerm,
    primarySearchItems,
    primarySearchTerm,
    secondarySearchItems,
    secondarySearchTerm
}) => {
    const count = primarySearchItems.length;
    if (count > 0) {
        return <p>We found {count} cocktails containing {latestSearchTerm}</p>;
    }
    else if (latestSearchTerm.length < 1) {
        return <p>Try searching for something, for example "gin"</p>
    }
    else return <p>Sorry, we couldn't find any cocktails containing "{latestSearchTerm}"</p>;

}

const mapStateToProps = state => ({
    errorMessage: state.search.errorMessage,
    latestSearchTerm: state.search.latestSearchTerm,
    primarySearchItems: state.search.primarySearchItems,
    primarySearchTerm: state.search.primarySearchTerm,
    secondarySearchItems: state.search.secondarySearchItems,
    secondarySearchTerm: state.search.secondarySearchTerm
})

export default connect(mapStateToProps)(SearchResultsHeader);