import { useState } from 'react'
import { supabase } from './Common/supabaseClient'
import { useEffect } from 'react'
import {Routes, Route} from "react-router-dom"
import Header from "./Components/Header/Header"
import Auth from "./Components/UserManagement/Auth"
import Account from './Components/UserManagement/Account'

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <div className="container" style={{ padding: '50px 0 100px 0' }}>
      <Header session={session} />
      <Routes>
        <Route path={"/signup"}/>
        <Route path={"/login"} element={<Auth />} />
        <Route path={"/myprofile/"}/>
        <Route path={"/profile"}/>
        <Route path={"/"}/>
      </Routes>
    </div>
  )
}