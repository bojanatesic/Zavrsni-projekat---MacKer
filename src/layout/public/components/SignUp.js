import React, { useState } from 'react'
import { getToken, setId} from '../../../services/Auth_service'
import { useHistory } from 'react-router-dom'
import { PutUser } from '../../../services/Coetus_service'
import './EntryPage.css'
import Nav from '../../../Nav'



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
            return alert('Inputs cannot be empty!')
        }
        if (password !== confirmPassword) {
            return alert("Passwords do not match");
        }

        PutUser(name, surname, username, password, email).then((res) => {
            getToken(res.data.token)
            setId(res.data.user.user_id)
            console.log(res)
            // setToken(res.data.token)
            // console.log(res)
            history.push('login')
        }).catch(() => {
            console.log('something wrong')
        })
    }

    return (
        <>
        <Nav/>
        <div className="form-style-8">
            <h2>Register to macker</h2>
            <form onSubmit={handleSignUp}>
                <input type="text" name="field1" placeholder="First name" onChange={e => setName(e.target.value)} />
                <input type="text" name="field2" placeholder="Last name" onChange={e => setSurname(e.target.value)} />
                <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" pattern="(?=.*\d)(?=.*[A-Z]).{6,}" onChange={e => setPassword(e.target.value)} />
                <p className="p-signup">*must contain 6 or more characters that are of at least one number and one uppercase letter</p>
                <input type="password" placeholder="Confirm password" onChange={e => setConfirmPassword(e.target.value)} />
                <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                <input type="submit" value="Register" />
            </form>
        </div>
        </>
    )
}

