import React from 'react'
import { useSelector } from 'react-redux'

export default function ItemsInCart() {
    const myState=useSelector((state)=>state.changeTheCart);
    var str="Cart"
    if(myState.length>0){
        str=`Cart(${myState.length})`;
    }
  return (
    <div>
      {str}
    </div>
  )
}
