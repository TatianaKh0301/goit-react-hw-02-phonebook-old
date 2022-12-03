import React from "react";
import { ItemContact, Name, Number, ButtonDelete } from './ItemContacts.styled';

const ItemContacts = ({ id, name, number, onDeleteContact}) => (
    <ItemContact key={id}>
        <Name>{name}</Name>
        <Number>{number}</Number>
        <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>
            DELETE
        </ButtonDelete>
    </ItemContact>
);

export default ItemContacts;