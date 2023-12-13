import React, { FC, useContext, useEffect, useState } from 'react'
import { options} from '../apiData';
import { WeatherInterface } from '../types';

import { RenderWeather } from './RenderWeather';
import { SearchContext } from '../context/SearchContext';


  export const SearchWeather= () => {

  

  const { 
   inputValue,
   setInputValue,
   searchResult,
   setWeatherData,
   } =
    useContext(SearchContext)!

   

console.log(inputValue, "Input")

const onButton = () => {
 inputValue && searchResult().then(data => {
  if(data.error) return alert("Please, enter correct city name")
  setWeatherData(data)
  })
  setInputValue("")
}

  return (
    <div className='search'> 

<input  className='search-input'
        type="text"
        placeholder="Enter a city"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
<button className='search-button' onClick={() => onButton()}>Search</button>



    </div>
  )
}
