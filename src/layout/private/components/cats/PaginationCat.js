import React from 'react'
import './CatList.css'

const PaginationCat = ({ catPerPage, cats, setPage }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(cats.length / catPerPage); i++) {
    pages.push(i);
  }

  return (
    <>
      {pages.map(page => (
        <button onClick={() => { setPage(page) }} key={page} >{page}</button>))}
    </>
  )
}

export default PaginationCat