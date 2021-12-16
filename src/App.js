import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState } from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarFilter from './components/CarFilter';

function App() {

  const [cars, setCars] = useState([]);

  return (
    <div className="app">
      <Header/>
      <CarSearch setCars={setCars}/>
      <CarFilter />
      <CarList cars={cars}/>
      <Footer/>
    </div>
  );
}

export default App;
