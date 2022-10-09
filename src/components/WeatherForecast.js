import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import './WeatherForecast.css';
import axios from "axios";

const WeatherForecast = ( props ) => {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    const handleResponse = (response) => {
        setForecast(response.data.daily);
        setLoaded(true);
    }
    
    const load = () => {
        const APIkey = "57821c3b75b60c68ecd1a8d0dd1aa8d3";
        let long = props.coordinates.lon;
        let lati = props.coordinates.lat;
        let apiURL=`https://api.openweathermap.org/data/2.5/onecall?lat=${lati}&lon=${long}&appid=${APIkey}&units=metric`;

        axios.get(apiURL).then(handleResponse);
    }

    if(loaded) {
        return (
            <div className="WeatherForecast">
            <div className="row">
                {forecast.map(function (dailyForecast, index) {
                    if (index < 5) {
                    return (
                        <div className="col" key={index}>
                            <WeatherForecastDay data={dailyForecast} />
                        </div>
                    );
                } else {
                    return null;
                }
            })}
            </div>
        </div>
        );
    } else {
        load();
        return null;
    }
}

export default WeatherForecast;