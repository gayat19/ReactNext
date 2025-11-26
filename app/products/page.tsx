'use client';

import { useState } from "react";
import { ProductModel } from "./product.model";
import Product from "../product/page";

export default function Products(){

    const [products,setProducts] = useState<ProductModel[]>([
        new ProductModel(1,"Test1",10,4),
        new ProductModel(2,"Test2",20,2),
    ]);

    const [likes,setLikes] = useState<number>(0);

    const handleOnLike =(pid:number)=>{
        setLikes(likes+1);
        console.log(pid);
    }

    if(products.length==0) return(<h2>No Products</h2>);
    return (<>
        <h1>Product List - Liked Products {likes}</h1>
        {
            products.map(p=><Product onLike={handleOnLike} key={p.id} prod={p}/>)
        }
    </>)
}