import { GoogleMap, Marker,useLoadScript } from "@react-google-maps/api";

import img from '../../assets/images/contacts/street-location.png';
import markerImg from '../../assets/images/contacts/marker.png';

import s from '../../assets/components/Contacts/Map.module.scss';

const API_KEY = 'AIzaSyAU0-crRrFzivOpIFCJSJLN5sziZBA2ip8';

const containerStyle = {
    width: "100%",
    height: "100%",
};

const center = {
    lat: 43.74816,
    lng: 4.59438,
};

const mapStyles = [
  {
    featureType: "all",
    elementType: "geometry",
    stylers: [{ saturation: -100 }, { lightness: 50 }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#d3d3d3" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#D7D7D7" }, { lightness: 50 }, { saturation: -100 }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ color: "#D7D7D7" }, { lightness: 50 }, { saturation: -100 }],
  },
];

const mapOptions = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: false,
  mapTypeId: "roadmap",
};

export const Map = () => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: API_KEY });
    if (!isLoaded) return <div>Loading...</div>;
    return (
        <section className={s.wrapper}>
            <div className={s['map-wrapper']}>
                    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}
                        options={mapOptions}>
                        <Marker position={center} icon={{
                            url: markerImg,
                            scaledSize: new window.google.maps.Size(60, 60),
                        }} />
                    </GoogleMap>
            </div>
            <div className={s['info-wrapper']}>
                <img className={s['info-img']} src={img} alt="street" />
                <div className={s['text-wrapper']}>
                    <p className={s['text']}> Route de Fourques - 1479, Chemin de Tavernel - 30300 Beaucaire</p>
                    <ul className={s['contact-list']}>
                        <li><a className={s['contact-link']} href="tel:+04 66 58 57 01">
                           +04 66 58 57 01
                        </a></li>
                        <li><a className={s['contact-link']} href="mailto:domaine@tavernel.fr">
                            domaine@tavernel.fr
                        </a></li>
                        </ul>
                </div> 
            </div>
        </section>
    )
}