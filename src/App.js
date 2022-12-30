import React, { useState } from 'react'
import Amazon from './myComponents/Amazon';
import Cart from './myComponents/Cart';
import Navbar from './myComponents/Navbar';
import './Style/amazon.css'


function App() {
  const [show, setShow] = useState(true);

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
      isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000)
      return;
    }
      setCart([...cart, item]);
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  // const handleChange = (item, d) => {
  //   let ind = cart.indexOf(item);
   

  //   const tempArr = cart;
  //   tempArr[ind] += d;

  //   if (tempArr[ind].amount === 0)
  //       tempArr[ind].amount = 1;
  //     setCart([...tempArr])
  // }

  return (
    <>
      <Navbar size = {cart.length} setShow = {setShow} />
      {
        show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart = {setCart} handleChange = {handleChange} />
      }
      {
        warning && <div className='warning'>Item is already added to your cart</div>
      }
    </>
  );
}

export default App;
