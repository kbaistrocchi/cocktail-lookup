import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from '../../redux/search/search.actions';


const InputField = ({ id, name, value, setSearchTerm }) => (

    <input 
        type="text"
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