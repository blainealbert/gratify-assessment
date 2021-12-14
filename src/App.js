import './App.css';

import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarFilter from './components/CarFilter';

function App() {
  return (
    <div className="App">
      <CarSearch />
      <CarFilter />
      <CarList/>
    </div>
  );
}

export default App;
