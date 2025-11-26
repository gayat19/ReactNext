'use client';

import { ProductModel } from "../products/product.model";

export default function Product(props:{prod:ProductModel,onLike:any }){

    const handleLike = ()=>{
            props.onLike(props.prod.id)
    }
    return(<>
    <h2>{props.prod.title}   <button onClick={handleLike}>Like</button></h2>
   
    </>)
}