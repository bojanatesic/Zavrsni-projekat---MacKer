import React from 'react'

const CatImage = ({ catPicture }) => {
    return (
        <div>
            <img src={catPicture} style={{ width: 208, height: 220}} alt='' />
        </div>
    )
}
export default CatImage