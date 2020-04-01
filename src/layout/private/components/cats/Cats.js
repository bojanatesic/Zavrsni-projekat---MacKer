import React, { useState, useEffect } from 'react';
import './CatList.css'
import { getCatBreeds, getCatImage, postCatImage } from '../../../../services/Cat_service';
import InputCat from './InputCat';
import UploadImage from './Upload';
import SelectCat from './SelectCat';
import CatList from './CatList';
import CatImage from './CatImage';
import PaginationCat from './PaginationCat';

const Cats = () => {
    const [cats, setCats] = useState([]);
    const [subArray, setSubArray] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const catPerPage = 20
    const [catPicture, setCatPicture] = useState([])
    const [file, setFile] = useState()
     const [bla, setBla] = useState ([])

    const handleFile = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0])
            console.log(e.target.files[0])
        }
    }

    const handleUpload = (e) => {
        let formdata = new FormData()
        formdata.append('image', file)
        postCatImage(formdata)
        console.log('pera')
    }


    useEffect(() => {
        getCatBreeds().then(data => {
            setCats(data)
             setBla(data)
        })
    }, [])

    const showMeSomeCats = () => {
        getCatImage().then(data => {
            setCatPicture(data.data[0].url);
        });
    }
    const handleChange = (e) => {
        let selected = e.target.value;
        if (selected === "all") {
            setBla(cats);
        } else {
            let filtered = cats.filter(el => el.origin === selected);
            setBla(filtered)
        }
    }

    const setPage = (page) => {
        setCurrentPage(page)
        return
    }

    const handleInput = (e) => {
        if(e.target.value === ''){
           return setSubArray([])
        }
        let filteredInput = cats.filter(el => el.name.includes(e.target.value));
        setSubArray(filteredInput)
        console.log(subArray)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    return (
        <div>
            <SelectCat handleChange={handleChange} cats={cats} />
            <UploadImage handleFile={handleFile} handleUpload={handleUpload} />
            <CatImage catPicture={catPicture} />
            <button onClick={() => showMeSomeCats()}>Next Cat</button>
            <InputCat handleInput={handleInput} />
            {subArray.length > 0 ? <CatList cats={subArray} currentPage={1} catPerPage={catPerPage} />
                : <CatList cats={bla} currentPage={currentPage} catPerPage={catPerPage} />}
            <PaginationCat catPerPage={catPerPage} cats={cats} setPage={setPage} />
            <button onClick={() => { scrollToTop() }}>Top</button>

        </div>
    )
}
export default Cats