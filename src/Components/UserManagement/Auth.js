import { useState } from 'react'
import { supabase } from '../../Common/supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [userEmail, setEmail] = useState('')
  const [userPassword, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { error } = await supabase.auth.signUp({ 
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

  return (
    <div className="row flex-center flex">
      <div className="col-6 form-widget" aria-live="polite">
        <h2 className="header">Login</h2>
        {loading ? (
          'Loading...'
        ) : (
          <form onSubmit={handleLogin}>
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
            <button className="button block" aria-live="polite">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  )
}