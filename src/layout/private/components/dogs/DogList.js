import React from 'react'
import Dog from './Dog'

const DogList = ({ dogs, currentPage, dogPerPage }) => {
    const lastPost = currentPage * dogPerPage
    const firstPost = lastPost - dogPerPage
    const currentPost = dogs.slice(firstPost, lastPost)
    return (
        <div id="container">
            {currentPost.map(element => <Dog dog={element} key={element.id} />)}
        </div>
    )
}

export default DogList