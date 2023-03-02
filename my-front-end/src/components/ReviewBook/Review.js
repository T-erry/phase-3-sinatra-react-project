import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Review.css";

// Getting a single book 

function Review() {
  const { id } = useParams();
  const [book, setBook] = useState([]);
  const [reviews, setReviews] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`http://localhost:9292/books/${id}`)
      .then((r) => r.json())
      .then((data) => setBook(data));
  },[id]);
  
  function handleDeleteClick() {
    fetch(`http://localhost:9292/deletebook/${id}`, {
      method: "DELETE",
    });
    navigate("/");
    document.location.reload();
  }

  return (
    <div id="review">
      <div id="reviewCard" className="card p-5">
        <div id="viewBook" className="card mb-3" style={{ maxWidth: "540px" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={book.image}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">Title: {book.title}</h4>
                <p className="card-text">Author: {book.author}</p>
                <p className="card-text">Price: {book.price}</p>
                <Link to={`/editbook/${id}`} id="addButtons" className="btn btn-secondary" style={{fontSize:'2rem', marginBottom: '50px'}}>Edit Book </Link>
                <button type="submit" 
                className="btn btn-secondary"
                onClick={handleDeleteClick}
                >
                 Delete Book
             </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;