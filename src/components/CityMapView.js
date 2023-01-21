export default function CityMapView({cityName, cityRegion, cityCountry}) {
    
    const mapIFrame =  <iframe 
                            title='cityMap'
                            src={`https://www.google.com/maps/embed/v1/place?q=${cityName},${cityRegion},${cityCountry}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
                            width="600" 
                            height="400" 
                            style={{ border:0 }} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>;
                           
      return mapIFrame;
}