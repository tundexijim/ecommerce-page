import React, { useState, useEffect, useRef } from 'react'
import logo from '../../assets/logo.svg'
import cart from '../../assets/icon-cart.svg'
import avatar from '../../assets/image-avatar.png'
import './header.css'
import {useCart} from 'react-use-cart'
function Header(props) {
  const [showcart, Setshowcart] = useState(false);
  const [showmenu, Setshowmenu] = useState(false)
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
    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg" onClick={()=>Setshowmenu(true)}><path d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z" fill="#69707D" fill-rule="evenodd"/></svg>
    <img src={logo} alt='img' />
    <ul className={showmenu ? 'menu' : 'menu hide'}>
    <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" onClick={()=>Setshowmenu(false)}><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fill-rule="evenodd"/></svg>
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