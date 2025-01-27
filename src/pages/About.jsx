import { Navigation } from 'components/NavigateTitle/NavigateTitle';
import { Hero } from '../components/HeroPages/HeroPages';
import { SlidersFirst } from 'components/About/SlidersFirst/SlidersFirst';
import { HistoryFirst } from 'components/About/HistoryFirst/HistoryFirst';
import { ToBlog } from 'components/About/ToBlog/ToBlog';
import { HistorySecond } from 'components/About/HistorySecond/HistorySecond';
import { SlidersSecond } from 'components/About/SlidersSecond/SlidersSecond';
import { Information } from 'components/About/Information/Information';

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