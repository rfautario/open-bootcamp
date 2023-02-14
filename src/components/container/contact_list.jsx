import React from 'react';
import { Contact } from '../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contact('Rodrigo', 'Fautario', 'rfautario@hotmail.com', false)

    return (
        <div>
            <div>
                <h1>
                    Tus contactos:
                </h1>
            </div>
            {/* TODO Aplicar un for/map para renderizar una lista */}
            <ContactComponent contact={ defaultContact } />
        </div>
    );
};

export default ContactListComponent;
