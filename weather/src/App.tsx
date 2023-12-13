import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchWeather } from './components/SearchWeather';
import { RenderWeather } from './components/RenderWeather';
import { SearchContextProvider } from './context/SearchContext';


function App() {
  return (
    <div className="App">
      <SearchContextProvider>
        <div className='app-header'>
    <img className='App-logo' src="day-and-night.png" width="100px" height="100px" alt=""/>
      <h1>Weather App</h1>
   </div>
      <SearchWeather/>
      <RenderWeather/>
     
      </SearchContextProvider>
    </div>
  );
}

export default App;
