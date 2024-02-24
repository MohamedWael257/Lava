import React, { useEffect, useState } from 'react'
import "../Store.css"
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiSearch } from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { addtocart } from '../../../redux/slice/cartslice';
import { addtofavourit, favourititem } from '../../../redux/slice/favouritslice';
function Productsitem({ products }) {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
        return arr
    }
    products = products.slice(0, 30)
    shuffle(products)
    return (
        <>
            <section className='products'>
                {
                    products.map((ele, index) => {
                        return (
                            <div className="product-card" key={index}>
                                <img src={ele.thumbnail} className="card-img" alt="" />
                                <h2 className="card-title">{ele.title}</h2>
                                <p className="card-desc">{ele.description}</p>
                                <p className="card-price">{+ele.price * ele.itemquantity} EGB</p>
                                <div className="add-to-cart">
                                    <i onClick={() => dispatch(addtocart(ele))}><FiShoppingCart /></i>
                                    <i onClick={() => dispatch(addtofavourit(ele))}><FiHeart /></i>
                                    <i onClick={() => navigate(`/productdetails/${ele.id}`)}><FiSearch /></i>

                                </div>
                            </div>
                            //  <div className='addtocart'>
                            //     <button onClick={() => dispatch(addtocart(ele))}><FiShoppingCart /></button>
                            //     <button onClick={() => { console.log(ele.id) }}><FiHeart /></button>
                            //     <button onClick={() => {
                            //         navigate(`/productdetails/${ele.id}`)
                            //         localStorage.setItem("product", JSON.stringify(ele))
                            //     }}><FiSearch /></button>
                            // </div> 

                        )
                    })
                }

            </section>

        </>
    )
}

export default Productsitem