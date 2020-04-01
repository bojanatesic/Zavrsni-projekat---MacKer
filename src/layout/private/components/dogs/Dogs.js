import React, { useState, useEffect } from 'react';
import { getDogBreeds, getRandomDogImage } from '../../../../services/Dog_service';
import DogImage from './DogImage';
import DogList from './DogList';
import InputDog from './InputDog'
import PaginationDog from './PaginationDog'
import SelectDog from './SelectDog'

const Dogs = () => {

    const [dogs, setDogs] = useState([]);
    const [dogPicture, setDogPicture] = useState([])
    const [subArray, setSubArray] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [dogPerPage] = useState(20)


    useEffect(() => {
        getDogBreeds().then(data => {
            setDogs(data);
            // setSubArray(data)
            // console.log(data)
        })
    }, [])

    const setPage = (page) => {
        setCurrentPage(page)
        return
    }

    const handleInput = (e) => {
        // if (e.target.value === ''){
        //     setSubArray([]);
        //     return
        //   }
        let filteredInput = dogs.filter(el => el.name.includes(e.target.value));
        setSubArray(filteredInput)
    }


    const showMeSomeDogs = () => {
        getRandomDogImage().then(response => {
            setDogPicture(response);
        });
    }

    const handleChange = (e) => {
        let selected = e.target.value;
        if (selected === "all") {
            setSubArray(dogs);
        } else {
            let filtered = dogs.filter(el => el.breed_group === selected);
            setSubArray(filtered)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div>
            <SelectDog handleChange={handleChange} dogs={dogs} />
            <DogImage dogPicture={dogPicture} />
            <button onClick={() => showMeSomeDogs()}>Next Dog</button>
            <InputDog handleInput={handleInput} />
            {subArray.length > 0 ? <DogList dogs={subArray} currentPage={1} dogPerPage={dogPerPage} /> :
                <DogList dogs={dogs} currentPage={currentPage} dogPerPage={dogPerPage} />}
            <PaginationDog dogPerPage={dogPerPage} dogs={dogs} setPage={setPage} />
            <button onClick={() => { scrollToTop() }}>Top</button>
        </div>
    )
}

export default Dogs