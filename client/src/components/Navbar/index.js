import React, {useState} from 'react'
import './Navbar.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'


const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Button type="primary" size="sm" onClick={handleShow}
        style={{ background: "#ee434c", border: '#ee434c', marginRight: '40px'}}>
        Sign In
      </Button>
    </header>
  )
}

export default Navbar;