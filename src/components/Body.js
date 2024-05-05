import React from 'react';
import { useGetContacts } from '../utils/useGetContacts';

const Body = () => {
    useGetContacts();
  return (
    <div>Body</div>
  )
}

export default Body