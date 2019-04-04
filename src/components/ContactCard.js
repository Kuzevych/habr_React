import React from 'react';


const ContactCard = (props) => {
    console.log(props);
        return (
            <div className="contact-card">
                <img align="center" src={props.contact.image}/>
                <h3><font color="#3AC1EF">▍{props.contact.name}</font></h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
                <p>Nick: {props.contact.nickname}</p>
            </div>
        )
}

ContactCard.propTypes = {};

export default ContactCard;