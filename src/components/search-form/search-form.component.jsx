import React from 'react';
import { connect } from 'react-redux';
import InputField from '../input-field/input-field.component';
import ResetFormBtn from '../reset-form-btn/reset-form-btn.component';

import {
    fetchItemsStartAsync,
    updateLatestSearchTerm
} from '../../redux/search/search.actions';

import './search-form.styles.scss';

class SearchForm extends React.Component {

    handleClick = (e) => {
        e.preventDefault();
        const {
            primarySearchTerm,
            secondarySearchTerm,
            fetchItemsStartAsync,
            updateLatestSearchTerm
        } = this.props;
        if(e.target.name === "refine") {
            fetchItemsStartAsync(secondarySearchTerm, "secondarySearchItems");
            updateLatestSearchTerm(secondarySearchTerm, "latestSecondaryTerm");
        }
        else if (e.target.name === "init-search") {
            fetchItemsStartAsync(primarySearchTerm, "primarySearchItems");
            updateLatestSearchTerm(primarySearchTerm, "latestSearchTerm");
        }
        else return <p>Error</p>
    }


    render() {
        const {
            filteredItems,
            primarySearchTerm,
            secondarySearchTerm,
            primarySearchItems,
        } = this.props;

        if(filteredItems.length > 0) {
            return <ResetFormBtn/>
        }
        else return (
            <div>
                <form role="search">
                {
                    // Display option to refine search 
                    // if initial search rendered results

                    (primarySearchItems.length > 0) ?
                        <div>
                            <label htmlFor="secondary-ingredient">Refine your list by adding a second ingredient</label>
                            <InputField 
                                id="secondary-ingredient"
                                name="secondarySearchTerm"
                                value={secondarySearchTerm}
                            />
                        </div>
                        :
                    // otherwise display the search field
                        <div>
                            <label htmlFor="initial-ingredient">Enter an ingredient to search for cocktails</label>
                            <InputField
                                id="initial-ingredient"
                                name="primarySearchTerm"
                                value={primarySearchTerm}
                            />
                        </div>
                }

                    <input
                        type="submit"
                        className="search-button button"
                        name={primarySearchItems.length > 0 ? "refine" : "init-search"}
                        value={
                            (primarySearchItems.length > 0 ? "Refine search" : "Search")
                        }
                        onClick={this.handleClick}/>
                </form>
                {
                    (primarySearchItems.length > 0) ? <ResetFormBtn/> : null
                }
            </div>
            )
    };
}; 

const mapStateToProps = state => ({
    filteredItems: state.search.filteredItems,
    primarySearchTerm: state.search.primarySearchTerm,
    secondarySearchTerm: state.search.secondarySearchTerm,
    primarySearchItems: state.search.primarySearchItems
})

const mapDispatchToProps = dispatch => ({
    fetchItemsStartAsync: (term, listToUpdate) => dispatch(fetchItemsStartAsync(term, listToUpdate)),
    updateLatestSearchTerm: (value, termToUpdate) => dispatch(updateLatestSearchTerm(value, termToUpdate))
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);