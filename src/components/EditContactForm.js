import React, { useRef } from 'react'
import { editContact } from '../utils/contactSlice';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditContactForm = () => {
    const {id} = useParams();

  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    dispatch(editContact({name,email,phone,id}))
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  }

  return (
    <div className='w-1/3 mx-auto mt-44 p-4'>
      <h3 className='text-2xl font-semibold ml-36 mb-4'>Edit Contact</h3>
      <form className='flex flex-col items-center border-2 py-4'>
        <input type='text' placeholder='Enter Name' required className='px-4 py-2 border-2 w-[70%] mb-4 ' ref={nameRef}/>
        <input type='text' placeholder='Email' required className='px-4 py-2 border-2 w-[70%] mb-4' ref={emailRef}/>
        <input type='text' placeholder='Number' required className='px-4 py-2 border-2 w-[70%] mb-4' ref={phoneRef}/>
        <button className='bg-[#0073F0] text-white px-4 py-2 w-[70%]'
                onClick={handleSubmit}>Update Contact
        </button>
      </form>
    </div>
  )
}

export default EditContactForm;