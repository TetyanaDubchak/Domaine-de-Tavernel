import { Navigation } from 'components/CommonFiles/NavigateTitle';
import { Hero } from '../components/CommonFiles/HeroPages';
import { SlidersFirst } from 'components/About/SlidersFirst';
import { HistoryFirst } from 'components/About/HistoryFirst';
import { ToBlog } from 'components/About/ToBlog';
import { HistorySecond } from 'components/About/HistorySecond';
import { SlidersSecond } from 'components/About/SlidersSecond';
import { Information } from 'components/About/Information';

import bg from '../assets/images/about/hero/bg.png';

const About = () => {
    
    return (
        <main>
            <Hero bg={bg}/>
            <Navigation page='About Company' />
            <Information/>
            <SlidersFirst />
            <HistoryFirst />
            <ToBlog />
            <HistorySecond />
            <SlidersSecond/>
        </main>
    )
}

export default About;