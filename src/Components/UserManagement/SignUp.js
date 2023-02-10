import { supabase } from '../../Common/supabaseClient'
import { useState } from 'react'
import './SignUp.css'
import { PWDRequirements } from './PWDRequirements'
import { Mosaic } from 'react-loading-indicators'

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
    const [passwordValid, setPasswordValid] = useState(false)
    
    const validatePassword = () => {
        if (checks.capsLetterCheck === true 
            && checks.numberCheck === true
            && checks.pwdLengthCheck === true
            && checks.specialCharCheck === true) {
                setPasswordValid(true) 
            }
        else {
            setPasswordValid(false)
        }
    }

    const handleSignUp = async () => {
        console.log('clicked')
        validatePassword()
        if (userEmail !== '' 
            && passwordValid === true ) {
            try {
                console.log('trying to signup')
                setLoading(true)
                const {error} = await supabase.auth.signUp({
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
        else if (userEmail == '' || passwordValid == false) {
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
        const pwdLengthCheck = value.length >= 12
        const specialCharCheck = /[!@#$%^&*]/.test(value)
        setChecks({
            capsLetterCheck,
            numberCheck,
            pwdLengthCheck,
            specialCharCheck
        })
    }

    const setContent = () => {
        if (loading === true) {
            return <Mosaic size={'large'}/>
        }
        else {
            return (<div className='signup-wrapper' >
                <div className='form-stuff' >
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
                </div>
                <div className='button-container' >
                    <button className="button block" aria-live="polite" onClick={() => handleSignUp()}>
                    Sign Up!
                    </button>
                </div>
            </div>)
        }
    }

    return (
        <div className='signup'>
            <h2>Sign Up for Revere Network</h2>
            {setContent()}
        </div>
    )
}