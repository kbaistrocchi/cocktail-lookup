import React from 'react';
import { connect } from 'react-redux';
import InputField from '../input-field/input-field.component';
import ResetFormBtn from '../reset-form-btn/reset-form-btn.component';

import {
    fetchItemsStartAsync,
    clearSecondaryItems,
    updateLatestSearchTerm
} from '../../redux/search/search.actions';

class SearchForm extends React.Component {

    handleClick = (e) => {
        e.preventDefault();
        const {
            primarySearchTerm,
            secondarySearchTerm,
            fetchItemsStartAsync,
            updateLatestSearchTerm
        } = this.props;
        console.log("user searched for: ", primarySearchTerm); 
        // Search only 1 ingredient
        updateLatestSearchTerm(primarySearchTerm);
        if(secondarySearchTerm.length < 1) {
            fetchItemsStartAsync(primarySearchTerm, "primarySearchItems");
            clearSecondaryItems();
            
        }
        else {
            fetchItemsStartAsync(primarySearchTerm, "primarySearchItems");
            fetchItemsStartAsync(secondarySearchTerm, "secondarySearchItems");
        }
    };


    render() {
        const {
            isFetching,
            latestSearchTerm,
            primarySearchTerm,
            secondarySearchTerm,
            primarySearchItems,
            secondarySearchItems
        } = this.props;

        


        return(
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
    latestSearchTerm: state.search.latestSearchTerm,
    primarySearchTerm: state.search.primarySearchTerm,
    secondarySearchTerm: state.search.secondarySearchTerm,
    isFetching: state.search.isFetching,
    primarySearchItems: state.search.primarySearchItems,
    secondarySearchItems: state.search.secondarySearchItems,
})

const mapDispatchToProps = dispatch => ({
    fetchItemsStartAsync: (term, listToUpdate) => dispatch(fetchItemsStartAsync(term, listToUpdate)),
    updateLatestSearchTerm: (value) => dispatch(updateLatestSearchTerm(value)),
    clearSecondaryItems: () => dispatch(clearSecondaryItems())
})


export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);