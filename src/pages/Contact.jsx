import { Hero } from 'components/CommonFiles/HeroPages';
import bg from '../assets/images/contacts/bg-wine.png';
import { Navigation } from 'components/CommonFiles/NavigateTitle';
import { Information } from 'components/Contacts/Information';
import { Social } from 'components/Contacts/Social';
import { Map } from 'components/Contacts/Map';
import { Form } from 'components/Contacts/Form';

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