import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import './Productdetails.css';
import { useSelector, useDispatch } from 'react-redux';
import { addtocart } from "../../../redux/slice/cartslice"
import { productdata } from '../../../redux/slice/productslice';
function Productdetails() {
    const { id } = useParams();
    console.log(id);
    const product = useSelector(productdata)
    const productdetails = product.filter((pro) => pro.id === id);
    const dispatch = useDispatch()
    const additem = () => {
        dispatch(addtocart(productdetails[0]))
    }

    return (
        <>
            <div className="product-details">
                <div className="head">
                    <h2><b>Product Details</b></h2>
                    <Link to="/store">&larr; Back To Store</Link>
                </div>
                <div className="content">
                    <div className="image">
                        <img src={productdetails[0].thumbnail} alt="detail" />
                    </div>
                    <div className="text">
                        <p className="title">{productdetails[0].title}</p>
                        <h5 className="price">{productdetails[0].price} EGB</h5>
                        <p className="description">{productdetails[0].description}</p>
                        <h5 className="category">{productdetails[0].category}</h5>
                        <p><b className="title">Brand: {productdetails[0].brand}</b></p>
                        <button onClick={additem} className="addingbtn">Add to Cart</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Productdetails
