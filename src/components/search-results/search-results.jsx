import React from 'react';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json.drinks
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
            });
    }

    render() {

        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Try searching for an alcoholic ingredient, like "vodka" or "rum"</div>
        }
        else {
            return (
                <div>JSON RESPONSE: data has been loaded
                    <ul>
                        {items.map(item => (
                            <li key={item.idDrink}>{item.strDrink}</li>
                        ))}
                    </ul>
                </div>
                    
            );
        }
    };
}

export default SearchResults;