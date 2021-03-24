import React from 'react';
import { connect } from 'react-redux';

const SearchResults = ({ errorMessage, isFetching, items }) => {

        if (errorMessage) {
            return <div>Error: {errorMessage}</div>
        } 
        else if (isFetching) {
            return <div>Loading...</div>
        }
        else {
            return (
                <div>JSON RESPONSE: data has been loaded
                    <ul>
                        {items.map(item => (
                            <li key={item.idDrink}>{item.strDrink}</li>
                        ))}
                    </ul>
                </div>
                    
            );
        }
    }

const mapStateToProps = state => ({
    errorMessage: state.search.errorMessage,
    isFetching: state.search.isFetching,
    items: state.search.items
})

export default connect(mapStateToProps)(SearchResults);