import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteContact } from '../utils/contactSlice';
import { Link } from 'react-router-dom';

const ContactItem = ({contact, sNo}) => {
    const {id, name, phone, email} = contact;
    const dispatch = useDispatch();
    const handleDelete = (id) => {
      dispatch(deleteContact(id));
    }
  return (
    <div className='mt-6 bg-white w-[75%] ml-40'>
        <div className='flex border-2 py-2 justify-between'>
            <p className='w-[10%] ml-1'>{sNo + 1}</p>
            <p className='w-[20%]'>{name}</p>
            <p className='w-[20%]'>{email}</p>
            <p className='w-[20%]'>{phone}</p>
            <div className='mr-1'>
              <Link to={`/edit-contact/${id}`}>
                <button className='bg-[#0579FF] text-white px-4 py-2 mr-2'
                          >Edit</button>
              </Link>
                <button className='bg-[#DD3545] text-white px-4 py-2'
                        onClick={() => handleDelete(id)}>Delete
                </button>
            </div>
        </div>
    </div>
  )
}

export default ContactItem