import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <div>
        <button 
            className={`${inverted ? 'inverted' : ''} ${
                isGoogleSignIn ? 'google-sign-in' : ''
                } custom-button`} 
            {...otherProps}
        >
            {children}
        </button>
    </div>
)

export default CustomButton;