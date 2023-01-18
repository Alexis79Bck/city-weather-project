import { useState } from "react"
import CityWeatherForm from "./CityWeatherForm";

export default function CityWeatherApp() {
    
    const [weather, setWeather] = useState(null);
    
    /**
     * Funcion asícrona creada para realizar una petición HTTP
     * @param {*} city 
     */
    async function loadInfoWeather(city) {
        try {
            const request = await fetch(`${process.env.REACT_APP_API_URL}&key=${process.env.REACT_APP_API_KEY}&q=${city}`);
            
            const reqJson = await request.json();
            setWeather(reqJson)
            console.clear()
            console.log(reqJson);
        } catch (error) {
            
        }
    }
    /**
     * Manejador del evento onChangeCity, al recibir el parametro city este irá
     * ejecutando la funcion loadInfoWeather()
     * @param {string} city 
     */    
    function handleChangeCity(city) {
        setWeather(null);
        loadInfoWeather(city);
    }
    return (
        <div> 
            <span className="appTitle">{process.env.REACT_APP_NAME}</span> 
            <hr />
            <CityWeatherForm onChangeCity={handleChangeCity} />
            <div className="currentInfoCityWeather">Estado: {weather?.location.region} / Pais: {weather?.location.country}</div>
        </div>
    );
}