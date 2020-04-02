import axios from 'axios'

export const getDogBreeds = ()=> {
    return axios.get ('https://api.thedogapi.com/v1/breeds').then(response => response.data)
}


export const getRandomDogImage = ()=> {
    return axios.get ('https://dog.ceo/api/breeds/image/random').then(response => response.data)
}

