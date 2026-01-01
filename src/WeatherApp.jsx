import { useState } from "react"
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import "./WeatherApp.css"

export default function WeatherApp(){
    let [info, setInfo]= useState({
        city:"Wonderland",
        feels_like: 22.53,
        humidity: 43,
        temp: 23.05,
        tempMax: 23.05,
        tempMin: 23.05,
        weather: "haze",
    });
    let updateInfo =(NewInfo)=>{
        setInfo(NewInfo);
    }
    return (
        <div className="mainBox" >
            <h2 className="title">Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            
            <InfoBox info={info}/>
        
            </div>
    )
}