import ItemContact from "components/ItemContacts";
import React from "react";
import { ContactsWrap, ContactsTitle, ContactsList, Item} from './ListContacts.styled';

const ListContacts = ({ contacts, onDeleteContact }) => (
    <ContactsWrap>
        <ContactsTitle>Contacts</ContactsTitle>
        <ContactsList>
            {contacts.map(({ id, name, number }) => (
                <Item key={id}>
                    <ItemContact id={id} name={name} number={number} onDeleteContact = {onDeleteContact}/>
                </Item>
                
            ))}
        </ContactsList>
    </ContactsWrap>    
);

export default ListContacts;