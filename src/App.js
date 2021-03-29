import './App.scss';
import SearchForm from './components/search-form/search-form.component.jsx';
import SearchResults from './components/search-results/search-results.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Cocktail Lookup</h1>
      </header>
      <main>
        <SearchForm/>
        <SearchResults/>

           
      </main>
    </div>
  );
}

export default App;
