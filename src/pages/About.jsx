import { Navigation } from 'components/About/Navigation/Navigation';
import { Hero } from '../components/About/Hero/Hero';
import { SlidersFirst } from 'components/About/SlidersFirst/SlidersFirst';
import { HistoryFirst } from 'components/About/HistoryFirst/HistoryFirst';
import { ToBlog } from 'components/About/ToBlog/ToBlog';
import { HistorySecond } from 'components/About/HistorySecond/HistorySecond';
import { SlidersSecond } from 'components/About/SlidersSecond/SlidersSecond';

const About = () => {
    
    return (
        <main>
            <Hero />
            <Navigation />
            <SlidersFirst />
            <HistoryFirst />
            <ToBlog />
            <HistorySecond />
            <SlidersSecond/>
        </main>
    )
}

export default About;