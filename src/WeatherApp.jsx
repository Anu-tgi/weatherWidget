import { useState } from 'react';
import InfoBox from './InfoBox';
import SearchBox from './SearchBox';

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    let updateinfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign: "center", backgroundColor: "#EEF0F2"}}>
            <br />
            <h2>Weather App</h2>
            <SearchBox updateInfo = {updateinfo}/>
            <InfoBox info={weatherInfo}/>
            <br />
        </div>
    );
}