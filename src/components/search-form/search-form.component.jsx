import React from 'react';
import { connect } from 'react-redux';
import InputField from '../input-field/input-field.component';

import { fetchItemsStartAsync } from '../../redux/search/search.actions';

class SearchForm extends React.Component {

    handleClick = (e) => {
        e.preventDefault();
        const { searchTerm, fetchItemsStartAsync } = this.props;
        console.log("user searched for: ", searchTerm); 
        fetchItemsStartAsync(searchTerm);
    };


    render() {
        const { isFetching, searchTerm } = this.props;


        return(
            <form role="search">
                <label htmlFor="city-search-input">What area would you like to search?</label>
                <InputField 
                    id="city-search-input"
                />
                <input type="submit" value="Search" onClick={this.handleClick}/>
            </form>
                
            )

        
    };
}; 

const mapStateToProps = state => ({
    searchTerm: state.search.searchTerm,
    isFetching: state.search.isFetching
})

const mapDispatchToProps = dispatch => ({
    fetchItemsStartAsync: (term) => dispatch(fetchItemsStartAsync(term))
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);