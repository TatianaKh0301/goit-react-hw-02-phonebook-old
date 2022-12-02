import ItemContacts from "components/ItemContacts";
import React from "react";

const ListContacts = ({ contacts, onDeleteContact }) => (
    <div>
        <h2>Contacts</h2>
        <ul>
            {contacts.map(({ id, name, number }) => (
                <ItemContacts id={id} name={name} number={number} onDeleteContact = {onDeleteContact}/>
            ))}
        </ul>
    </div>    
);

export default ListContacts;