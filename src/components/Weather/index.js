import React, {useState} from "react";
import WeatherForecast from "../WeatherForecast";
import axios from "axios";
import './index.css';
import WeatherInfo from "../WeatherInfo";

const Weather = (props) => {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    const handleResponse = (response) => {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon, 
            date: new Date(response.data.dt * 1000),
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        search();
    }

    const handleCityChange =(e) => {
        setCity(e.target.value);
    }

    const search = () => {
        const apikey = "57821c3b75b60c68ecd1a8d0dd1aa8d3";
        let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
        axios.get(apiurl).then(handleResponse);
        return "Loading..";
    }

    if(weatherData.ready) {
        return(
            <div className='weather'>
                <form onSubmit={handleSubmit}>
                    <div className='row'>
                        <div className='col-9 search'>
                            <input 
                                type="search" 
                                placeholder="Enter a city"
                                className='form-control'
                                autoFocus="on"
                                onChange={handleCityChange}
                            />
                        </div>
                        <div className='col-3'>
                            <input type="submit" value="Search" className='btn btn-primary w-100'/>
                        </div>
                    </div>
                </form>
                <WeatherInfo data={weatherData} />
                <WeatherForecast coordinates={weatherData.coordinates}/>
            </div>
        )
    } else {
        search();
        return "Loading ...";
    }
}

export default Weather;
