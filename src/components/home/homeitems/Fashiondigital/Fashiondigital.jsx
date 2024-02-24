import React, { useEffect, useState } from 'react'
import './Fashiondigital.css'
import data from '../../../../../public/data.json'
import { useDispatch } from 'react-redux'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { addtocart } from "../../../../redux/slice/cartslice";
import { FiHeart } from "react-icons/fi";
import { Carousel } from 'react-bootstrap'
import image1 from "../../../../assets/recommended1.png"
import image2 from "../../../../assets/recommended2.jpg"
import image3 from "../../../../assets/recommended3.jpg"
import image4 from "../../../../assets/bags1.jpg"
import image5 from "../../../../assets/womanwatch3.jpg"
import image6 from "../../../../assets/manwatches.jpg"
import image7 from "../../../../assets/jewllery.jpg"
import image8 from "../../../../assets/t-shirt.jpg"
import image9 from "../../../../assets/woman.jpg"
import image10 from "../../../../assets/manclothes.jpg"
import image11 from "../../../../assets/tops.jpg"
import image12 from "../../../../assets/phone.jpg"
import image13 from "../../../../assets/laptop4.png"
import image14 from "../../../../assets/automotive.jpg"
import image15 from "../../../../assets/motorcycle.jpg"

const Fashiondigital = () => {
    const dispatch = useDispatch()
    const [productsfashion, setProductsfashion] = useState([])
    const [productsfashion2, setProductsfashion2] = useState([])
    const [productsdigital, setProductsdigital] = useState([])
    const [bags, setBags] = useState([])
    const [womenwatchesitem, setWomenwatchesitem] = useState([])
    const [menwatchesitem, setMenwatchesitem] = useState([])
    const [jEWLLERYitem, setJEWLLERYitem] = useState([])
    const [tshirtitem, setTshirtitem] = useState([])
    const [womenitem, setWomenitem] = useState([])
    const [menclothesitem, setMenclothesitem] = useState([])
    const [topsitem, setTopsitem] = useState([])
    const [phoneitem, setPhoneitem] = useState([])
    const [laptopsitem, setLaptopsitem] = useState([])
    const [automotiveitem, setAutomotiveitem] = useState([])
    const [motorcycleitem, setMotorcycleitem] = useState([])
    useEffect(() => {
        if (data) {
            setBags(data.bags_item)
            setWomenwatchesitem(data.Women_watches_item)
            setMenwatchesitem(data.men_watches_item)
            setJEWLLERYitem(data.JEWLLERY_item)
            // 
            setTshirtitem(data.tshirt_item)
            // setWomenitem(data.)
            setMenclothesitem(data.menclothes_item)
            setTopsitem(data.tops_item)
            // 
            setPhoneitem(data.phone_item)
            setLaptopsitem(data.laptops_item)
            setAutomotiveitem(data.automotive_item)
            setMotorcycleitem(data.motorcycle_item)
        }
    }, [data])
    return (
        <>
            <section className="fashionn digital">
                <div className="offers">
                    <div className="shop-now">
                        <img src="https://i.ibb.co/G79dWw4/banner1.png" alt="" className=" w-100 banner1" />
                        <button className="btn btn-dark text-white">Shop now</button>
                        <div className="add bg-white">
                            <button className="btn btn-dark text-white">add to cart</button>
                            <h3 className="text-white bg-dark"><FiHeart /></h3>
                        </div>
                    </div>
                    <div className="recommended-items">
                        <button className="recommended btn bg-dark text-center text-white">
                            <i className="fa-brands fa-connectdevelop"></i>
                            Recommended Items
                        </button>
                        <div className="card" style={{ cursor: "pointer" }}>
                            <img src={image1} alt="" />
                            <p>Skin Beauty Serum.</p>
                            <span className="text-warning">EGB276</span>
                            <div className="add bg-white">
                                <button className="btn btn-dark text-white">add to cart</button>
                                <h3><FiHeart /></h3>
                            </div>
                        </div>
                        <div className="card" style={{ cursor: "pointer" }}>
                            <img src={image2} alt="" />
                            <p>Hyaluronic Acid Serum</p>
                            <span className="text-warning">EGB114</span>
                            <div className="add bg-white">
                                <button className="btn btn-dark text-white">add to cart</button>
                                <h3><FiHeart /></h3>
                            </div>
                        </div>
                        <div className="card" style={{ cursor: "pointer" }}>
                            <img src={image3} alt="" />
                            <p>TRee Oil 30ml</p>
                            <span className="text-warning">EGB72</span>
                            <div className="add bg-white">
                                <button className="btn btn-dark text-white">add to cart</button>
                                <h3><FiHeart /></h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="typesofcategories">
                    <i className="fa-solid fa-shirt me-2 font-14"></i>
                    <span>Fashion & ACCESSORIES</span>
                    <div className="line"></div>
                    <div className="fashion-accessories">
                        <div className="fparent" height={300}>
                            <div className="sparent">
                                <div className="lparent">
                                    <div className="child bags" onClick={() => setProductsfashion(bags)}>
                                        <img src={image4} alt="" />
                                        <p>BAGS</p>
                                    </div>
                                    <div className="child womanwatches" onClick={() => setProductsfashion(womenwatchesitem)}>
                                        <img src={image5} alt="" />
                                        <p>WOMEN WATCES </p>
                                    </div>
                                </div>
                                <div className="lparent ">
                                    <div className="child menwatches" onClick={() => setProductsfashion(menwatchesitem)}>
                                        <img src={image6} alt="" />
                                        <p>MEN WATCES </p>
                                    </div>
                                    <div className="child jewllery" onClick={() => setProductsfashion(jEWLLERYitem)}>
                                        <img src={image7} alt="" />
                                        <p>JEWLLERY</p>
                                    </div>
                                </div>
                            </div>
                            <Carousel className="carsu" data-bs-theme="dark">
                                {
                                    productsfashion.map(ele => {
                                        return (
                                            <Carousel.Item height={300}>
                                                <div className=" flex justify-between">
                                                    <div className="details">
                                                        <p>{ele.title}</p>
                                                        <div className="star text-yellow-700 text-xl">
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-regular fa-star"></i>
                                                        </div>
                                                        <span className="text-yellow-700">${ele.price}</span>
                                                        <div className="buy-favourite">
                                                            <span>
                                                                <button className=" bg-sky-700 text-white py-2 me-2" onClick={() => dispatch(addtocart(ele))}>
                                                                    <i className="fa-solid fa-bag-shopping me-3"></i>Add
                                                                    to cart
                                                                </button>

                                                            </span>
                                                            <span><i className="fa-solid fa-heart icon-2 p-2 fs-4"
                                                                style={{ border: "1px solid black;" }}></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="imgg w-2/4 h-2/4">
                                                        <img src={ele.ImageUrl} className="w-full h-52 mt-4" alt="" />
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                        <div className="fparent" style={{ borderTop: "2px solid black" }}>
                            <div className="sparent">
                                <div className="lparent">
                                    <div className="child tshirt" onClick={() => setProductsfashion2(tshirtitem)}>
                                        <img src={image8} alt="" />
                                        <p>T-SHIRT</p>
                                    </div>
                                    <div className="child women" onClick={() => setProductsfashion2(womenitem)}>
                                        <img src={image9} alt="" />
                                        <p>WOMEN </p>
                                    </div>
                                </div>
                                <div className="lparent">
                                    <div className="child menclothes" onClick={() => setProductsfashion2(menclothesitem)}>
                                        <img src={image10} alt="" />
                                        <p>MEN CLOTHES </p>
                                    </div>
                                    <div className="child tops" onClick={() => setProductsfashion2(topsitem)}>
                                        <img src={image11} alt="" />
                                        <p>TOPS</p>
                                    </div>
                                </div>
                            </div>
                            <Carousel className="carsu" data-bs-theme="dark" >
                                {
                                    productsfashion2.map(ele => {
                                        return (
                                            <Carousel.Item height={300}>
                                                <div className=" flex justify-between">
                                                    <div className="details">
                                                        <p>{ele.title}</p>
                                                        <div className="star text-yellow-700 text-xl">
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-regular fa-star"></i>
                                                        </div>
                                                        <span className="text-yellow-700">${ele.price}</span>
                                                        <div className="buy-favourite">
                                                            <span>
                                                                <button className=" bg-sky-700 text-white py-2 me-2" onClick={() => dispatch(addtocart(ele))}>
                                                                    <i className="fa-solid fa-bag-shopping me-3"></i>Add
                                                                    to cart
                                                                </button>

                                                            </span>
                                                            <span><i className="fa-solid fa-heart icon-2 p-2 fs-4"
                                                                style={{ border: "1px solid black;" }}></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="imgg w-2/4 h-2/4">
                                                        <img src={ele.ImageUrl} className="w-full h-52 mt-4" alt="" />
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                    <i className="fa-solid fa-laptop me-2 font-14"></i>
                    <span>Digital Electronic</span>
                    <div className="line"></div>
                    <div className="digital-electromic">
                        <div className="fparent">
                            <div className="sparent">
                                <div className="lparent">
                                    <div className="child phone" onClick={() => setProductsdigital(phoneitem)}>
                                        <img src={image12} alt="" />
                                        <p>PHONE</p>
                                    </div>
                                    <div className="child laptops" onClick={() => setProductsdigital(laptopsitem)}>
                                        <img src={image13} alt="" />
                                        <p>LAPTOPS </p>
                                    </div>
                                </div>
                                <div className="lparent">
                                    <div className="child automotive" onClick={() => setProductsdigital(automotiveitem)}>
                                        <img src={image14} alt="" />
                                        <p>AUTOMOTIVE </p>
                                    </div>
                                    <div className="child motorcycle" onClick={() => setProductsdigital(motorcycleitem)}>
                                        <img src={image15} alt="" />
                                        <p>MOTORCYCLE</p>
                                    </div>
                                </div>
                            </div>
                            <Carousel className="carsu" data-bs-theme="dark">
                                {
                                    productsdigital.map(ele => {
                                        return (
                                            <Carousel.Item height={300}>
                                                <div className=" flex justify-between">
                                                    <div className="details">
                                                        <p>{ele.title}</p>
                                                        <div className="star text-yellow-700 text-xl">
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-regular fa-star"></i>
                                                        </div>
                                                        <span className="text-yellow-700">${ele.price}</span>
                                                        <div className="buy-favourite">
                                                            <span>
                                                                <button className=" bg-sky-700 text-white py-2 me-2" onClick={() => dispatch(addtocart(ele))}>
                                                                    <i className="fa-solid fa-bag-shopping me-3"></i>Add
                                                                    to cart
                                                                </button>

                                                            </span>
                                                            <span><i className="fa-solid fa-heart icon-2 p-2 fs-4"
                                                                style={{ border: "1px solid black;" }}></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="imgg w-2/4 h-2/4">
                                                        <img src={ele.ImageUrl} className="w-full h-52 mt-4" alt="" />
                                                    </div>
                                                </div>
                                            </Carousel.Item>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Fashiondigital