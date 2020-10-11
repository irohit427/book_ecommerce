import React from 'react'
import './Navbar.scss';
import Button from 'react-bootstrap/Button';


const Navbar = () => {
  return (
    <header>
      <div className="logo">
        <span id="first">Book</span>
        <span id="last">Store</span>
      </div>
      <div>
      <ul>
        <li>Home</li>
        <li>Books</li>
        <li>Magazines</li>
        <li>Blogs</li>
      </ul>
      </div>
      <Button type="primary" size="sm"
        style={{ background: "#ee434c", border: '#ee434c', marginRight: '40px'}}>
        Sign In
      </Button>
    </header>
  )
}

export default Navbar;