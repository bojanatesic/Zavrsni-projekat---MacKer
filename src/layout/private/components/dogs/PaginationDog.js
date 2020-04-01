import React from 'react'

const PaginationDog = ({dogPerPage, dogs, setPage})=>{
    const pages = [];

      for (let i = 1; i <= Math.ceil(dogs.length/dogPerPage); i++) {
        pages.push(i);
      }
  
    return (
        <div>
        {pages.map(page => (
        <button onClick={() =>{ setPage(page)}} key={page}>{page}</button>))}
      </div>

    )
}

export default PaginationDog