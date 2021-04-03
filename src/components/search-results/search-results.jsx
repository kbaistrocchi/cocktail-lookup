import React from 'react';
import { connect } from 'react-redux';

import SearchResultsHeader from '../results-header/results-header.component';
import './search-results.styles.scss';

const SearchResults = ({
        filteredItems,
        isFetching,
        latestSecondaryTerm,
        primarySearchItems
    }) => {

        if (isFetching) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div className="search-results-block">
                    <SearchResultsHeader/>
                    {
                        (latestSecondaryTerm.length > 0) ? 
                        <ul className="search-results">
                            {filteredItems.map(item => (
                                <li key={item.idDrink}>{item.strDrink}</li>
                            ))}
                        </ul> :
                            <ul className="search-results">
                                {primarySearchItems.map(item => (
                                    <li key={item.idDrink}>{item.strDrink}</li>
                                ))}
                            </ul>
                    }
                </div>

                    
            );
        }
    }

const mapStateToProps = state => ({
    isFetching: state.search.isFetching,
    filteredItems: state.search.filteredItems,
    latestSecondaryTerm: state.search.latestSecondaryTerm,
    primarySearchItems: state.search.primarySearchItems
})

export default connect(mapStateToProps)(SearchResults);