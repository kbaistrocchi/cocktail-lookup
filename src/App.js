import './App.scss';
import SearchForm from './components/search-form/search-form.component.jsx';
import SearchResults from './components/search-results/search-results.jsx';

import martini from './assets/martini.svg';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="gold">Cocktail Lookup</h1>
        <img className="header-img" src={martini} alt="martini glass with olive"/>
      </header>
      <main>
        <SearchForm/>
        <SearchResults/>

           
      </main>
    </div>
  );
}

export default App;
