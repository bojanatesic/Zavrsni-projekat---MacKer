import React from 'react'
import { LogIn } from './LogIn'
import { SignUp } from './SignUp'
import './EntryPage.css'

const EntryPage = () => {

    return (
<>
        <h3 id="heading">MacKer</h3>
            <SignUp />
            <LogIn />
        </>
    )
}

export default EntryPage