import React from 'react';
import { connect } from 'react-redux';

import { clearForm } from '../../redux/search/search.actions';


const ResetFormBtn = ({ clearForm }) => {

    return (
        <button
            onClick={ ()=> clearForm()}
        >
            Start New Search
        </button>
    )
}

const mapDispatchToProps = dispatch => ({
    clearForm: () => dispatch(clearForm())
})

export default connect(null, mapDispatchToProps)(ResetFormBtn);