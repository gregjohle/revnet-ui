import { useState } from 'react'
import { supabase } from './Common/supabaseClient'
import { useEffect } from 'react'
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
      {/* {!session ? <Auth /> : <Account key={session.user.id} session={session} />} */}
    </div>
  )
}