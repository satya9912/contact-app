import React from 'react';
import { useGetContacts } from '../utils/useGetContacts';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const Body = () => {
    useGetContacts();
  return (
    <div>
        <Header />
        <Outlet />
    </div>
  )
}

export default Body