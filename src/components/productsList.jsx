import { useEffect, useState } from "react";
import Product from "./product";

const ProductsList = () => {
// import reportWebVitals from './../reportWebVitals';

const api_url='https://fakestoreapi.com/products';
const [product,setProduct]=useState()

    useEffect(()=>{
        fetch(api_url)
        .then((res)=>res.json())
        .then((data)=>{
            setProduct(data);
        })
        
    },[])
    
    return ( 
        <>
        <h1 className="text-center p-5">Products List</h1>
        <div className="container">
        <div className="row">
           
            {product && product.map((item,index)=>{return(
                <div className="col-3 p-2" key={index}>
                <Product  item={item} button={true}/>
            </div>
        
            )})
                }
        
        
        {/* <div className="col-3">
        <Product/>
        </div>  
        <div className="col-3">
        <Product/>
        </div>
          <div className="col-3">
        <Product/>
        </div> 
         <div className="col-3">
        <Product/>
        </div> */}
      
        </div>
        </div>
        </>
     );
}
 
export default ProductsList;