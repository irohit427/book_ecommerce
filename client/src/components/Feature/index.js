import React from 'react'
import './Feature.scss'
import Chat from './chat.svg'
import CreditCard from './credit-card.svg'
import GiftBag from './gift-bag.svg'
import ShippingTruck from './shipping-truck.svg'

const Feature = () => {
  return (
    <div className='feature-container'>
      <div className='feature-item'>
        <img src={ShippingTruck} alt='Shipping' />
        <p>Free Shipping</p>
        <span>Delivery in 3 days</span>
      </div>
      <div className='feature-item'>
        <img src={GiftBag} alt='Shipping' />
        <p>Gifts and Sales</p>
        <span>Gift with every order</span>
      </div>
      <div className='feature-item'>
        <img src={Chat} alt='Shipping' />
        <p>Online Support</p>
        <span>Online Support 24/7</span>
      </div>
      <div className='feature-item'>
        <img src={CreditCard} alt='Shipping' />
        <p>Secure Payment</p>
        <span>Fast and secure payments</span>
      </div>      
    </div>
  )
}

export default Feature;