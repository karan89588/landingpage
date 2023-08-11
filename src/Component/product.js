import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add,remove,addToQtyCountList,deleteFromQtyCountList,subTotal} from '../Actions/index'

export default function Product(props) {
  const qtyList=useSelector((state)=>state.changeQtyCount);
  const indexQty=qtyList.findIndex((ele)=>{
    return ele.id===props.product.id;
  });
  let countP=0;
  if(indexQty>=0){
    countP=qtyList[indexQty].count;
  }
  const myState=useSelector((state)=>state.changeTheCart);
  const dispatch=useDispatch();
  let str="Add"
  let isFound=myState.some(ele=>{
    return ele.id==props.product.id?true:false;
  });
  str=isFound?"Remove":"Add";
  const [btnText,setBtnText]=useState(str);
  const toggle=(prod)=>{
    if(btnText=='Add'){
      setBtnText('Remove');
      dispatch(add(prod));
      dispatch(addToQtyCountList(props.product.id));
    }else{
      setBtnText('Add');
      dispatch(remove(prod.id));
      dispatch(subTotal(countP*props.product.ppi));
      dispatch(deleteFromQtyCountList(props.product.id));
      console.log(qtyList);
    }
  }
  return (
      <div className='col-4 mt-5 card mx-5' style={{width:"200px",cursor:"pointer"}}>
        <div className='m-1'><img className='mx-auto' src={require('../Images/'+props.product.src)} width={150} height={150}/></div>
        <p className='mt-2'>Price Per Item : {props.product.ppi} Rs</p>
        <p>Name : {props.product.name}</p>
        <p>In Stock : {props.product.quantity} {props.product.unit}</p>
        <div className='btn btn-primary' onClick={()=>toggle(props.product)}>{btnText}</div>
      </div>
  )
}
