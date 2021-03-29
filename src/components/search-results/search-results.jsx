import React from 'react';
import { connect } from 'react-redux';
import SearchResultsHeader from '../results-header/results-header.component';


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
                <div>
                    <SearchResultsHeader/>
                    {
                        (latestSecondaryTerm.length > 0) ? 
                        <ul>
                            {filteredItems.map(item => (
                                <li key={item.idDrink}>{item.strDrink}</li>
                            ))}
                        </ul> :
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
    isFetching: state.search.isFetching,
    filteredItems: state.search.filteredItems,
    latestSecondaryTerm: state.search.latestSecondaryTerm,
    primarySearchItems: state.search.primarySearchItems
})

export default connect(mapStateToProps)(SearchResults);