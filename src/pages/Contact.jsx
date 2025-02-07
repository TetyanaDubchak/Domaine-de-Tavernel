import { Hero } from 'components/HeroPages/HeroPages';
import bg from '../assets/images/contacts/bg-wine.png';
import { Navigation } from 'components/NavigateTitle/NavigateTitle';
import { Information } from 'components/Contacts/Information/Information';
import { Social } from 'components/Contacts/Social/Social';
import { Map } from 'components/Contacts/Map/Map';
import { Form } from 'components/Contacts/Form/Form';

const Contact = () => {
    
    return (
        <main>
            <Hero bg={bg} />
            <Navigation page='Contacts' /> 
            <Information />
            <Social />
            <Map />
            <Form/>
        </main>
    )
}

export default Contact;