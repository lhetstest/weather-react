import React, {useState} from "react";
import axios from "axios";
import FormattedData from "../FormattedData";
import './index.css';

const Weather = () => {
    const [weatherData, setWeatherData] = useState({ready: false})
    const handleResponse = (response) => {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png", 
            date: new Date(response.data.dt * 1000),
        });
    }

    if(weatherData.ready) {
        return(
            <div className='weather'>
                <form>
                    <div className='row'>
                        <div className='col-9 search'>
                            <input 
                            type="search" 
                            placeholder="Enter a city"
                            className='form-control'
                            autoFocus="on"
                            />
                        </div>
                        <div className='col-3'>
                            <input type="submit" value="Search" className='btn btn-primary w-100'/>
                        </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>
                        <FormattedData date={weatherData.date} />
                    </li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix">
                            <img 
                                src={weatherData.iconUrl}
                                alt="cloudy" className="float-start"/>
                            <span className="temperature">
                                {Math.round(weatherData.temperature)}
                            </span>
                            <span className="unit">℃</span>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Precipitation: 15%</li>
                            <li>Wind: {weatherData.wind} km/h</li>
                            <li>Humidity: {weatherData.humidity}%</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        const apikey = "bd71345693d3c57b7742e27f41d36a4d";
        let  cityname = "Kyiv";
        let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apikey}&units=metric`
        axios.get(apiurl).then(handleResponse);
        return "Loading..";
    }
    
    
}

export default Weather;
