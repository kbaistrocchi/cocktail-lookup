import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm } from '../../redux/search/search.actions';


const InputField = ({ id, searchTerm, setSearchTerm }) => (

    <input 
        type="text" 
        id={id}
        value={searchTerm}
        onChange={(e) => {
            setSearchTerm(e.target.value);
        }}
    />
)

const mapStateToProps = state => ({
    searchTerm: state.search.searchTerm,
})

const mapDispatchToProps = dispatch => ({
    setSearchTerm: term => dispatch(setSearchTerm(term)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InputField);