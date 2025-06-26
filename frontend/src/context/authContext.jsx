import axios from 'axios';
import React, {createContext, useContext, useEffect, useState } from 'react'


const userContext = createContext();
const authContext = ({children}) => {

  const [user, setUser] = useState(null)
  const[loading, setLoading] = useState(true)

  useEffect(() =>{
    const verifyUser = async() => {
       try {
        const token = localStorage.getItem('token')
        if(token) {
        const responce = await axios.get("http://localhost:5000/api/auth/verify", {
            headers : {
              "Authorization" : `Bearer ${token}`
            }
        })
        if (responce.data.success){
          setUser(responce.data.user)
          console.log(responce.data.user)

        }

      } else{
        setUser(null)
        setLoading(false)
      }
      } catch (error) {
        if(error.response && error.response.status === 401){
              setUser(null)
        }
      } finally{
        setLoading(false)
      }
    }
    verifyUser();
  }, [] )

  const login = (user) => {
    setUser(user)
  }

  const logout = () =>{
    setUser(null)
    localStorage.removeItem("token")
  }
  return (
    <userContext.Provider value ={{user, login, logout, loading}}>
      {children}
    </userContext.Provider>
    
  )
}
export const useAuth = () => useContext(userContext);
export default authContext