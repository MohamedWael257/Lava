import React, { useContext, useEffect, useState } from 'react'
import "./Orders.css"
import { useSelector } from 'react-redux'
import axios from 'axios'
import { authuser } from '../../redux/slice/authslice'
import { AuthContext } from '../../context/AuthContext'
import { ordershistory } from '../../redux/slice/orderslice'
import { useNavigate } from 'react-router-dom'
const Orders = () => {
    const getorders = useSelector(ordershistory)
    const navigate = useNavigate()
    // const [getorders, setGetorders] = useState([])
    // let currentUser = useSelector(authuser)
    const { currentUser } = useContext(AuthContext)
    let orders = []
    getorders.filter(ele => {
        if (ele.uid === currentUser?.uid) {
            orders.push(ele)
        }
    })
    console.log('orders', orders);
    // console.log('orders', orders);
    // let items = []
    // for (const key of orders) {
    //     console.log(key);
    //     key.map(ele => items.push(ele))
    // }
    return (
        <section className="orders">
            {/* <h2>Order Details</h2>  */}
            {/* <p><b>Order ID :</b>{theorder[0]?.id}</p>  */}
            {/* <p><b>Order Amount :</b>{theorder[0]?.orderamount}</p>  */}
            {/* {
                orders && <h2>Hello {orders}</h2>
            } */}
            {orders ?
                <>
                    <h2>Hello {currentUser?.displayName}</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>s/n</th>
                                {/* <th>Product</th> */}
                                {/* <th>Description</th> */}
                                {/* <th>Price</th> */}
                                {/* <th>Image</th> */}
                                {/* <th>Quantity</th> */}
                                {/* <th>Total</th> */}
                                <th>Date</th>
                                <th>Order ID</th>
                                <th>Order Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => {
                                return (
                                    <tr key={index} onClick={() => navigate(`/orderdetails/${order.id}`)}>
                                        <td>{index}</td>
                                        <td>
                                            {order.orderdate}
                                        </td>
                                        <td>{order.id.substring(0, 10)}....</td>
                                        <td>{order.orderamount}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </>
                : <>
                    <h2>Hello {currentUser?.displayName}</h2>
                    <div className="noorders">
                        <h1><i className="fa-solid fa-heart-crack"></i></h1>
                        <h5 >Shopping cart is empty !</h5>
                        <p >push some products into your cart</p>
                        <div>
                            <a href="home.html" className="btn btn-warning text-end">Back to Home</a>
                        </div>
                    </div>
                </>

            }

        </section>
    )
}

export default Orders