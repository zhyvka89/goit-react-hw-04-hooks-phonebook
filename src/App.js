import { useState } from 'react';

import Layout from './components/Layout/Layout';
import Form from './components/Form';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

import useLocalStorage from './hooks/useLocalStorage';

import { v4 as uuidv4 } from 'uuid';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = (text, number) => {
    const contact = {
      name: text,
      number,
      id: uuidv4(),
    };

    const isExistedName = contacts.find(
      contact => contact.name.toLowerCase() === text.toLowerCase(),
    );
    if (isExistedName) {
      alert(text + ' is already in your contacts');
      return;
    }

    setContacts(prev => [contact, ...prev]);
  };

  const deleteContact = contactId => {
    setContacts(prev => {
      return prev.filter(contact => contact.id !== contactId);
    });
  };

  const handleFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
    return filteredContacts;
  };

  return (
    <Layout>
      <h1>PhoneBook</h1>
      <Form onSubmit={addContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />
      <ContactList
        data={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </Layout>
  );
}
// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = contacts === null ? [] : JSON.parse(contacts);
//     this.setState({ contacts: parsedContacts });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = (text, number) => {
//     const contact = {
//       name: text,
//       number,
//       id: uuidv4(),
//     };

//     const isExistedName = this.state.contacts.find(
//       contact => contact.name.toLowerCase() === text.toLowerCase(),
//     );
//     if (isExistedName) {
//       alert(text + ' is already in your contacts');
//       return;
//     }

//     this.setState(({ contacts }) => ({
//       contacts: [contact, ...contacts],
//     }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   handleFilter = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter),
//     );
//     return filteredContacts;
//   };

//   render() {
//     console.log('render');
//     return (
//       <Layout>
//         <h1>PhoneBook</h1>
//         <Form onSubmit={this.addContact} />

//         <h2>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.handleFilter} />
//         <ContactList
//           data={this.getFilteredContacts()}
//           onDeleteContact={this.deleteContact}
//         />
//       </Layout>
//     );
//   }
// }
