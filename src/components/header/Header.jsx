import React, { useState, useEffect, useRef } from 'react'
import logo from '../../assets/logo.svg'
import cart from '../../assets/icon-cart.svg'
import avatar from '../../assets/image-avatar.png'
import './header.css'
import {useCart} from 'react-use-cart'
function Header(props) {
  const [showcart, Setshowcart] = useState(false);
  const {items, isEmpty} = useCart();
  const ref = useRef();
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (showcart && ref.current && !ref.current.contains(e.target)) {
        Setshowcart(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [showcart])
  return (
    <div className="header__container">
    <div className='header'>
      <div className="links">
    <div className="logo">
    <img src={logo} alt='img' />
    </div>
    <ul className='menu'>
    <li><a href='#'>Collections</a></li>
    <li><a href='#'>Men</a></li>
    <li><a href='#'>Women</a></li>
    <li><a href='#'>About</a></li>
    <li><a href='#'>Contact</a></li>  
    </ul>
    </div>
    <div className="avacart">
      <div ref={ref}>
        <span className={isEmpty ? '' : 'cartcount'}>{isEmpty ? '' : items[0].count}</span>
        <img src={cart} className='cart' onClick={()=>Setshowcart(!showcart)} alt='img' />
        {showcart && props.children}
        </div>
      <img src={avatar} className='avatar' alt='img' />
    </div>
    </div>
    </div>
  )
}

export default Header