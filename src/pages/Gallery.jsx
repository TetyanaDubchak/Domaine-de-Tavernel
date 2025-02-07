import { Hero } from "components/HeroPages/HeroPages";
import { Navigation } from "components/NavigateTitle/NavigateTitle";

import bg from '../assets/images/gallery/hero/bg.png';
import { Albums } from "components/Gallery/Albums/Albums";
import { Photos } from "components/Gallery/Photos/Photos";

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