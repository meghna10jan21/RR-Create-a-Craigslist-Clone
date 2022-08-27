// Import data
import './src/App.js'
// Import components
import './App.css';
import Searchbar from './components/Searchbar.js';
import 

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        {Searchbar}
        {Directory}
      </div>
    </div>
  );
}

export default App;
