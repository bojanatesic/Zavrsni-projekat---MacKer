import React from 'react'

const Dog = ({ dog }) => {
    return (
        <div className="cat-dog">
            <p>{`Name: ${dog.name}`}</p>
            <p>{`Life span: ${dog.life_span}`}</p>
            <p>{`Bred for: ${dog.bred_for}`}</p>
            <p>{`Breed group: ${dog.breed_group}`}</p>
            <p>{`Dog's temperament: ${dog.temperament}`}</p>
        </div>
    )
}

export default Dog
