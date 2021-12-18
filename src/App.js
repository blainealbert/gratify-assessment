import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import CarList from './components/CarList';
import CarSearch from './components/CarSearch';
import CarFilter from './components/CarFilter';
import CarSort from './components/CarSort';

function App() {

  const [cars, setCars] = useState([]);
  const [carFilter, setCarFilter] = useState("");
  const [notification, setNotification] = useState("Please search for a car make");
  const [currentMake, setCurrentMake] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
  }, [carFilter]);

  return (
    <div className="app">
      <Header/>
      <div className="container">
        <div className='row'>
          <div className="col-12 col-lg-5">
            <CarSearch setCars={setCars} setCurrentMake={setCurrentMake} setNotification={setNotification}/>
            <CarFilter setCarFilter={setCarFilter} cars={cars}/>
            <CarSort setSortBy={setSortBy} cars={cars}/>
          </div>
          <div className="col-12 col-lg-7">
            <CarList cars={cars} currentMake={currentMake} notification={notification} carFilter={carFilter} sortBy={sortBy}/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
