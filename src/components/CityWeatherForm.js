import { useState } from "react"
import styles  from '../css_modules/CityWeatherForm.module.css'

export default function CityWeatherForm({onChangeCity}) {
     
    const [city, setCity] = useState("Ciudad Guayana");
        
    /**
     * Manejador del evento onChange del input el cual alamacena el valor de city.
     * @param {*} e 
     */
    function handleChange(e) {
        let value=e.target.value;
        
        if (value !== "") setCity(value);
    }
            
    /**
     * Manejador del evento onSubmit del formulario el cual envía el valor contenido en city.
     * @param {*} e 
     */
    function handleSubmit(e) {
        e.preventDefault();
        onChangeCity(city);
    }
    return (
        <form className={styles.formCity} onSubmit={handleSubmit}>
            <span className={styles.labelCity}> Ingrese Nombre de Ciudad (default Ciudad Guayana): </span>
            <input className={styles.inputCity} type="text" onChange={handleChange} value={city} />
        </form>
    );
    
    
}