import React, { useCallback, useContext, useState } from 'react'
import { SearchContext } from '../context/SearchContext';


 export const RenderWeather = () => {

const [isShowDayWeather, setIsShowDayweather] = useState<boolean>(false)

const { 
  weatherData,
  } = useContext(SearchContext)!;

 
console.log(weatherData, 'DATA')


const onShowDayWeatherToggle = useCallback(() => {
  setIsShowDayweather(!isShowDayWeather);
}, [isShowDayWeather])



  if (!weatherData) return <></>

   
  return (
    <div className='wrapper'>


<div className='showDayWeather'>
  <button className='showDayWeather-button' onClick={() => onShowDayWeatherToggle()}>{isShowDayWeather ? "Hide" : "Show"} Forecast for 3 days</button>
</div>

<div className='location'>
<h2 className='location-name'>{weatherData.location.name} / {weatherData.location.region} / {weatherData.location.country}</h2> 
</div>
<div className='current-weather'>
  <div className='current-weather-data'>
    <h3 className='current-weather-h3'>Today</h3>
<h3 className='current-weather-h3'>{weatherData.current.last_updated}</h3>
</div>

<div className='weather-details'>

  <div className='weather-details-icon'>
  <img src={weatherData.current.condition.icon} className='current-icon'/>
  
  </div>

  <div className='weather-details-temp'>
<p className='temp'>+ {weatherData.current.temp_c} C&#xb0;</p>
<p>Feels like: + {weatherData.current.feelslike_c} C&#xb0;</p>

</div>

<div className='weather-details-wind'>
<p>Wind: <span className='weather-details-wind-span'>{weatherData.current.wind_kph}</span> mph</p>
<p>Gust: <span className='weather-details-wind-span'>{weatherData.current.gust_kph}</span> mph</p>
<p>Humidity: <span className='weather-details-wind-span'>{weatherData.current.humidity}</span> &#x25;</p>
<p>Pressure: <span className='weather-details-wind-span'>{weatherData.current.pressure_mb}</span> mmHg</p>
</div>
</div>
</div>



{isShowDayWeather &&  

// {weatherData.forecast.forecastday.map(({date}) => 
// <h4>{date}</h4>
// )}}

<div className='weatherFor3Days'>
  <div className='card'>
<h3 className='card-h3'>{weatherData.forecast.forecastday[0].date}</h3>
<img src={weatherData.forecast.forecastday[0].day.condition.icon}/>
<p className='card-temp'>+ {weatherData.forecast.forecastday[0].day.mintemp_c} C&#xb0; &#8210; + {weatherData.forecast.forecastday[0].day.maxtemp_c} C&#xb0;</p>
  <p>Wind: {weatherData.forecast.forecastday[0].day.maxwind_kph} mph</p>
  <p>Humidity: {weatherData.forecast.forecastday[0].day.avghumidity} &#x25;</p>
  <p>Chance of rain: {weatherData.forecast.forecastday[0].day.daily_chance_of_rain} &#x25;</p>
  <p>Sunrise: {weatherData.forecast.forecastday[0].astro.sunrise}</p>
  <p>Sunset: {weatherData.forecast.forecastday[0].astro.sunset}</p>
  </div>

  <div className='card'>
<h3 className='card-h3'>{weatherData.forecast.forecastday[1].date}</h3>
<img src={weatherData.forecast.forecastday[1].day.condition.icon}/>
<p  className='card-temp'>+ {weatherData.forecast.forecastday[1].day.mintemp_c} C&#xb0; &#8210; + {weatherData.forecast.forecastday[1].day.maxtemp_c} C&#xb0;</p>
  <p>Wind: {weatherData.forecast.forecastday[1].day.maxwind_kph} mph</p>
  <p>Humidity: {weatherData.forecast.forecastday[1].day.avghumidity} &#x25;</p>
  <p>Chance of rain: {weatherData.forecast.forecastday[1].day.daily_chance_of_rain} &#x25;</p>
  <p>Sunrise: {weatherData.forecast.forecastday[1].astro.sunrise}</p>
  <p>Sunset: {weatherData.forecast.forecastday[1].astro.sunset}</p>
  </div>

  <div className='card'>
<h3 className='card-h3'>{weatherData.forecast.forecastday[2].date}</h3>
<img src={weatherData.forecast.forecastday[2].day.condition.icon}/>
<p  className='card-temp'>+ {weatherData.forecast.forecastday[2].day.mintemp_c} C&#xb0; &#8210; + {weatherData.forecast.forecastday[2].day.maxtemp_c} C&#xb0;</p>

  <p>Wind: {weatherData.forecast.forecastday[2].day.maxwind_kph} mph</p>
  <p>Humidity: {weatherData.forecast.forecastday[2].day.avghumidity} &#x25;</p>
  <p>Chance of rain: {weatherData.forecast.forecastday[2].day.daily_chance_of_rain} &#x25;</p>
  <p>Sunrise: {weatherData.forecast.forecastday[2].astro.sunrise}</p>
  <p>Sunset: {weatherData.forecast.forecastday[2].astro.sunset}</p>
  </div>


</div>
  
 }

 <div className='footer'>
  <p>&#169; Copyright Weather App</p>
  </div>

    </div>
  )

}
