import React from 'react'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const ContactList = () => {
    const contacts = useSelector(store => store.contact.contacts);
  return (
    <>
    <Link to={"/add-contact"}>
    <button className='px-4 py-2 bg-gray-300 mt-16 ml-[75%] rounded-lg font-semibold text-base'>Add Contact</button>
    </Link>
    <div className='mt-4 bg-[#343A3F] w-[75%] ml-40'>
        <div className='flex justify-between py-2'>
            <p className='text-white text-lg font-semibold ml-2'>Id</p>
            <p className='text-white text-lg font-semibold'>Name</p>
            <p className='text-white text-lg font-semibold'>Email</p>
            <p className='text-white text-lg font-semibold'>Number</p>
            <p className='text-white text-lg font-semibold mr-16'>Actions</p>
        </div>
    </div>
    {contacts.map( (contact, index) => (
        <ContactItem contact={contact} key={contact.id} sNo={index}/>
    ))}
    </>
    
  )
}

export default ContactList