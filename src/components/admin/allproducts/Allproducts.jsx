import React, { useEffect, useState } from "react";
import styles from "./Allproducts.module.css"
import { filterproduct, filterBySearch, filterByCategory } from "../../../redux/slice/filterslice"
import { getProducts, productdata } from "../../../redux/slice/productslice";
import { useSelector, useDispatch } from "react-redux";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Allproducts = () => {
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState("");
    const selectproducts = useSelector(productdata);
    const filteredproduct = useSelector(filterproduct)
    const currentproduct = filteredproduct.length === 0 ? selectproducts : filteredproduct;
    useEffect(() => {
        dispatch(filterBySearch({ product: selectproducts, search: searchValue }))
    }, [dispatch, searchValue, selectproducts])
    const filterbycategory = (cat) => {
        dispatch(filterByCategory({ product: selectproducts, category: cat }));
    }
    const category = [
        "All",
        ...new Set(selectproducts.map((products) => products.category)),
    ];
    // useEffect(() => {
    //     dispatch(getProducts())
    // }, [dispatch, currentproduct])
    const deleteproduct = async (id) => {
        try {
            await fetch(`https://lava-11a9b-default-rtdb.firebaseio.com/products/${id}.json`, {
                method: "DELETE",
            })
            dispatch(getProducts())

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
            <h2>All Products</h2>
            <h2>Categories</h2>
            <select aria-label="Default select example" className={styles.category}
                onChange={(e) => {
                    filterbycategory(e.target.value);
                }}>

                {category.map((cat, index) => {
                    return (
                        <option key={index} value={cat} type='button' className={`${styles.catbtn}`}  >
                            {cat}
                        </option>
                    )
                })}
            </select>

            <p>{currentproduct.length} Products found</p>
            <div className={styles.search}>
                <input type="text" placeholder={`Search by name`} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>s/n</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentproduct.map((pro, index) => {
                        return (
                            <tr key={index}>
                                <td>{index}</td>
                                <td className="p-4">
                                    <img className={styles.imgg} src={pro.thumbnail} />
                                </td>
                                <td>{pro.title}</td>
                                <td>{pro.category}</td>
                                <td>{pro.price}</td>
                                <td>
                                    <Link to={`/admin/add-product/${pro.id}`}>
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
export default Allproducts