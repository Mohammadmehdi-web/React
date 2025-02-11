import React from 'react'
import { Link } from 'react-router-dom';
import logo2 from './images/logo2.png'

function Nav() {
  return (
    <nav style={navbarStyle}>
      
      <ul style={listStyle}>
      <div style={logo}> <img src={logo2} alt="" /></div>
        <li style={listItemStyle}>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/about" style={linkStyle}>About</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/inventions" style={linkStyle}>Inventions</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/department" style={linkStyle}>Department</Link>
        </li>
        <li style={listItemStyle}>
          <Link to="/MarComLab" style={linkStyle}>MarComLab</Link>
        </li>
        
      </ul>
    </nav>
  )
}


// Add styles for your navbar (just an example)
const navbarStyle = {
    backgroundColor: '#333',
    padding: '10px 0',
  };
  
  const listStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', // corrected this line
    margin: '0',
    padding: '0',
  };
  
  
  const listItemStyle = {
    margin: '0 15px',
  };
  
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  const logo={

  }
export default Nav