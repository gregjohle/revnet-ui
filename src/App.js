import { useState } from 'react'
import { supabase } from './Common/supabaseClient'
import { useEffect } from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header/Header'
import Auth from './Components/UserManagement/Auth'
import Account from './Components/UserManagement/Account'
import Main from './Components/Main/Main'

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
    <div className="container" style={{ padding: '0' }}>
      <Routes>
        <Route path={"/signup"} element={
          <>
            <Header session={session} />
            
          </>
        }/>
        <Route path={"/login"} element={
          <>
            <Header session={session} />
            <Auth />
          </>
        } />
        <Route path={"/myprofile/"}/>
        <Route path={"/profile"}/>
        <Route path={"/social"} element={<Header session={session} />} />
        <Route path={"/"} element={<Main />}/>
      </Routes>
    </div>
  )
}