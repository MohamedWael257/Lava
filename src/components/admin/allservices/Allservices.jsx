import React, { useEffect, useState } from "react";
import styles from "./Allservices.module.css"
import { filterproduct, filterBySearch, filterByCategory } from "../../../redux/slice/filterslice"
import { useSelector, useDispatch } from "react-redux";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import data from '../../../../public/data.json'
import { getservices, servicesdata } from "../../../redux/slice/serviceslice";

const Allservices = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");
    const selectservices = useSelector(servicesdata);
    // const [selectservices, setSelectservices] = useState([]);
    // useEffect(() => {
    //     if (data) {
    //         setSelectservices(data.booking_services)
    //     }
    // }, [data])
    const filteredservices = useSelector(filterproduct)
    const currentservices = filteredservices.length === 0 ? selectservices : filteredservices;
    useEffect(() => {
        dispatch(filterBySearch({ product: selectservices, search: searchValue }))
    }, [dispatch, searchValue, selectservices])
    const filterbycategory = (cat) => {
        dispatch(filterByCategory({ product: selectservices, category: cat }));
    }
    // useEffect(() => {
    //     dispatch(getProducts())
    // }, [dispatch, currentservices])
    const deleteproduct = async (id) => {
        try {
            await fetch(`https://lava-11a9b-default-rtdb.firebaseio.com/services/${id}.json`, {
                method: "DELETE",
            })
            dispatch(getservices())

            toast.success("Product Deleted successful", {
                position: "top-right",
            })

        }
        catch (error) {
            toast.error(error.message)
        }

    }
    return (
        <div className={styles.container}>
            <h2>All Services</h2>
            <p>{currentservices.length} Services found</p>
            <div className={styles.search}>
                <input type="text" placeholder={`Search by name`} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>s/n</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Duration</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentservices.map((pro, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td className="p-4">
                                    <img className={styles.imgg} src={pro.ImageUrl} />
                                </td>
                                <td>{pro.title}</td>
                                <td>{pro.serviceduration}</td>
                                <td>{pro.serviceprice}</td>
                                <td>
                                    <Link to={`/admin/add-service/${pro.id}`}>
                                        <FaEdit size={25} color="green" />
                                    </Link>
                                    <FaTrashAlt size={25} cursor="pointer" color="red" onClick={() => deleteproduct(pro.id)} />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Allservices