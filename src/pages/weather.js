import React, {useState} from 'react'
import {BestWeatherDiv} from './styles'


const Weather = () => {
    const [temp,setTemp] = useState(0)
    const [town, setTown] = useState("")

    if('geolocation' in navigator) {
        console.log("WEARHTER")
        navigator.geolocation.getCurrentPosition((position) => {
            
            let lat=position.coords.latitude;
            let long=position.coords.longitude;
            console.log(lat,long);
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=db5bbba816b58757082ce2230c7754a6&units=imperial`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setTemp(data.main.temp)
                setTown(data.name)
            }
                );
                
          })
          return (
            <div>
            <BestWeatherDiv>
                <h1>Hi! It's currently {temp}° in {town}.</h1> 
            </BestWeatherDiv>
            </div>
        )
        
      } else {
        return (
            <BestWeatherDiv>
                <h1>Hello, wherever you are!</h1> 
            </BestWeatherDiv>
        )
      }





}

export default Weather;