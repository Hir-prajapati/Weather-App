import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import {useState } from "react"
 
export default function SearchBox({updateInfo}){
    let [city, setcity]= useState("");
    let [error, setError]= useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY="031a501d5088b59be72013e6d38b9e01"

    let getWeatherInfo = async ()=>{
        try{
            
        
        let response = await  fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let JsonResponse = await response.json();
        let result={
            city:city,
           temp:JsonResponse.main.temp,
           tempMin:JsonResponse.main.temp_min,
           tempMax:JsonResponse.main.temp_max,
           humidity:JsonResponse.main.humidity,
           feels_like:JsonResponse.main.feels_like,
           weather:JsonResponse.weather[0].description,
    
        }
        console.log(result);
        return result;
    }catch(err){
        throw err
    }
    }
    let handleinput=(event)=>{
            setcity(event.target.value);
    }
    let handlesubmit= async (event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setcity("");
        setError(false);
       let NewInfo=await getWeatherInfo();
       updateInfo(NewInfo); 
        }catch(err){
            setError(true)
        }   
    }
    return (
        <div className="SearchBox">
            <form action="" onSubmit={handlesubmit}>
                     <TextField id="city" className="city-input" label="City Name" variant="outlined" required value={city} onChange={handleinput} />
                      <br /> <br />
                      <Button variant="contained" type="Sumbit" className="search-btn-3d">Search</Button>
                      {error && <p style={{color:"red"}}>No Such Place exists!</p>}
            </form>
        </div>
    )
}