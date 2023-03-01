import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
      fetch("http://localhost:9292/books")
      .then((res)=> res.json())
      .then((data)=> setBooks(data))
  },[])
  
  return (
   <div className="container">
    <h2>Welome Home</h2>
    <BrowserRouter>
    <NavBar/>
    <Routes>
   <Route path="/" element={<Navigate to="/home"/>} />
    <Route path="/" element={<HomePage books={books}/>} />
      </Routes>
    </BrowserRouter>
  
  
  
   </div>
   
    
   
  
        
      
  );
}

export default App;