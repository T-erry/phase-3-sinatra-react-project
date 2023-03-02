import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Review from "./components/ReviewBook/Review";
import HomePage from "./components/Pages/HomePage";
import NavBar from "./components/Navbar/NavBar";
import { useEffect, useState } from "react";
import CreateBooks from "./components/CreateBook/CreateBook";
import  EditBook from "./components/UpdateBook/UpdateBook"

function App() {
  const [books, SetBooks] = useState([])


  useEffect(() => {
      fetch("http://localhost:9292/books")
      .then((res)=> res.json())
      .then((data)=> SetBooks(data))
  },[])
   
  return (
   <div className="container">
    <h2>Welome Home</h2>
    <BrowserRouter>
    <NavBar/>
    <Routes>
   <Route path="/" element={<Navigate to="/home"/>} />
    <Route path="/home" element={<HomePage books={books}/>} />
    <Route path="/createbook" element={<CreateBooks/>} />
    <Route path="/book/:id"  element={<Review />} />
    <Route path="/updatebook/:id"  element={<EditBook />} />
      </Routes>
    </BrowserRouter>
  
  
  
   </div>
   
    
   
  
        
      
  );
}

export default App;