import { Hero } from 'components/HeroPages/HeroPages';
import bg from '../assets/images/contacts/bg-wine.png';
import { Navigation } from 'components/NavigateTitle/NavigateTitle';
import { Information } from 'components/Contacts/Information';

const Contact = () => {
    
    return (
        <main>
            <Hero bg={bg} />
            <Navigation page='Contacts' /> 
            <Information/>
        </main>
    )
}

export default Contact;