import React, { useState }from "react";

const WeatherTemperature = (props) => {
    const [unit, setUnit] = useState("celsius");
    
    const convertToFahr = (e) => {
        e.preventDefault();
        setUnit("fahrenheit");
    }

    const convertToCels = (e) =>{
        e.preventDefault();
        setUnit("celsius");
    }
    const fahrenheit = () => {
        return (props.celsius*9/5)+32;
    }
    if (unit === 'celsius') {
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(props.celsius)}</span>
                <span className="unit">
                        °C |
                    <a href="/" onClick={convertToFahr}>
                        ℉
                    </a>
                </span>
            </div>
        );
    } else {
        return (
            <div className="WeatherTemperature">
                <span className="temperature">{Math.round(fahrenheit)}</span>
                <span className="unit">
                    <a href="/" onClick={convertToCels}>
                        °C
                    </a>
                    | ℉
                </span>
            </div>
        );
    }
    
}

export default WeatherTemperature;