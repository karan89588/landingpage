import React,{ useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {remove,addTotal,subTotal,deleteFromQtyCountList,incQtyCount,decQtyCount} from '../Actions/index'


export default function CartP(props) {
    const qtyList=useSelector((state)=>state.changeQtyCount);
    const dispatch=useDispatch();
    const indexQty=qtyList.findIndex((ele)=>{
        return ele.id===props.data.id;
    });
    console.log(qtyList);
    const countP=qtyList[indexQty].count;
    const [count,setCount]=useState(countP);
    const [total,setTotal]=useState(props.data.quantity);
    const decQuantity=()=>{
        if(count-1>=0){
            setCount(count-1);
            setTotal(total+1);
            dispatch(decQtyCount(props.data.id));
            dispatch(subTotal(props.data.ppi));
            console.log(qtyList);
        }
    }
    const incQuantity=()=>{
        if(total-1>=0){
            setCount(count+1);
            setTotal(total-1);
            dispatch(incQtyCount(props.data.id));
            dispatch(addTotal(props.data.ppi));
            console.log(qtyList);
        }
    }
  return (
    <div key={props.data.id} className='row'>
        <div className='col-2 my-3'></div>
        <div className='col-2 my-3'><img className='mx-auto' src={require('../Images/'+props.data.src)} width={150} height={150}/></div>
        <div className='col-2 my-3'>
            <p className='mt-2'>Price Per Item : {props.data.ppi} Rs</p>
            <p>Name : {props.data.name}</p>
            <p>In Stock : {total} {props.data.unit}</p>
        </div>
        <div className='col-2 my-3'>
            <button onClick={()=>decQuantity()}>-</button> {count} {props.data.unit} <button onClick={()=>incQuantity()}>+</button>
            <div className='mt-3'>Rs {count*props.data.ppi}</div>
        </div>
        <div className='col-3 my-3'>
            <div className='btn btn-primary' onClick={()=>{dispatch(remove(props.data.id));dispatch(subTotal(count*props.data.ppi));dispatch(deleteFromQtyCountList(props.data.id));console.log(qtyList);}}>Remove</div>
        </div>
    </div>
  )
}
