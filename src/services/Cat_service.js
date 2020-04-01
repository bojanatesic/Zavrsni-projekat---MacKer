import axios from 'axios'

const baseCatsUrl = ('https://api.thecatapi.com/v1')

export const getCatBreeds = ()=> {
    return axios.get (`${baseCatsUrl}/breeds`).then(response => response.data)
}

export const getCatImage = ()=> {
    return axios.get (`${baseCatsUrl}/images/search?format=json`).then(response => response)
}

export const postCatImage = ()=> {
    return axios.post (`${baseCatsUrl}/images/upload`).then(response => response)
}

