import React from 'react'

const CatImage = ({ catPicture }) => {
    return (
        <div>
        <img src={catPicture} style={{width:100, height:100}}  alt='' />
        </div>
        )
    }
 export default CatImage