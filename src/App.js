import './App.scss';
import SearchForm from './components/search-form/search-form.component.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Restaurant Search</h1>
      </header>
      <main>
        <SearchForm/>
           
      </main>
    </div>
  );
}

export default App;
