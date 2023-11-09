import { Link } from "react-router-dom";

const Product = (props) => {
    return (  
        <>
            <div className="card mb-3 height">
                <img src={props.item.image} className="card-img-top  " alt="..."/>
                <div className="card-body">
                        <h5 className="card-title">{props.item.title}</h5>
                        <p className="card-text">{props.item.description}</p>
                        <h6 className="card-text">Price: {props.item.price}$</h6>
                        {props.button&&
                        <Link to={`/product/${props.item.id}`} className="btn btn-primary">Details</Link>}
                </div>        

            
            </div>

            {/* <div className="card" >
                <img src="..." className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
                </div> */}

        </>
    );
}
 
export default Product;