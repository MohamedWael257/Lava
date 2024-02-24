import React, { useContext, useEffect, useState } from 'react'
import "./Orders.css"
import { useSelector } from 'react-redux'
import axios from 'axios'
import { authuser } from '../../redux/slice/authslice'
import { AuthContext } from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import { ordershistory } from '../../redux/slice/orderslice'
const Orders = () => {
    const getorders = useSelector(ordershistory)
    // const [getorders, setGetorders] = useState([])
    const { currentUser } = useContext(AuthContext)
    const deletefromorders = (a) => {
        const objWithIdIndex = orders.findIndex((obj) => obj.id === a)
        orders.orders.splice(objWithIdIndex, 1)
        // console.log(orders.orders);
        localStorage.setItem(`orders${admin && admin.username}`, JSON.stringify(orders.orders))
        // order.innerHTML = ''
        // showdataorders()
        // if (!orders || orders.length === 0) {
        //     window.location.reload()
        // }
    }

    let orders = []
    for (const key in getorders) {
        if (getorders[key].uid === currentUser?.uid) {
            // console.log(key);
            // orders.push({
            //     id: key,
            //     orderitem: getorders[key].orderitem,
            //     username: getorders[key].uid,
            // })
            orders.push(
                getorders[key].orderitem
            )
        }
    }
    // console.log('orders', orders);
    let items = []
    for (const key of orders) {
        // console.log(key);
        key.map(ele => items.push(ele))
    }
    return (
        <section className="orders">
            {orders ?
                <>
                    <h2>Hello {currentUser?.displayName}</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>s/n</th>
                                <th>Product</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((ele, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{ele.title}</td>
                                        <td>{ele.description}</td>
                                        <td>{+ele.price} EGB</td>
                                        <td><img className="tdimg" src={ele.thumbnail} /></td>
                                        <td>{ele.itemquantity}</td>
                                        <td>{+ele.price * ele.itemquantity} EGB</td>
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
                            <Link to='/' className="btn btn-warning text-end">Back to Home</Link>
                        </div>
                    </div>
                </>

            }

        </section>
    )
}

export default Orders