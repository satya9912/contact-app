import React from 'react'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
    const contacts = useSelector(store => store.contact.contacts);
  return (
    <>
    <div className='mt-20 bg-[#343A3F] w-[75%] ml-40'>
        <div className='flex justify-between py-2'>
            <p className='text-white text-lg font-semibold ml-2'>Id</p>
            <p className='text-white text-lg font-semibold'>Name</p>
            <p className='text-white text-lg font-semibold'>Email</p>
            <p className='text-white text-lg font-semibold'>Number</p>
            <p className='text-white text-lg font-semibold mr-2'>Actions</p>
        </div>
    </div>
    {contacts.map( (contact) => (
        <ContactItem contact={contact}/>
    ))}
    </>
    
  )
}

export default ContactList