import React, { useState, useEffect } from 'react';
import Header from './Header'
import './App.css';
import SearchAppBar from './menubr';

function App() {
  const [countries, setCountries] = useState([]);
  
  useEffect(() => {
    // Fetch the countries data from the API
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
        setCountries(data);
      })
      .catch(error => {
        console.error('Error fetching the countries data:', error);
      });
  }, []);
  <div></div>

  return (
    <div className="App">
      <Header/>

<SearchAppBar/>
      <h1>Countries List</h1>

      <div className="countries-list">
        {countries.map(country => (
          <div key={country.cca3} className="country-card">
            <img
              src={country.flags.png}
              alt={`Flag of ${country.name.common}`}
              className="country-flag"
            />
            <h2 className="country-name">{country.name.common}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
