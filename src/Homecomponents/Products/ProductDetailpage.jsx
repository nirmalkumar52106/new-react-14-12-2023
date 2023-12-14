import React from "react"
import {useParams} from "react-router-dom"
import { Products } from "./Item"
function ProductDetail() {
    const {productId} = useParams()
    const thisProduct = Products.find(prod => prod.id === productId)
     
    return (
        <div>
            <h1>this is detail page</h1>
            <h1>{thisProduct.name}</h1>
            <p>Price: ${thisProduct.price}</p>
           
        
        </div>
    )
}

export  {ProductDetail}