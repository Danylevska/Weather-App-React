import React, { Dispatch, FC, PropsWithChildren, createContext, useEffect, useState } from 'react'
import { options } from '../apiData';
import { useFetchData } from '../hooks/useFetchData';
import { WeatherInterface } from '../types';



interface SearchContextInterface {

    inputValue: string,
    setInputValue: Dispatch<string>,
    searchResult: () => Promise<WeatherInterface>,
    onInput: (e: HTMLInputEvent) => void,
    weatherData: WeatherInterface | null,
    setWeatherData: Dispatch<WeatherInterface | null>,
 
}

export type HTMLInputEvent ={target: {value: string, name: string}}

export const SearchContext = createContext<SearchContextInterface | null>(null);

export const SearchContextProvider:FC<PropsWithChildren> = ({children}) => {

    

   const[inputValue, setInputValue] = useState<string>("")
   const[weatherData, setWeatherData] = useState<WeatherInterface | null> (null)
   const[isLoading, setIsLoading] = useState<boolean>(false) 

  
   

    const onInput = ((e: HTMLInputEvent ) =>  setInputValue(e.target.value) ) 
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${inputValue}&days=3` 

    
   

    const searchResult = 

    useFetchData<any>(
       url,
        options, false
         ) as () => Promise<WeatherInterface>
         
  

  return (
    
    <SearchContext.Provider value={{
      
        inputValue,
        setInputValue,
        searchResult,
        onInput,
        weatherData,
        setWeatherData,
        
        }}>{children}
   
        </SearchContext.Provider>
  )
}

