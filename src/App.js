import { useState } from 'react'
import { supabase } from './Common/supabaseClient'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Signup from './Components/UserManagement/SignUp/SignUp'
import Auth from './Components/UserManagement/Auth/Auth'
import Account from './Components/UserManagement/Account/Account'
import Main from './Components/Main/Main'
import Social from './Components/Social/Social'

export default function App() {
  const [session, setSession] = useState(null)
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  const privateRoute = () => {
    if (authorized) {
      return <Social />
    }
    else {
      return <Auth />
    }
  }

  const formatPage = ({ children }) => {
    return (
      <>
        <Header session={session} />
        {children}
        <Footer />
      </>
    )
  }

  return (
    <div className="container" style={{ padding: '0' }}>
      <Routes>
        <Route path={"/signup"} element={
          <>
            <Header session={session} setAuthorized={setAuthorized} />
            <Signup />
          </>
        } />
        <Route path={"/login"} element={
          <>
            <Header session={session} />
            <Auth setAuthorized={setAuthorized} />
          </>
        } />
        <Route path={"/myprofile/"} />
        <Route path={"/profile"} />
        <Route path={"/social"} element={
          <>
            <Header session={session} />
            {privateRoute()}
          </>
        } />
        <Route path={"/"} element={<Main />} />
      </Routes>
    </div>
  )
}