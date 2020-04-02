import React from 'react'

const SelectDog = ({ dogs, handleChange }) => {
    let selectArray = []
    dogs.forEach(el => {
        if (!selectArray.includes(el.breed_group) && el.breed_group!== undefined && el.breed_group!=="") {
            selectArray.push(el.breed_group)
        }
    })
    let options = selectArray.map((data,index) =>
        <option value={data} key={index} >{data}</option>
    )
    return (
        <>
            <select onChange={handleChange}>
                <option value="all">Select</option>
                {options}
            </select>
        </>
    )
}

export default SelectDog

