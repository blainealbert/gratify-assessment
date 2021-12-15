import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarFilter from './components/CarFilter';

function App() {
  return (
    <div className="App">
      <Header/>
      <CarSearch />
      <CarFilter />
      <CarList/>
      <Footer/>
    </div>
  );
}

export default App;
