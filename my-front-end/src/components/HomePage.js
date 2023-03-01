import React from 'react'
import Book from './Book'


function HomePage({books}) {
    
const bookArray = books.map((book)=>{
    return( 
    <Book key={book.id} book={book}/>
    )
})

  return (
    
  <div className="row">
     <div className="col-sm-4">
     {bookArray}
     </div>
    
  </div>

  )
}

export default HomePage