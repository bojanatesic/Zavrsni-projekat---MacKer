import React from 'react'
import Cat from './Cat'

const CatList = ({ cats, currentPage, catPerPage }) => {
    const lastPost = currentPage * catPerPage
    const firstPost = lastPost - catPerPage
    const currentPost = cats.slice(firstPost, lastPost)
    return (
        <div id="container">
            {currentPost.map(element => <Cat cat={element} key={element.id} />)}
        </div>
    )
}

export default CatList