import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'; 
import CardContent from '@mui/material/CardContent'; 
import Typography from '@mui/material/Typography';
import CityMapView from './CityMapView';

export default function CityWeatherMainInfo({ weather }) {
    
    const mainInfo = <div>
                        <WeatherBasicInfo currentWeather={weather?.current} location={weather?.location}/>
                        <br />
                        <CityLocationMap location={weather?.location} />
                    </div>
    
    /**
     * Sub componente para contener el mapa de la ciudad solicitada
     * @param {*} location 
     * @returns 
     */  
    function CityLocationMap({ location }) { 
                                                                
        const cityLocation =  <Card sx={{ margin: 'auto',  width: '100%', justifyContent: 'center', backgroundColor: '#fdffcd', boxShadow: '7px 7px 14px silver', border: '1px solid black'}}>     
                                    <CardContent sx={{ fontSize: 12, textAlign: 'center'}}>
                                        
                                        <CityMapView cityName={location?.name} cityRegion={location?.region} cityCountry={location?.country} />
                                        
                                    </CardContent>
                                </Card>;
                            
        return cityLocation;
    }  
    /**
     * Sub componente para contener la información basica del clima
     * @param {*} currentWeather 
     * @param {*} location
     * @returns 
     */
    function WeatherBasicInfo({ currentWeather, location }) { 
                                                                
        const basicInfo =  <Card sx={{ margin: 'auto', width: '100%', justifyContent: 'center', backgroundColor: '#fdffcd', boxShadow: '7px 7px 14px silver', border: '1px solid black'}}>
                                <CardHeader sx={{ fontSize: 18, textAlign: 'center', color: 'navy' }} title={`${location?.name} | ${location?.region} | ${location?.country}`} />
                                
                                <CardContent sx={{ fontSize: 12, textAlign: 'center'}}>
                                    <img src={`http:${currentWeather?.condition.icon}`} alt={`${currentWeather?.condition.text}`} width="64px" height="64px" />
                                        
                                    <Typography   gutterBottom>
                                        Clima: {currentWeather?.condition.text}
                                    </Typography>       
                                    
                                    <Typography   gutterBottom>
                                        Temperatura: {currentWeather?.temp_c} ºC / {currentWeather?.temp_f} ºF
                                    </Typography>
                                    <Typography   gutterBottom>
                                        Viento: {currentWeather?.wind_kph} Km/h
                                    </Typography>
                                    
                                </CardContent>
                            </Card>
                            
        return basicInfo;
    }
  
    return (mainInfo);
}
 
