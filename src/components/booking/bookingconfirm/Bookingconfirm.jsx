import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bookingitem, totalprice } from '../../../redux/slice/bookingslice'
import { useNavigate } from 'react-router-dom'
import './Bookingconfirm.css'
import { AuthContext } from '../../../context/AuthContext'
import { toast } from 'react-toastify'
const Bookingconfirm = () => {
    const booking = useSelector(bookingitem)
    const totprice = useSelector(totalprice)
    const { currentUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    useEffect(() => {
        if (booking.length === 0) {
            navigate('/')
        }
    }, [booking])
    const payment = (e) => {
        e.preventDefault();
        fetch("https://lava-11a9b-default-rtdb.firebaseio.com/booking.json", {
            method: "POST",
            body: JSON.stringify({
                orderdate: dateTime,
                orderamount: totprice,
                uid: currentUser?.uid,
                orderitem: booking
            })
        })
        // dispatch(getorders());
        dispatch(clearcart());
        toast.success("Payment successful", {
            position: "top-right",
        });
        navigate("/")
        // navigate('/orders')

    }
    return (
        <section className='booking-payment flex items-center justify-center'>
            <div className='w-[380px] h-[380px] p-5 rounded-xl text-white'>
                <h2>Payment Total</h2>
                {
                    booking && booking.length > 0 &&
                    booking.map(ele => {
                        return (
                            <>
                                <div className='flex justify-between'>
                                    <p>Date</p>
                                    <p>{ele.time}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Details</p>
                                    <p>{ele.title}</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Service Duration</p>
                                    <p>{ele.serviceduration}</p>
                                </div>
                                <hr />
                                <div className='flex justify-between'>
                                    <p>Service Price</p>
                                    <p>{ele.serviceprice} EGB</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Tax</p>
                                    <p>{ele.tax} EGB</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Total</p>
                                    <p>{ele.totprice} EGB</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Payment Method</p>
                                    <p>cash</p>
                                </div>
                            </>
                        )
                    })
                }
                <button onClick={payment}>Confirm Booking</button>
            </div>
        </section>
    )
}

export default Bookingconfirm
