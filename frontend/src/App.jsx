import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import Login from "./pages/Login"; 
import PrivateRouts from "./utils/PrivateRouts";
import RoleBasedRoutes from "./utils/RoleBasedRoutes";

function App() {

  return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element ={<Navigate to = "/admin-dashboard" />}> </Route>
        <Route path="/login" element ={<Login/>}> </Route>
        <Route path="//admin-dashboard" element ={
          <PrivateRouts>
            <RoleBasedRoutes requiredRole = {["admin"]}>
                <AdminDashboard/>
            </RoleBasedRoutes>
          </PrivateRouts>
          }> </Route>
        <Route path="//employee-dashboard" element ={<EmployeeDashboard/>}> </Route>

    </Routes>
  </BrowserRouter>
  )
  
}

export default App
