import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element = {<Home />} />
        <Route path="/blog" element ={<Blog />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      
    </BrowserRouter>
  )
}