import { supabase } from '../../Common/supabaseClient'
import { useState } from 'react'
import './SignUp.css'
import { PWDRequirements } from './PWDRequirements'

export default function SignUp() {
    const [loading, setLoading] = useState(false)
    const [pwdRequirements, setPwdRequirements] = useState(false)
    const [checks, setChecks] = useState({
        capsLetterCheck: false,
        numberCheck: false,
        pwdLengthCheck: false,
        specialCharCheck: false
    })
    const [userEmail, setEmail] = useState('')
    const [userPassword, setPassword] = useState('')
    const [firstName, setFirstNanme] = useState('')
    const [lastName, setLastName] = useState('')
    const [userName, setUserName] = useState('')
    
    const validatePassword = () => {
        if (checks.capsLetterCheck == true 
            && checks.numberCheck == true
            && checks.pwdLengthCheck == true
            && checks.specialCharCheck == true) {
                return true
            }
        return false
    }

    let handleSignUp = async () => {
        if (userPassword !== '' 
        && userEmail !== '' 
        && validatePassword == true ) {
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
        else if (userEmail == '' || validatePassword == false) {
            alert('Must input an email and valid password')
        }
        
    }

    const handleOnChange = (e) => {
        setPassword(e.target.value)
    }

    const handleOnFocus = () => {
        setPwdRequirements(true)
    }

    const handleOnBlur = () => {
        setPwdRequirements(false)
    }

    const handleOnKeyUp = (e) => {
        const {value} = e.target
        const capsLetterCheck = /[A-Z]/.test(value)
        const numberCheck = /[0-9]/.test(value)
        const pwdLengthCheck = value.length >= 8
        const specialCharCheck = /[!@#$%^&*]/.test(value)
        setChecks({
            capsLetterCheck,
            numberCheck,
            pwdLengthCheck,
            specialCharCheck
        })
    }


    return (
        <div className='signup'>
            <h2>Sign Up for Revere Network</h2>
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
            onChange={handleOnChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onKeyUp={handleOnKeyUp}
            />
            {pwdRequirements ? <PWDRequirements 
                capsLetterFlag={checks.capsLetterCheck ? 'valid' : 'invalid'}
                numberFlag={checks.numberCheck ? 'valid' : 'invalid'}
                lengthFlag={checks.pwdLengthCheck ? 'valid' : 'invalid'}
                specialCharFlag={checks.specialCharCheck ? 'valid' : 'invalid'}
                /> : null}
            <button className="button block" aria-live="polite" onClick={handleSignUp}>
            Sign Up!
            </button>
        </div>
    )
}