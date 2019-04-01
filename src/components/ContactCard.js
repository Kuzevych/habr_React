import React, {Component} from 'react';
import PropTypes from 'prop-types';

const ContactCard = (props) => {
        return (
            <div className="contact-card">
                <img align="center" src={props.image}/>
                <h3><font color="#3AC1EF">▍{props.name}</font></h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
        )
}

ContactCard.propTypes = {};

export default ContactCard;