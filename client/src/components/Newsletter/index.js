import React from 'react'
import { Input, Button } from 'antd';
import Brand from './Brand.png'
import './Newsletter.scss'
const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-brand">
        <img src={Brand} alt="newsletter-brand"/>
      </div>
      <div className="newletter-form">
        <p>Subscribe to our newsletter</p>
        <div className="newsletter-input">
          <Input placeholder="Basic usage" style={{ width: '200px', marginRight: '8px'}}/>
          <Button type="primary"
            style={{ background: "#ee434c", border: '#ee434c', borderRadius: '3px'}}>
            Sign In
          </Button>
        </div>
        <br/>
        <span>No spam, we promise</span>
      </div>
    </div>
  )
}

export default Newsletter;