import React from 'react'
import { LogIn } from './LogIn'
import { SignUp } from './SignUp'
import './EntryPage.css'

const EntryPage = () => {

    return (
        <div className="macker">
            <h3 className="mackerh3">MacKer</h3>
            <LogIn />
            <SignUp />
        </div>
    )
}

export default EntryPage