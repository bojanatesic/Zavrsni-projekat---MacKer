import React from 'react'

const InputCat = ({ handleInput }) => {
    return (

        <input type="text" placeholder="Search by name..." onChange={(e) => handleInput(e)} />
    )
}

export default InputCat
