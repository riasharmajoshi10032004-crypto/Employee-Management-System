import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utilis/localStorage'


export const AuthContext = createContext()



const AuthProvider = ({ children }) => {

  const [userdata, setuserdata] = useState(null)

  useEffect(() => {
    setLocalStorage()

    const { employees} = getLocalStorage()

    setuserdata(employees )
  }, [])


  if (!userdata) return null

  return (
    <div>
    <AuthContext.Provider value={[userdata,setuserdata]}>
      {children}
    </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider