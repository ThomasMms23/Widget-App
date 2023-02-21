import React,{ useState } from 'react';
import  fetchWeather  from './api/fetchWeather';
import './App.css';

function App() {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState([]);

    
    const search = async (e) => {
      //that is calling via an await function the query that is passed
        if(e.key === 'Enter'){
          const data = await fetchWeather(query);
          setWeather(data);
          setQuery('');
        }
    }
    
    return (
      <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Enter the city name in here"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="card-city">
          <h2 className="city-name">
            <span>{weather.name}</span>
            <sup className="city-sup">{weather.sys.country}</sup>
          </h2>
          <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
          <div className="city-temp">
            {Math.round(weather.main.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <p>{weather.weather[0].description}</p>
          </div>
          <div className="more-info">
            <div>Humidity : {weather.main.humidity} %</div>
            <div>Wind Speed : {weather.wind.speed} k/h</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App