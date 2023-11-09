import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./product";

const ProductDetails = () => {
    const api_url='https://fakestoreapi.com/products';
    const [product,setproduct]=useState([]);
    const params=useParams();
    useEffect(()=>{
        fetch(`${api_url}/${params.productID}`)
        .then((res)=>res.json())
        .then((data)=>{
            setproduct(data);
            // console.log(data)
        })
    },[])

// console.log(product)

    return (  
    <>
        <div>
            <Product key={product.id} item={product} button={false}/>
        </div>
        
    </>
    );
}
 
export default ProductDetails;