import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaBuilding, FaCalendarAlt, FaCog, FaMoneyBillWave, FaTachometerAlt, FaUser} from 'react-icons/fa'

const AdminSidebar = () => {
  return (
    <div className='bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64'>
        <div className='bg-teal-600 h-12 flex items-center justify-center'>
            <h1 className='text-2xl text-center font-pacific'>Welcome  MS</h1>
        </div>
        <div className='px-4'>
            <NavLink to= "/admin-dashboard" 
                className={({isActive}) => `${isActive ? "bg-teal-500 " : ""}flex items-center space-x-4 block py-2.5 px-4 rounded`}>
                <FaTachometerAlt />
                <span>Dashboard</span>
            </NavLink>
            <NavLink to= "/admin-dashboard" 
                className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <FaUser />
                <span>Employees</span>
            </NavLink>
            <NavLink to= "/admin-dashboard"
                className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <FaBuilding      />
                <span>Departments</span>
            </NavLink>
            <NavLink to= "/admin-dashboard"
                className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <FaCalendarAlt />
                <span>Leaves</span>
            </NavLink>
            <NavLink to= "/admin-dashboard"
                className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <FaMoneyBillWave />
                <span>Salary</span>
            </NavLink>
            <NavLink to= "/admin-dashboard"
                className="flex items-center space-x-4 block py-2.5 px-4 rounded">
                <FaCog />
                <span>Settings</span>
            </NavLink>

        </div>
    </div>
  )
}

export default AdminSidebar