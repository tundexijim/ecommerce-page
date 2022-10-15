import React from 'react'
import {useCart} from 'react-use-cart'
import clear from '../../assets/icon-delete.svg'
import './Cart.css'
function Cart(props) {
    const {
        isEmpty,
        items,
        emptyCart
      } = useCart();
      return(
        <div className='cart__container'>
              <h1>Cart</h1>
        {isEmpty ? (
        <div className='emptycart'>
            <p className='empty'> Your cart is Empty </p>
            </div>):
        
            (<div className='incart'>
            {items.map((p, index) => (<div key={index}><div className="content">
                <img className='imgcart' src={props.image} alt='imgcart' />
                <p>Fall Limited Edition Sneakers ${p.price} x {p.count} <span>${parseInt(p.price)*p.count}.00</span></p>
                <img src={clear} onClick={() => emptyCart()} alt='clear' />
            </div>
            <button className='btn'>Checkout</button>
            </div>))}
            </div>
        )
        }
        </div>
      )
}

export default Cart