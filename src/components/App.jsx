import { Component } from 'react';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  isIncludeContact = name => {
    return this.state.contacts.find(
      el => el.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );
  };
  updateContacts = newContact => {
    this.setState(prevState => {
      const contacts = [...prevState.contacts, newContact];
      return { contacts };
    });
  };
  handleInput = ev => {
    this.setState({ [ev.target.name]: ev.target.value.toLowerCase() });
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };
  render() {
    const { filter, contacts } = this.state;
    return (
      <div>
        <h1 style={{ fontSize: '45px' }}>Phonebook</h1>
        <ContactForm
          update={this.updateContacts}
          check={this.isIncludeContact}
        />
        <h2
          style={{
            fontSize: '40px',
            marginBottom: '10px',
            textAlign: 'center',
          }}
        >
          Contacts
        </h2>
        <Filter handleInput={this.handleInput} />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
