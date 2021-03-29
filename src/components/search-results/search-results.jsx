import React from 'react';
import { connect } from 'react-redux';
import RefinedSearchResults from '../refined-search/refined-search';
import SearchResultsHeader from '../search-results/header.component';

// Need to rework logic to not show results when user is typing
// Add a clear search button
// Change what is displayed

const SearchResults = ({
        errorMessage,
        isFetching,
        primarySearchItems,
        primarySearchTerm,
        secondarySearchItems,
        secondarySearchTerm
    }) => {

        if (errorMessage) {
            return <div>Error: {errorMessage}</div>
        } 
        else if (isFetching) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>
                    <SearchResultsHeader/>
                    {
                        (secondarySearchTerm.length > 1) ? 
                            <RefinedSearchResults/> :
                            <ul>
                                {primarySearchItems.map(item => (
                                    <li key={item.idDrink}>{item.strDrink}</li>
                                ))}
                            </ul>
                    }
                    
                    <hr/>
                </div>

                    
            );
        }
    }

const mapStateToProps = state => ({
    errorMessage: state.search.errorMessage,
    isFetching: state.search.isFetching,
    primarySearchItems: state.search.primarySearchItems,
    primarySearchTerm: state.search.primarySearchTerm,
    secondarySearchItems: state.search.secondarySearchItems,
    secondarySearchTerm: state.search.secondarySearchTerm
})

export default connect(mapStateToProps)(SearchResults);