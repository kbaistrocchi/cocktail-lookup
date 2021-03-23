import React from 'react';

const SearchForm = () => (
    <form role="search">
          <label htmlFor="city-search-input">What area would you like to search?</label>
          <input type="text" id="city-search-input"/>
          <input type="submit" value="Search"/>
    </form> 
)

export default SearchForm;