import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-black fixed top-0 left-0 right-0 py-2 px-4'>
      <Link  to={"/"}><p className='text-white'>contact app</p></Link> 
    </div>
  )
}

export default Header