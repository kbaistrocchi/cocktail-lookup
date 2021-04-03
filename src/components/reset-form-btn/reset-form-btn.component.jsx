import React from 'react';
import { connect } from 'react-redux';

import { clearForm } from '../../redux/search/search.actions';

import './reset-for-btn.styles.scss';
import '../search-form/search-form.styles.scss';


const ResetFormBtn = ({ clearForm }) => {

    return (
        <button
        className="new-search-button button"
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