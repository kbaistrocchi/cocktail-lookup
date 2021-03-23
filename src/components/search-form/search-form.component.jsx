import React from 'react';
import InputField from '../input-field/input-field.component';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <form role="search">
                <label htmlFor="city-search-input">What area would you like to search?</label>
                <InputField 
                    id="city-search-input"
                />
                <input type="submit" value="Search"/>
            </form>
        )
    };
}; 



export default SearchForm;