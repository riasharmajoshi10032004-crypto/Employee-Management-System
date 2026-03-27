import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/login'
import Employeedashboard from './components/Auth/dashboard/employeedashboard'
import Admindashboard from './components/Auth/dashboard/Admindashboard'
import { AuthContext } from './Context/AuthProvider'

function App() {

  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)

  const [userdata,setuserdata] = useContext(AuthContext)

  // ✅ Restore login after reload
  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')

    if (storedUser) {
      const userdata = JSON.parse(storedUser)

      setUser(userdata.role)

      if (userdata.role === 'employee') {
        setLoggedInUser(userdata.data)
      }
    }
  }, [])

  // ✅ Login handler
  const handlelogin = (email, password) => {

    // ADMIN LOGIN
    if (email === 'admin@example.com' && password === '123') {

      setUser('admin')

      localStorage.setItem(
        'loggedInUser',
        JSON.stringify({ role: 'admin' })
      )

    }
    // EMPLOYEE LOGIN
    else if (userdata) {

      const employee = userdata.find(
        (e) => email === e.email && e.password === password
      )

      if (employee) {

        setUser('employee')
        setLoggedInUser(employee)

        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({
            role: 'employee',
            data: employee
          })
        )

      } else {
        alert('Invalid Credentials')
      }
    }
  }

  return (
    <>
      {!user && <Login handlelogin={handlelogin} />}

      {user === 'admin' && <Admindashboard changeUser={setUser} />}

      {user === 'employee' && (
        <Employeedashboard  changeUser={setUser} data={loggedInUser} />
      )}
    </>
  )
}

export default App