import React from "react";

const ItemContacts = ({ id, name, number, onDeleteContact}) => (
    <li key={id}>
        <p>{name}</p>
        <p>{number}</p>
        <button type="button" onClick={() => onDeleteContact(id)}>
            DELETE
        </button>
    </li>
);

export default ItemContacts;