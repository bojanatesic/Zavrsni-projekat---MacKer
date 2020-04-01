import React from 'react'


const UploadImage = ({handleFile, handleUpload}) => {
    return (
        <form>
        <input type="file" placeholder="Add Image..."  onChange={(e) => handleFile(e)} />
        <button onClick={(e) => handleUpload(e)} >Upload</button>
        </form>
    )
}

export default UploadImage
