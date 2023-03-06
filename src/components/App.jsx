import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { fetchContacts } from '../redux/operations';

export function App() {
  const dispatch = useDispatch();
  useState(() => {
    dispatch(fetchContacts());
  }, []);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
}
