import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./Home.jsx"
import Login from "./Login.jsx"
import Quiz from "./Quiz.jsx"
import Register from "./Register.jsx"
import Result from "./Result.jsx"

import './App.css'

function App() {


 return(

   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
 )
}

export default App
