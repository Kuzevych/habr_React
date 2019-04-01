import React from 'react';


const ContactCard = (props) => {
        return (
            <div className="contact-card">
                <img align="center" src={props.image} alt="img"/>
                <h3><font color="#3AC1EF">▍{props.name}</font></h3>
                <p>Phone: {props.phone}</p>
                <p>Email: {props.email}</p>
            </div>
        )
}

ContactCard.propTypes = {};

export default ContactCard;