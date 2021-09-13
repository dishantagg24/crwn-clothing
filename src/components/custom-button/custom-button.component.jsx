import React from 'react'

import './custom-button.styles.scss'

const CustomButton = ({children, isGoogleSignIn, ...otherProps}) => (
    <div>
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} 
            {...otherProps}
        >
            {children}
        </button>
    </div>
)

export default CustomButton;