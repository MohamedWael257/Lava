import React, { useEffect, useState } from 'react'
import './Booking.css'
import Icon1 from '../../assets/Icon-3-Our-Service.png'
import Icon2 from '../../assets/Our-Service-Icon.png'
import Icon3 from '../../assets/Our-Service-Icon2.png'
import Icon4 from '../../assets/Our-Service-Icon4.png'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import data from '../../../public/data.json'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { addtocart } from '../../redux/slice/cartslice'
import axios from 'axios'
import { servicesdata } from '../../redux/slice/serviceslice'
const Booking = () => {
    const [active, setActive] = useState(true)
    // const [services, setServices] = useState([])
    const services = useSelector(servicesdata)
    const navigate = useNavigate()
    // useEffect(() => {
    //     if (data) {
    //         setServices(data.booking_services)
    //     }
    // }, [data])

    const addservicebooking = (ele) => {
        // dispatch(addservicetobooking(ele))
        navigate(`/bookingdetails/${ele.id}`)
    }
    return (
        <>

            <section className="our-services-booking">
                <h3>our services</h3>
                <h2>our comprehensive services</h2>
                <div className="container-cards" >
                    {
                        services &&
                        services.map((ele, index) => {
                            return (
                                <div className={`${active ? "card active" : "card"}`} key={index}>
                                    <img className="card-icon" src={ele.ImageUrl} alt="img" />
                                    <h3 className="card-title">{ele.title}</h3>
                                    <p className="card-desc">{ele.description}</p>
                                    <button className="card-btn" onClick={() => addservicebooking(ele)}>Add booking</button>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

        </>
    )
}

export default Booking