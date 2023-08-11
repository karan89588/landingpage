import React from 'react'
import NavBar from './navbar'
import Footer from './footer'
import { useSelector } from 'react-redux'
import CartP from './cartP'
export default function Cart() {
  const myState=useSelector((state)=>state.changeTheCart);
  const totalBill=useSelector((state)=>state.changeTotal);
  return (
    <div className='container-fluid'>
      <NavBar/>
      <h2 className='text-center'>Cart</h2>
      {
        myState.map((ele)=>{
          return <CartP data={ele}/>;
        })
      }
      <div className='text-center'>Total Bill : {totalBill}</div>
      <Footer/>
    </div>
  )
}
