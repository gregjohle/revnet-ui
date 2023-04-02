import React from 'react'
import "./PWDRequirements.css"

export const PWDRequirements = ({ capsLetterFlag, numberFlag, lengthFlag, specialCharFlag }) => {
  return (
    <div className='validate-password'>
        <p className={capsLetterFlag}>
            Must contain 1 capital letter
        </p>
        <p className={numberFlag}>
            Must contain 1 number
        </p>
        <p className={lengthFlag}>
            Must be at least 12 characters long
        </p>
        <p className={specialCharFlag}>
            Must contain 1 special character
        </p>
    </div>
  )
}
