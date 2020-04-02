import React from 'react'

const SelectCat = ({ cats, handleChange }) => {
    let selectArray = []
    cats.forEach(el => {
        if (!selectArray.includes(el.origin)) {
            selectArray.push(el.origin)
        }
    })
    let options = selectArray.map((data, index) =>
        <option value={data} key={index}>{data}</option>
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

export default SelectCat

