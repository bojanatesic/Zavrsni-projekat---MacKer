import React from 'react'
import { LogIn } from './LogIn'
import { SignUp } from './SignUp'
import './EntryPage.css'
import Nav from '../../../Nav'

const EntryPage = () => {

    return (
        <div className="macker">
            <Nav />
            <h3 className="mackerh3">MacKer</h3>
            <LogIn />
            <SignUp />
        </div>
    )
}

export default EntryPage