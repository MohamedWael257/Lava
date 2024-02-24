import React, { useEffect, useState } from "react";
import styles from "./Addproduct.module.css"
// import Card from "../../ui/Card"
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getProducts, productdata } from "../../../redux/slice/productslice"
import { useDispatch, useSelector } from "react-redux";
import { MdPhotoCameraBack } from 'react-icons/md'
import { toast } from "react-toastify";
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";
import Loader from '../../loader/Loader'
const Addproduct = () => {
    const { id } = useParams();
    const product = useSelector(productdata);
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const productEdite = product.find((pro) => pro.id === id);
    const formkind = (id, f1, f2) => {
        if (id === "Add") {
            return f1;
        }
        return f2;
    }
    const initialproduct = {
        title: "",
        itemquantity: 1,
        price: 0,
        description: "",
        category: "",
        brand: "",
        favourit: false
    }
    const [curentproduct, setcurentproduct] = useState(() => {
        const newstate = formkind(id, { ...initialproduct }, productEdite)
        return newstate
    })
    useEffect(() => {
        if (curentproduct) {
            setImagePreview(curentproduct?.thumbnail);
        }
    }, [curentproduct?.thumbnail])
    const category = [
        "All",
        ...new Set(product.map((products) => products.category)),
    ];
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImage(null);
            setImagePreview(null);
        }
    };
    const inputChange = (e) => {
        const { name, value } = e.target;
        setcurentproduct({ ...curentproduct, [name]: value });
    }
    const addproduct = async (e) => {
        e.preventDefault();
        if (image && curentproduct.brand && curentproduct.category && curentproduct.description && curentproduct.itemquantity && curentproduct.price && curentproduct.brand) {
            try {
                let imageUrl = null;
                if (image) {
                    const storage = getStorage();
                    const storageRef = ref(storage, image.name);
                    setUploading(true)
                    await uploadString(storageRef, imagePreview, "data_url");
                    imageUrl = await getDownloadURL(storageRef);
                    setUploading(false)
                    setImage(null);
                    setImagePreview(null);
                }
                await fetch("https://lava-11a9b-default-rtdb.firebaseio.com//products.json", {
                    method: "POST",
                    body: JSON.stringify({
                        title: curentproduct.title,
                        thumbnail: imageUrl,
                        price: curentproduct.price,
                        description: curentproduct.description,
                        itemquantity: curentproduct.itemquantity,
                        category: curentproduct.category,
                        brand: curentproduct.brand,
                        favourit: curentproduct.favourit,
                        review: ""
                    })
                })
                toast.success("Product Added successful", {
                    position: "top-right",
                })
                navigate('/admin/all-products')
                dispatch(getProducts())
            }
            catch (error) {
                toast.error(error.message);
                setUploading(false)
            }
        }
        else {
            toast.info('Please fill out all the fields!')
        }
    };
    const editeproduct = async (e) => {
        e.preventDefault();
        if (image && curentproduct?.brand && curentproduct?.category && curentproduct?.description && curentproduct?.itemquantity && curentproduct?.price && curentproduct?.brand) {
            try {
                let imageUrl = null;
                if (image) {
                    const storage = getStorage();
                    const storageRef = ref(storage, image.name);
                    setUploading(true);
                    await uploadString(storageRef, imagePreview, "data_url");
                    imageUrl = await getDownloadURL(storageRef);
                    setUploading(false);
                    setImage(null);
                    setImagePreview(null);
                }
                fetch(`https://lava-11a9b-default-rtdb.firebaseio.com//products/${id}.json`, {
                    method: "PUT",
                    body: JSON.stringify({
                        title: curentproduct.title,
                        thumbnail: imageUrl,
                        price: curentproduct.price,
                        description: curentproduct.description,
                        itemquantity: curentproduct.itemquantity,
                        category: curentproduct.category,
                        brand: curentproduct.brand,
                        favourit: curentproduct.favourit,
                        review: ""
                    })
                })
                toast.success("Product Edited successful", {
                    position: "top-right",
                })
                navigate('/admin/all-products')
                dispatch(getProducts())
            }
            catch (error) {
                toast.error(error.message);
                setUploading(false);
            }
        }
    }

    return (
        <div className={styles.container}>
            <h2>{formkind(id, "Add Product", "Edite Product")}</h2>
            <div className={styles.formcard}>
                <form onSubmit={formkind(id, addproduct, editeproduct)}>
                    <label>Product Name:</label>
                    <input name="title" placeholder="Product name" type="text" value={curentproduct?.title} onChange={(e) => inputChange(e)} />
                    <br />
                    <label htmlFor="file" style={{ margin: '0 auto' }}>
                        Image Link:
                        <MdPhotoCameraBack color='white'
                            className="inline-block  translate-x-40 text-4xl"
                        // style={{ fontSize: '28px', display: 'inline-block' }}
                        />
                    </label>
                    <input
                        type="file"
                        id="file"
                        style={{ display: "none" }}
                        accept="image/*"
                        onChange={handleImageChange}
                    // onChange={(e) => setImage(e.target.value)}
                    />
                    {imagePreview && (
                        <div>
                            {/* <div className="absolute bottom-16 left-0 right-0 top-16 border-4 border-slate-400 border-dashed flex justify-center items-center bg-slate-200"> */}
                            {uploading && <Loader />}
                            <img
                                src={imagePreview}
                                alt="Preview"
                                style={{ maxWidth: "50%", maxHeight: "80%" }}
                            />
                        </div>
                    )}
                    <br />
                    <label>Product Price : </label>
                    <input name="price" placeholder="Product price" type="text" value={curentproduct?.price} onChange={(e) => inputChange(e)} />
                    <br />
                    {/* <label>Product itemquantity : </label>
                    <input name="itemquantity" placeholder="Product itemquantity" type="number" value={curentproduct?.itemquantity} onChange={(e) => inputChange(e)} />
                    <br /> */}
                    <label>Product Category : </label>
                    <select name="category" value={curentproduct?.category} onChange={(e) => inputChange(e)}>
                        {category.map((cat, index) => {
                            return (
                                <option key={index} value={cat}>{cat}</option>
                            )
                        })}
                    </select>
                    <label>Product Brand : </label>
                    <input name="brand" placeholder="Product brand" type="text" value={curentproduct?.brand} onChange={(e) => inputChange(e)} />
                    <br />
                    <label>Product Description : </label>
                    <textarea name="description" placeholder="Description" cols={10} rows={5} value={curentproduct?.description} onChange={(e) => inputChange(e)}></textarea>
                    <button type="submit">{formkind(id, "Add Product", "Edite Product")}</button>
                </form>
            </div>

        </div>
    )
}
export default Addproduct