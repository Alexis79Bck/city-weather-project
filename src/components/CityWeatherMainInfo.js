import * as React from 'react'; 
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader'; 
import CardContent from '@mui/material/CardContent'; 
import Typography from '@mui/material/Typography';

export default function CityWeatherMainInfo({ weather }) {
    
  function CityLocationMap(lon, lat) {
      const cityLocation = <Card sx={{ margin: 'auto',  width: '30%', justifyContent: 'center', backgroundColor: '#fdffcd', boxShadow: '7px 7px 14px silver', border: '1px solid black'}}>     
                            <CardContent sx={{ fontSize: 12, textAlign: 'center'}}>
                                <iframe 
                                    title='cityMap'
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63174.21325988172!2d${lon}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbff66764c703f%3A0x1f9f9309217a2d93!2sFERRE-MAX%2C%20C.A.!5e0!3m2!1ses-419!2sve!4v1674162271380!5m2!1ses-419!2sve`}
                                    width="400" 
                                    height="320" 
                                    style={{ border:0 }} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                                    
                            </CardContent>
                           </Card>;
                           
      return cityLocation;
  }  
  
  return (
    <div>
        <Card sx={{ margin: 'auto', width: '30%', justifyContent: 'center', backgroundColor: '#fdffcd', boxShadow: '7px 7px 14px silver', border: '1px solid black'}}>
            <CardHeader sx={{ fontSize: 18, textAlign: 'center', color: 'navy' }} title={`${weather?.location.name} | ${weather?.location.region} | ${weather?.location.country}`} />
            
            <CardContent sx={{ fontSize: 12, textAlign: 'center'}}>
                <img src={`http:${weather?.current.condition.icon}`} alt={`${weather?.current.condition.text}`} width="64px" height="64px" />
                    
                <Typography   gutterBottom>
                    Clima: {weather?.current.condition.text}
                </Typography>       
                
                <Typography   gutterBottom>
                    Temperatura: {weather?.current.temp_c} ºC / {weather?.current.temp_f} ºF
                </Typography>
                <Typography   gutterBottom>
                    Viento: {weather?.current.wind_kph} Km/h
                </Typography>
                
            </CardContent>
        </Card>
        <CityLocationMap lon={weather?.location.lon} lat={weather?.location.lat} />
    </div>
  );
}

