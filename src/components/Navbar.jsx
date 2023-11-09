import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

//sfc =>stateless

const Navbar = () => {
    const api_url="https://fakestoreapi.com/products";
    const [category,setCategory]=useState();
   useEffect(()=>{
    fetch(`${api_url}/categories`)
            .then(res=>res.json())
            .then(json=>setCategory(json));

            getElementFromCateogry();
   },[])

    const getElementFromCateogry=(cat)=>{
            fetch(`${api_url}/category/${cat}`)
            .then(res=>res.json())
            .then(data=>console.log(data))
        
    }
    return ( 
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="about">About</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="contact">Contact us</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                       Categories List
                    </button>
                    <ul className="dropdown-menu">
                        
                    {category&&category.map((item)=>{
                        return(
                            <li key={item}><Link onClick={()=>{
                                getElementFromCateogry(item)
                            }} className="dropdown-item" to={"/"}>{item}</Link></li>
                        )                        
                    })}
                    </ul>
                    </div>
                </div>
            </div>
            </nav>        
        </>
     );
}
 
export default Navbar;