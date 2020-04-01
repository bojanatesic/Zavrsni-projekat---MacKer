import React from 'react'
import {deleteToken} from '../../../services/Auth_service'
import { useHistory } from 'react-router-dom';


const Logout = () => {
    const history = useHistory();
    return (
        <div>
        <button onClick={() =>{
            if (window.confirm('blaaaa')){
            deleteToken().then(() => {
                    history.push('/');
                })
            } else {
                history.push('/logout')
            } }}>LogOut</button>
</div>
)
}

export default Logout