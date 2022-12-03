import ItemContacts from "components/ItemContacts";
import React from "react";
import { ContactsWrap, ContactsTitle, ContactsList} from './ListContacts.styled';

const ListContacts = ({ contacts, onDeleteContact }) => (
    <ContactsWrap>
        <ContactsTitle>Contacts</ContactsTitle>
        <ContactsList>
            {contacts.map(({ id, name, number }) => (
                <ItemContacts id={id} name={name} number={number} onDeleteContact = {onDeleteContact}/>
            ))}
        </ContactsList>
    </ContactsWrap>    
);

export default ListContacts;