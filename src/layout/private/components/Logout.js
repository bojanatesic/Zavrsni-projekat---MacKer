import React from 'react'
import { deleteToken } from '../../../services/Auth_service'
import { useHistory } from 'react-router-dom';
import Nav from '../../../Nav';
import './Logout.css'

const Logout = () => {
    const history = useHistory();
    return (
        <>
            <Nav />
            <div className="logout">
                <p><b>Thanks for visiting. Hope you had fun. See you soon!</b></p>
                <button onClick={() => {
                    if (window.confirm('Are you sure you want to log out?')) {
                        deleteToken().then(() => {
                            history.push('/');
                        })
                    } else {
                        history.push('/logout')
                    }
                }}>Log Out</button>
            </div>
        </>
    )
}

export default Logout