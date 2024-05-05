import React from 'react';
import { useGetContacts } from '../utils/useGetContacts';
import Header from './Header';
import ContactList from './ContactList';

const Body = () => {
    useGetContacts();
  return (
    <div>
        <Header />
        <ContactList />
    </div>
  )
}

export default Body