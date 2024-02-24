import React, { Fragment, useEffect, useState } from 'react'
import "./Cart.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import data from '../../../public/data.json'
import { FaCheck } from 'react-icons/fa'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { addtocart, cartitem, clearcart, decrease, removefromcart, totalprice, totalquantity } from '../../redux/slice/cartslice'
import { favourititem } from '../../redux/slice/favouritslice'
const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector(cartitem)
    const totprice = useSelector(totalprice)
    const totquantity = useSelector(totalquantity)
    const favourit = useSelector(favourititem)

    return (
        <>
            <section className="shopping">
                {cart.length > 0 ?
                    <>
                        <div className="shopping-cart ">
                            <div className="head">
                                <span>shopping Cart</span>
                                <span>price</span>
                            </div>
                            <hr />
                            {cart.map((ele, index) => {
                                return (
                                    <Fragment key={index}>
                                        <div className="cart">
                                            <div className="img w-25 me-4">
                                                <img src={ele.thumbnail} className="w-100 h-50" alt="" />
                                            </div>
                                            <div className="card-details">
                                                <div className="title">
                                                    <p>{ele.description}</p>
                                                    <strong className="">EGB {ele.price * ele.itemquantity}</strong>
                                                </div>
                                                <p>{ele.title}</p>
                                                <p>Eligible for FREE delivery</p>
                                                <strong>Size: 350 ml</strong>
                                                <button className="increment" onClick={() => dispatch(addtocart(ele))}>+</button>
                                                <span className="count">{ele.itemquantity}</span>
                                                <button className="decrement" onClick={() => dispatch(decrease(ele))}>-</button>
                                                <button className="delete" onClick={() => dispatch(removefromcart(ele))}> delete</button>

                                            </div>
                                            <hr />
                                            <br />
                                            <br />
                                        </div>
                                    </Fragment>
                                )
                            })}
                            {/* <button className='clear' onClick={() => {
                                localStorage.removeItem('cart'); toast.info(`Cart cleared`, {
                                    position: "top-left",
                                });
                            }}>Clear Cart</button> */}
                            <button className='clear' onClick={() => dispatch(clearcart())}>Clear Cart</button>
                            <div className="price">
                                <span>Sub ({totquantity} items):</span>
                                <span> EGB {totprice}</span>
                            </div>
                            <hr />
                            <br />
                            <br />
                        </div>
                        <div className="buy" >
                            <div className="detail ">
                                <i><FaCheck /></i>
                                <div>
                                    <p>Your first order qualifies for FREE Delivery.
                                        Select this option at checkout.<a href="">Details</a></p>
                                    <div>
                                        <div className="price">
                                            <span>Sub({totquantity} items):</span>
                                            <span> EGB {totprice}</span>
                                        </div>
                                        <button className='process-to-buy' onClick={() => { navigate('/checkout') }}>Process to buy</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    : <>
                        <div className="nocart bg-dark p-5 text-center ng-star-inserted">
                            {/* <h1><PiHeartBreakFill className='text-warning' size={80} /></h1> */}
                            <h5 className="text-white">Shopping cart is empty !</h5>
                            <p className="text-white">push some products into your cart</p>
                            {/* <Button href="/home" id='home' >Back To Home</Button> */}
                            <Link to="/" >Back To Home</Link>

                        </div>
                    </>
                }
            </section>
            {/* {(favourit && favourit.length > 0) &&
                    <section className='favourit'>
                        <h2>Favourit Products</h2>
                        <div className='favourit-cards'>
                            {favourit.map((ele, index) => {
                                return (
                                    <div key={index} className='favourit-card'>
                                        <img src={ele.thumbnail} />
                                        <p>Product : {ele.title}</p>
                                        <p>Category : {ele.category}</p>
                                        <IoIosHeart onClick={() => deletefromfavoruit(ele)} color='red' size={35} />
                                    </div>
                                )
                            })}
                        </div>
                    </section>
                } */}


        </>
    )
}

export default Cart