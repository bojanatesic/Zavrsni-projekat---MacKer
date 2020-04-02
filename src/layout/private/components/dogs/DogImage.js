import React from 'react'

const DogImage = ({ dogPicture }) => {
    return (
        <div>
            <img src={dogPicture} style={{ width: 220, height:220}} alt='' />
        </div>
    )
}
export default DogImage