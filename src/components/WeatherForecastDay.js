import React from "react";
import WeatherIcon from "./WeatherIcon";

const WeatherForecastDay = (props) => {
    const maxTemperature=() => {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}°`;
    }

    const minTemperature = () => {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}°`;
    }

    const day = () => {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        return days[day];
    }

    return (
        <div>
        <div className="WeatherForecast-day">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={36} />
        <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">
            {maxTemperature()}
            </span>
            <span className="WeatherForecast-temperature-min">
            {minTemperature()}
            </span>
        </div>
        </div>
    );
}

export default WeatherForecastDay;