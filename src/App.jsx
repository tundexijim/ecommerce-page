import React, {useState} from 'react'
import {CartProvider} from "react-use-cart"
import impth1 from './assets/image-product-1-thumbnail.jpg'
import impth2 from './assets/image-product-2-thumbnail.jpg'
import impth3 from './assets/image-product-3-thumbnail.jpg'
import impth4 from './assets/image-product-4-thumbnail.jpg'
import imp1 from  './assets/image-product-1.jpg'
import imp2 from './assets/image-product-2.jpg'
import imp3 from './assets/image-product-3.jpg'
import imp4 from './assets/image-product-4.jpg'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Cart from './components/cart/Cart'
function App() {
  const [Value, setValue] = useState(0)
  const Pictures = [
    {imp: imp1, 
    impth: impth1},
    {imp: imp2, 
      impth: impth2},
      {imp: imp3, 
        impth: impth3},
        {imp: imp4, 
          impth: impth4},
  ]
  const myitems = [
    {id: 1, 
    count: Value,
    price: "125.00",
    }
  ]
  function IncreaseValue(){
    setValue(Value+1)
  }
  function DecreaseValue(){
    setValue(Value-1)
  }
 
  return (
    <>
    <CartProvider>
    <Header ><Cart image={imp1}/></Header>
    <Body Images={Pictures} Products={myitems} setIncreament={IncreaseValue} setDecreament={DecreaseValue}/>
    </CartProvider>
    </>
  )
}

export default App