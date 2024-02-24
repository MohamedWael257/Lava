import React, { useContext } from "react";
// import'from "./Adminnav.module.css"
import '../../profile/profilenav/Profilenav.css'
import { FaUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AuthContext } from '../../../context/AuthContext'
const Adminnav = () => {
    const { currentUser } = useContext(AuthContext)
    const userName = currentUser?.email
    const activelink = ({ isActive }) => (isActive ? `active` : `links`)
    return (
        <div className='nav'>
            <div className='user'>
                <FaUserCircle className='icon inline-block mb-2' size={60} color="#fff" />
                <h4>{userName}</h4>
            </div>
            <div className='listcontainer'>
                <ul className='list'>
                    <li>
                        <NavLink to="/admin/home-orders" className={activelink}>
                            Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/home-booking" className={activelink}>
                            Booking
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/all-products" className={activelink}>
                            All Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/add-product/Add" className={activelink}>
                            Add Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/all-services" className={activelink}>
                            All Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/admin/add-service/Add" className={activelink}>
                            Add Service
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Adminnav;