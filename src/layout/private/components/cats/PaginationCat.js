import React from 'react'

const PaginationCat = ({catPerPage, cats, setPage})=>{
    const pages = [];

      for (let i = 1; i <= Math.ceil(cats.length/catPerPage); i++) {
        pages.push(i);
      }
  
    return (
        <div>
        {pages.map(page => (
        <button onClick={() =>{ setPage(page)}} key={page}>{page}</button>))}
      </div>

    )
}

export default PaginationCat