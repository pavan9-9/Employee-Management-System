import React from 'react'
import { useAuth } from '../../context/authContext'


const Navbar = () => {
    const {user} = useAuth();
  return (
    <div className='flex items-center justify-between text-white h-12 bg-teal-600 px-4'>
        <p >Welcom {user.name}</p>
        <button className='px-4 py-1.5 bg-teal-500 hover:bg-teal-800'>Logout</button>
    </div>
  )
}
export default Navbar