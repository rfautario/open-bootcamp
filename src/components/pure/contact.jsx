import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';


const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>
                Nombre: { contact.name }
            </h2>
            <h3>
                Apellido: { contact.surname }
            </h3>
            <h4>
                Email: { contact.mail }
            </h4>
            <h5>
                Conectado: { contact.status ? 'Contacto En Línea' : 'Contacto No Disponible' }
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};


export default ContactComponent;
