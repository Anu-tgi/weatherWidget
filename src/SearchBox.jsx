import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let [error, setError] = useState(false);
    let [city, setCity] = useState("");

    let getWeatherInfo = async() => {
        try{
            let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let finalres = await res.json();
            let result = {
                city: city,
                temp: finalres.main.temp,
                tempMin: finalres.main.temp_min,
                tempMax: finalres.main.temp_max,
                humidity: finalres.main.humidity,
                feelslike: finalres.main.feels_like,
                weather: finalres.weather[0].description,
            };
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            setCity("");
            let newinfo = await getWeatherInfo();
            updateInfo(newinfo);
        }catch(err){
            setError(true);
        }
    };

    return (
        <div className="SearchBox">
          <form onSubmit={handleSubmit}>
            <TextField id="city" 
                label="City Name" 
                variant="outlined" 
                required
                value={city}
                onChange={handleChange}
            />
            <br /><br />
            <Button variant="contained" type="Submit">
                Search
            </Button>
            {error && <p style={{color: "Red"}}>No such place exists!</p>}
          </form>
        </div>
    );
}