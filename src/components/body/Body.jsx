import React, {useState} from 'react'
import { useCart } from 'react-use-cart'
import './body.css'
import plus from '../../assets/icon-plus.svg'
import minus from '../../assets/icon-minus.svg'
import next from '../../assets/icon-next.svg'
import previous from '../../assets/icon-previous.svg'
function Body(props) {
  const {addItem} = useCart()
  const [Imageindex, setImageindex] = useState(0); 
  const [Iindex, setIindex] = useState(0) 
  const [ShowGallery, setShowGallery] = useState(false);
  return (
  <div className='body__container'>
    <div className="gallery">
       <div className="selectedimg">
        <img src={previous} alt='previous' className='previous' onClick={() => {setImageindex((prev) => (prev !== 0 ? prev - 1 : 3));}}/>
        <img src={props.Images[Imageindex].imp} alt='selected' className='selected' onClick={() => setShowGallery(true)}/>
        <img src={next} alt='next' className='next' onClick={() => {setImageindex((prev) => (prev !== 3 ? prev + 1 : 0));}}/>
        </div>
        <div className="imgcontainer">
          {props.Images.map((obj, index)=> (<img style={{border: Imageindex === index ? "2px solid #FF7E1B" : ""}} className={Imageindex === index? "thumbnail":""} src={obj.impth} onClick={()=> setImageindex(index)} key={index} alt='others'/>))}
        </div>
      </div>
    {props.Products.map((p, index) => (<div className="text" key={index}>
      <h1>Sneaker Company</h1>
       <h2>Fall Limited Edition Sneakers</h2>
       <p className='comment'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
       <div className='amount'>
        <p className='price'>${p.price}<span>50%</span></p>
        <span className='oldprice'>$250.00</span>
        </div>
        <div className="addtocart">
        <div className="quantity">
        <img src={minus} onClick={() => {if(p.count > 0) props.setDecreament()}} alt='minus' />{p.count}<img src={plus} onClick={props.setIncreament} alt='plus' />
        </div>
        <button className='btn' onClick={() =>{if (p.count>0) addItem(p)}}><svg width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fill-rule="nonzero"/></svg>Add to cart</button>
        </div>
    </div>))}
    {ShowGallery ? <div className='layover'>
      <svg width="20" height="15" xmlns="http://www.w3.org/2000/svg" onClick={() => setShowGallery(false)}><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#ffffff" fill-rule="evenodd"/></svg>
      <div className="gallery">
       <div className="selectedimg">
        <img src={previous} alt='previous' className='previous' onClick={() => {
          setIindex((prev) => (prev !== 0 ? prev - 1 : 3));}}/>
          <img src={props.Images[Iindex].imp} alt='selected' className='selected'/>
          <img src={next} alt='next' className='next' onClick={() => {
          setIindex((prev) => (prev !== 3 ? prev + 1 : 0));}}/>
          </div>
        <div className="imgcontainer">
          {props.Images.map((obj, index)=> (<div><img style={{border: Iindex === index ? "2px solid #FF7E1B" : ""}} className={Imageindex === index? "thumbnail fade":"thumbnail"} src={obj.impth} onClick={()=> setIindex(index)} key={index} alt='others'/></div>))}
        </div>
      </div>
      </div>
       : ""}
  </div>
    
  )
}

export default Body