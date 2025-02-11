import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav.jsx'; 
import Home from './Components/Home.jsx';
import Contact from './Components/Contact.jsx';
import Department from './Components/Department.jsx';
import About from './Components/About.jsx';
import Inventions from './Components/Inventions.jsx';
import MarComLab from './Components/MarComLab.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <>
      <Nav />  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Inventions" element={<Inventions />} />
        <Route path="/Department" element={<Department />} />
        <Route path="/MarComLab" element={<MarComLab />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
