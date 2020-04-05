import React, { useState, useEffect } from 'react';
import { getDogBreeds } from '../../../../services/Dog_service';
import DogList from './DogList';
import InputDog from './InputDog'
import PaginationDog from './PaginationDog'
import SelectDog from './SelectDog'
import Nav from '../../../../Nav';

const Dogs = () => {

    const [dogs, setDogs] = useState([]);
    const [subArray, setSubArray] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const dogPerPage = 12
    const [subChangeArray, setSubChangeArray] = useState([])

    useEffect(() => {
        getDogBreeds().then(data => {
            setDogs(data);
            setSubChangeArray(data)
        })
    }, [])

    const setPage = (page) => {
        setCurrentPage(page)
        return
    }

    const handleInput = (e) => {
        if (e.target.value === '') {
            return setSubArray([]);
        }
        let filteredInput = dogs.filter(el => el.name.includes(e.target.value));
        setSubArray(filteredInput)
    }

    const handleChange = (e) => {
        let selected = e.target.value;
        if (selected === "all") {
            setSubChangeArray(dogs);
            setCurrentPage(1)
        } else {
            let filtered = dogs.filter(el => el.breed_group === selected);
            setSubChangeArray(filtered)
            setCurrentPage(1)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <>
            <Nav />
            <div>
                <div className="div-all">
                    <div className="div-input">
                        <p><b>Find more info about your favorite dog</b></p>
                        <InputDog handleInput={handleInput} />
                    </div>
                    <div className="div-select">
                        <p><b>Discover dogs by its breed group</b></p>
                        <SelectDog handleChange={handleChange} dogs={dogs} />
                    </div>
                </div>
                {subArray.length > 0 ? <DogList dogs={subArray} currentPage={1} dogPerPage={dogPerPage} /> :
                    <DogList dogs={subChangeArray} currentPage={currentPage} dogPerPage={dogPerPage} />}
                <div className="pagination">
                    <PaginationDog dogPerPage={dogPerPage} dogs={dogs} setPage={setPage} />
                </div>
                <button onClick={() => { scrollToTop() }} className="top-btn">Go to the top of the page</button>
            </div>
        </>
    )
}

export default Dogs