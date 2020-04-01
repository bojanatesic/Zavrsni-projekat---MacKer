import React from 'react'

const Cat = ({ cat }) => {
    return (
        <div className="cat-dog">
            <p>{`Name: ${cat.name}`}</p>
            <p>{`Life span: ${cat.life_span}`}</p>
            <p>{`Cat's origin: ${cat.origin}`}</p>
            <p>{`Cat's temperament: ${cat.temperament}`}</p>
            <p><a href={cat.wikipedia_url} target="_blank" rel="noopener noreferrer"> Find more about this cat</a></p>
        </div>
    )
}

export default Cat
