import React from "react";
import "./Admin.css"
import { Route, Routes } from "react-router-dom";
import Adminnav from "./adminnav/Adminnav";
import Allproducts from "./allproducts/Allproducts";
import Addproduct from "./addproduct/Addproduct";
import Adminhomeorders from "./adminhome/Adminhomeorders";
import Adminhomebooking from "./adminhome/Adminhomebooking.jsx";
import Allservices from "./allservices/Allservices.jsx";
import Addservice from "./addservice/Addservice.jsx";

const Admin = () => {
    return (
        <div className="admin">
            <div className="navbar">
                <Adminnav />
            </div>
            <div className="content">
                <Routes>
                    <Route path="all-products" element={<Allproducts />} />
                    <Route path="add-product/:id" element={<Addproduct />} />
                    <Route path="all-services" element={<Allservices />} />
                    <Route path="add-service/:id" element={<Addservice />} />
                    <Route path="home-orders" element={<Adminhomeorders />} />
                    <Route path="home-booking" element={<Adminhomebooking />} />

                </Routes>
            </div>
        </div>)
}

export default Admin