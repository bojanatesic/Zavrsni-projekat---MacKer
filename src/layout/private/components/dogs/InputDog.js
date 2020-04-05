import React from 'react'

const InputDog = ({ handleInput }) => {
    return (
        <input type="text" placeholder="Search by name..." onChange={(e) => handleInput(e)} />
    )
}

export default InputDog
