import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../context/authContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const {login} = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:5000/api/auth/login",{email, password});
            if (response.data.success) {
              login(response.data.user)
              localStorage.setItem("token", response.data.token);
              if(response.data.user.role === "admin") {
                navigate ('/admin-dashboard')
              } else{
                navigate('/employee-dashboard')
              }
              
            }
    } catch (error) {
            if (error.response && error.response.status === 401) {
        setError("Invalid email or password");
        } else {
        setError("server error");
        } 
    }
        
    }

  return (
    <div className='flex flex-col items-center h-screen justify-center 
    bg-gradient-to-b from-teal-600 from-50% to-gray-100 to-50% space-y-6'>

    <h2 className='font-pacific text-3xl text-white '> employee managment system</h2>
    <div className='border shadow p-7 w-80 bg-white'>
         <h2 className='text-3xl font-bold mb-4'> Login </h2>
    {error && <p className='text-red-500'>{error}</p>}
    <form onSubmit={handleSubmit}>
        <div className='mb-4'>
            <label htmlFor='email' className='block text-gray-700'>Email </label>
            <input className='w-full px-3 py-2 border' 
            type="email" 
            placeholder='Enter Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
             />
        </div>
        <div>
            <label htmlFor='password' className='block text-gray-700'>Password</label>
            <input className='w-full px-3 py-2 border' 
            type="password" 
            placeholder='***********' 
            onChange={(e) => setPassword(e.target.value)}
            required
            />
        </div>
        <div className='mb-4 flex items-center justify-between'>
            <label className='inline-flex items-center'>
            <input type='checkbox' className='form checkbox'/>
            <span className='ml-2 text-gray-700'>Remember me</span>
            </label>
            <a href='#' className='text-teal-600'>Forgot Password</a>
        </div>
        <div className='mb-4'>
             <button type='submit' className='w-full bg-teal-600 text-white py-2'> Login </button>
        </div>
    </form>
    </div>
    </div>
  )
}

export default Login