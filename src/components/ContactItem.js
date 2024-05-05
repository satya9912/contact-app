import React from 'react'

const ContactItem = ({contact}) => {
    const {id, name, phone, email} = contact
  return (
    <div className='mt-6 bg-white w-[75%] ml-40'>
        <div className='flex border-2 py-2 justify-between'>
            <p className='w-[10%] ml-1'>{id}</p>
            <p className='w-[20%]'>{name}</p>
            <p className='w-[20%]'>{email}</p>
            <p className='w-[20%]'>{phone}</p>
            <div className='mr-1'>
                <button className='bg-[#0579FF] text-white px-4 py-2 mr-2'>Edit</button>
                <button className='bg-[#DD3545] text-white px-4 py-2'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default ContactItem