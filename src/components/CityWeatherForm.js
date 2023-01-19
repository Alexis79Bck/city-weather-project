import { useState } from "react"

export default function CityWeatherForm({onChangeCity}) {
     
    const [city, setCity] = useState("");
        
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
        <form className="formCity" onSubmit={handleSubmit}>
            <input className="inputCity" type="text" onChange={handleChange}  />
        </form>
    );
    
    
}