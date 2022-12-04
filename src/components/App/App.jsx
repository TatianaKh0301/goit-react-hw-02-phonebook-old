import React, { Component } from "react";
import shortid from "shortid";
import FormAddContacts from "../FormAddContacts";
import ListContacts from "../ListContacts";
import Filter from "components/Filter";
import { Container, TitleApplication } from './App.styled';

class App extends Component {
  state = {
    contacts : [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };
  

  handleChange = event => {
    const { name, value} = event.currentTarget;
    this.setState({[name] : value});
  }

  addContact = ({name, number}) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };

    // this.setState(prevState => ({
    //       contacts: prevState.contacts.find(contact => contact.name === name),
    //     }));
        
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));

    // this.disableDuplicateNames(name);
  };

  // disableDuplicateNames = () => {
    // console.log("name", name);
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.find(contact => contact.name === name),
  //   }));
  //   console.log("Duplicate!!!");
  // };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = event => {
    this.setState({filter: event.currentTarget.value});
  };

  getFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  render() {
    const { filter } = this.state;
    const filterContacts = this.getFilterContacts();

    return (
      <Container>
        <TitleApplication>Phonebook</TitleApplication>
        <FormAddContacts  onSubmit={this.addContact}/>
        
        <Filter value = {filter} onChange={this.changeFilter}/>
        
        <ListContacts contacts={filterContacts} onDeleteContact={this.deleteContact}/>
      </Container>
    );
  }  
};

export  default App;
