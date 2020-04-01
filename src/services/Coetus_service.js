import axios from 'axios'

const baseURL=('https://coetus.herokuapp.com/api/users')

export const PutUser = (name, surname, username, password, email)=>{
    return axios.put(`${baseURL}`,{ name, surname, username, password, email})
}

export const PostUser = (username, password)=>{
    return axios.post(`${baseURL}` , {username , password})
}