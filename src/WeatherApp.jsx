import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import {useState} from "react";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city: "delhi",
        feelslike: 22,
        temp: 22,
        tempMin: 22,
        tempMAx:22,
        humidity:11,
        weather:"haze"
    });
    let updateInfo = (newInfo)=> {
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Himanshu</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>

        </div>
    )
}