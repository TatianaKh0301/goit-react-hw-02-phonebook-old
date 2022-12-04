import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { ItemContactWrap, ContactWrap, NameWrap, Name, Number, ButtonDelete } from './ItemContacts.styled';

const ItemContact = ({ id, name, number, onDeleteContact}) => (
    <ItemContactWrap>
        <ContactWrap>
            <NameWrap>
                <FaMobileAlt />
                <Name>{name}</Name>
            </NameWrap>
            
            <Number>{number}</Number>
        </ContactWrap>
        
        <ButtonDelete type="button" onClick={() => onDeleteContact(id)}>
            DELETE
        </ButtonDelete>
    </ItemContactWrap>
);

export default ItemContact;