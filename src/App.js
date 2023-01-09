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
        <Route path={"/signup"}>

        </Route>
        <Route path={"/login"}>

        </Route>
        <Route path={"/home"}>

        </Route>
        <Route path={"/myprofile/"}>

        </Route>
        <Route path={"/profile"}>

        </Route>
      </Routes>
        
      {/* {!session ? <Auth /> : <Account key={session.user.id} session={session} />} */}
    </div>
  )
}