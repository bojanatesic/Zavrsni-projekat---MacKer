import React, { useState } from 'react';
import { getCatImage } from '../../../services/Cat_service';
import CatImage from './cats/CatImage';
import { getRandomDogImage } from '../../../services/Dog_service';
import DogImage from './dogs/DogImage';
import './About.css'
import Nav from '../../../Nav';

const About = () => {
    const [catPicture, setCatPicture] = useState([])
    const [dogPicture, setDogPicture] = useState([])

    const showMeSomeCats = () => {
        getCatImage().then(data => {
            setCatPicture(data.data[0].url);
        });
    }

    const showMeSomeDogs = () => {
        getRandomDogImage().then(response => {
            setDogPicture(response.message);
            console.log(response)
        });
    }

    return (
        <>
            <Nav />
            <div className="div-text">
                <p>Welcome to the page for lovers of cats and dogs.
                Here you can see pictures of your favorite four-legged furry friends.
                And on the next pages you can find more info about them.
           Hope you will have fun!</p>
            </div>
            <div className="div-img">
                <div className="div-cat">
                    <button onClick={() => showMeSomeCats()}>Show me some kitties </button>
                    <CatImage catPicture={catPicture} />
                </div>
                <div className="div-dog">
                    <button onClick={() => showMeSomeDogs()}>Show me some doggies</button>
                    <DogImage dogPicture={dogPicture} />
                </div>
            </div>
        </>
    )
}

export default About