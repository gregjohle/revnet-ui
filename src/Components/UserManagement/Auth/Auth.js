import { useState } from 'react'
import { supabase } from '../../../Common/supabaseClient'
import { Mosaic } from 'react-loading-indicators'
import './Auth.css'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [userEmail, setEmail] = useState('')
  const [userPassword, setPassword] = useState('')

  const handleLogin = async () => {
    setLoading(true)
    try {
      const { error } = await supabase.auth.signInWithPassword({ 
        email: userEmail,
        password: userPassword
      })
      if (error) throw error
    } catch (error) {
      alert(error.error_description || error.message)
    } finally {
      setLoading(false)
    }
  }

  const setContent = () => {
    if (loading === true) {
      return <Mosaic size={'large'} />
    } else {
      return (
      <div className="login-wrapper" >
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="inputField"
          type="email"
          placeholder="Your email"
          value={userEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          className='inputField'
          type='password'
          value={userPassword}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" onClick={() => handleLogin()}>
          Login
        </button>
    </div>)
    }
  }

  return (
    <div className="login-container">
      <h2 className="header">Login</h2>
      {setContent()}
    </div>
  )
}