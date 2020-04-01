import React, { useState } from 'react'
import { getToken, setToken } from '../../../services/Auth_service'
import { useHistory } from 'react-router-dom'
import { PutUser } from '../../../services/Coetus_service'



export const SignUp = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const history = useHistory();


    const handleSignUp = (e) => {
        e.preventDefault()
        if (name.trim() === '' || surname.trim() === '' || email.trim() === ''
            || username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('Inputs cannot be empty!')
            return
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return
        }
        PutUser(name, surname, username, password, email).then((res) => {
            getToken(res.data.token)
            console.log(res)
            setToken(res.data.token)
            console.log(res)
            history.push('/about') 
        }).catch(() => {
            console.log('something wrong')
        })
    }

    return (

        <form onSubmit={handleSignUp}>
            <input type="text" placeholder="First name" onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Last name" onChange={e => setSurname(e.target.value)} />
            <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm password" onChange={e => setConfirmPassword(e.target.value)} />
            <input type="submit" value="SignUp" />
        </form>
    )
}

