import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from '../../redux/search/search.actions';

import './input-field.styles.scss';


const InputField = ({ id, name, value, setSearchTerm }) => (

    <input 
        type="search"
        className="ingredient-search-field"
        name={name} 
        id={id}
        value={value}
        onChange={(e) => {
            const { name, value } = e.target;
            setSearchTerm(name, value);
        }}
    />
)

const mapDispatchToProps = dispatch => ({
    setSearchTerm: (name, value) => dispatch(setSearchTerm(name, value)),
});

export default connect(null, mapDispatchToProps)(InputField);