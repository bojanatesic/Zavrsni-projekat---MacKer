import React from 'react'

const DogImage = ({ dogPicture }) => {
    return (
        <div>
            <img src={dogPicture} style={{ width: 200, height:200, marginLeft:20}} alt='' />
        </div>
    )
}
export default DogImage