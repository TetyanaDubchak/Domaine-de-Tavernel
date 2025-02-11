import { Hero } from "components/CommonFiles/HeroPages";
import { Navigation } from "components/CommonFiles/NavigateTitle";

import bg from '../assets/images/gallery/hero/bg.png';
import { Albums } from "components/Gallery/Albums";
import { Photos } from "components/Gallery/Photos";

const Gallery = () => {
    
    return (
        <main>
            <Hero bg={ bg} />
            <Navigation page='Gallery' />
            <Photos />
            <Albums/>
        </main>
    )
}

export default Gallery;