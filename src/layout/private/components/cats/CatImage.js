import React from 'react'

const CatImage = ({ catPicture }) => {
    return (
        <div>
            <img src={catPicture} style={{ width: 200, height: 200, marginRight:100}} alt='' />
        </div>
    )
}
export default CatImage