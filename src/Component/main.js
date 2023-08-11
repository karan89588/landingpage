
import React,{useState} from 'react'
import Product from './product'

export default function main(props) {
    return (
        props.products.map((product,i)=>{
            return <Product product={product} key={i}  index={props.index}/>
        })
    );
}
