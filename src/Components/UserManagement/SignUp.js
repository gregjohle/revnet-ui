import { supabase } from '../../Common/supabaseClient'
import { useState } from 'react'

export default function SignUp() {
    const [loading, setLoading] = useState(false)
    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState('')
    const [firstName, setFirstNanme] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    
    let handleSignUp = async (e) => {
        e.preventDefault()

        try {
            setLoading(true)
            const {error} = await supabase.auth.signInWithPassword({
                email: userEmail,
                password: userPassword
            })
            if (error) throw error
        } catch (error) {
            alert(error.error_description || error.message)
        }finally {
            setLoading(false)
        }
    }

    return (
        <div className='signup'>
            <h2>Sign Up for Revere Network</h2>
            <form onSubmit={handleSignUp}>
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
              Sign Up!
            </button>
            </form>
        </div>
    )
}