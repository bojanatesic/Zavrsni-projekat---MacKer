import React from 'react'

const DogImage = ({ dogPicture }) => {
    return (
        <div>
        <img src={dogPicture.message} style={{width:100, height:100}} alt='' />
        </div>
    )
}
export default DogImage