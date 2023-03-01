import React from 'react'
// import { Link } from 'react-router-dom'

function Book({book}) {
  return (
    <div className="card" style={{width: "18rem;"}}>
  <img src={book.image} className="card-img-top" alt={""}/>
  <div className="card-body">
    <h5 className="card-title">Title: {book.title}</h5> 
    <p className="card-text">Author: {book.author}</p>
    <p className="card-text">Price {book.price}</p>
    {/* <Link className='btn' to={`/pokemon/${book.id}`}>View</Link> */}
</div>
    </div> 
  )
}

export default Book