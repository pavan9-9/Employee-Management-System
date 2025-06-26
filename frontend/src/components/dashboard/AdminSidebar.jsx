import React from 'react'
import {NavLink} from 'react-router-dom'
import {FaBuilding, FaCalendarAlt, FaCog, FaMoneyBillWave, FaTachometerAlt, FaUser} from 'react-icons/fa'

const AdminSidebar = () => {
  return (
    <div>
        <div>
            <h1>Welcome  MS</h1>
        </div>
        <div>
            <NavLink to= "/admin-dashboard">
                <FaTachometerAlt />
                <span>Dashboard</span>
            </NavLink>
            <NavLink to= "/admin-dashboard">
                <FaUser />
                <span>Employees</span>
            </NavLink>
            <NavLink to= "/admin-dashboard">
                <FaBuilding      />
                <span>Departments</span>
            </NavLink>
            <NavLink to= "/admin-dashboard">
                <FaCalendarAlt />
                <span>Leaves</span>
            </NavLink>
            <NavLink to= "/admin-dashboard">
                <FaMoneyBillWave />
                <span>Salary</span>
            </NavLink>
            <NavLink to= "/admin-dashboard">
                <FaCog />
                <span>Settings</span>
            </NavLink>

        </div>
    </div>
  )
}

export default AdminSidebar