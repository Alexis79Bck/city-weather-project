import { useEffect, useState } from "react"
import CityWeatherForm from "./CityWeatherForm"; 
import CityWeatherMainInfo from "./CityWeatherMainInfo";
import styles  from '../css_modules/CityWeatherApp.module.css'
import Loading from "./Loading";

export default function CityWeatherApp() {
    
    const [weather, setWeather] = useState(null);
       
    /** El useEffect es un hook el cual se ejecutará cuando:
     *  1.- Cuando se renderiza la primera vez el componente.
     *  2.- Cuando exista cambio en una o mas propiedades del componente.
     *  3.- Antes y/o despues de ser destruído el componente.
     *
     *  Este hook ejecutará una funcion callback con las acciones especificada y tambien
     *  puede usuarse la cantidad N de este hook mientras sea necesario.
     */
    useEffect(() => {
        loadInfoWeather();        
    }, []);
    
    useEffect(() => {        
        const pageTitle = `
                           Current Weather | City: ${weather?.location.name ?? ""}
                         `;
        document.title = pageTitle;
    }, [weather]);
    
    /**
     * Funcion asícrona creada para realizar una petición HTTP
     * @param {*} city 
     */
    async function loadInfoWeather(city = "Ciudad Guayana") {
        try {
            
            const request = await fetch(`${process.env.REACT_APP_API_URL}&key=${process.env.REACT_APP_API_KEY}&q=${city}&lang=${process.env.REACT_APP_API_LANGUAGE}`);
            const respJson = await request.json();

            setTimeout(()=> {
                setWeather(respJson)
            }, 3500 )
            
            
        } catch (error) {}
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
        <div className={styles.appContainer}> 
            <div className={styles.appTitle}>{process.env.REACT_APP_NAME} <hr /></div> 
           
            <CityWeatherForm onChangeCity={handleChangeCity} />
           
            <div className="currentInfoCityWeather">
                 { weather ? <CityWeatherMainInfo weather={weather}/> : <Loading /> }
                
            </div>
        </div>
    );
}