export default function CityMapView({cityName, cityRegion, cityCountry}) {
    
    const mapIFrame =  <iframe 
                            title='cityMap'
                            //src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126339.7739880166!2d${longitud}!3d${latitud}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbf02b84200b49%3A0x6e05317f7c974d14!2sCiudad%20Guayana%2C%20Bol%C3%ADvar!5e0!3m2!1ses-419!2sve!4v1674162742595!5m2!1ses-419!2sve`}
                            src={`https://www.google.com/maps/embed/v1/place?q=${cityName},${cityRegion},${cityCountry}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
                            width="600" 
                            height="400" 
                            style={{ border:0 }} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>;
                           
      return mapIFrame;
}