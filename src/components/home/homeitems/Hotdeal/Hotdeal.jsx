import React, { useEffect, useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './Hotdeal.css'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'
import { FiHeart } from 'react-icons/fi'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import data from '../../../../../public/data.json'
const Hotdeal = () => {
    const [carousel_products, setCarousel_products] = useState([])
    const [specialitems, setSpecialitems] = useState([])
    const [carousel_deals, setCarousel_deals] = useState([])
    useEffect(() => {
        if (data) {
            setCarousel_products(data.carousel_products)
            setCarousel_deals(data.carousel_deals)
            setSpecialitems(data.special_items)
        }
    }, [data])
    const carouselUI = carousel_products.map((item) => {
        return (
            <div className="card addtoproductcart" key={item.id} style={{ cursor: "pointer" }}>
                <img alt="" src={item.ImageUrl} />
                <p className="text-center title">{item.title}</p>
                <div className="text-center text-yellow-700 font-12 mb-2">
                    <i className="fa-regular fa-star ms-1"></i>
                    <i className="fa-regular fa-star ms-1"></i>
                    <i className="fa-regular fa-star ms-1"></i>
                    <i className="fa-regular fa-star ms-1"></i>
                    <i className="fa-regular fa-star ms-1"></i>
                </div>
                <span className="text-center">
                    <span className="text-yellow-700 me-4">{item.price}</span>
                    <span className="line-through">{item.a_price}</span>
                </span>
                <div className="add bg-white">
                    <button className="btn btn-dark text-white" onClick={() => dispatch(addtocart(item))}>add to cart</button>
                    <h3><FiHeart /></h3>
                </div>
            </div>
        )
    });
    const carouseldealUI = carousel_deals.map((item) => {
        return (
            <div className="card addtoproductcart" key={item.id} style={{ cursor: "pointer" }}>
                <img alt="" src={item.ImageUrl} />
                <p className="text-center title">{item.title}</p>
                <div className="text-center text-yellow-700 font-12 mb-2">
                    <i className="fa-regular fa-star ms-1"></i>
                    <i className="fa-regular fa-star ms-1"></i>
                    <i className="fa-regular fa-star ms-1"></i>
                    <i className="fa-regular fa-star ms-1"></i>
                    <i className="fa-regular fa-star ms-1"></i>
                </div>
                <span className="text-center">
                    <span className="text-yellow-700 me-4">{item.price}</span>
                    <span className="line-through">{item.a_price}</span>
                </span>
                <div className="add bg-white">
                    <button className="btn btn-dark text-white" onClick={() => dispatch(addtocart(item))}>add to cart</button>
                    <h3><FiHeart /></h3>
                </div>
            </div>
        )
    });
    //     var slideIndex = 1;
    // showDivs(slideIndex);

    // function plusDivs(n) {
    //   showDivs(slideIndex += n);
    // }

    // function showDivs(n) {
    //   var i;
    //   var x = document.getElementsByClassName("mySlides");
    //   if (n > x.length) {slideIndex = 1}
    //   if (n < 1) {slideIndex = x.length}
    //   for (i = 0; i < x.length; i++) {
    //     x[i].style.display = "none";  
    //   }
    //   x[slideIndex-1].style.display = "block";  
    // }
    return (
        <>
            <section className="hot-deal">
                <div className="special-items">
                    <p className="bg-dark text-white grid p-3" style={{ placeContent: "center", cursor: "pointer" }}>Special-Items</p>
                    {specialitems.map((item) => {
                        return (
                            <div key={item.id} className="item">
                                <img src={item.ImageUrl} height={100} width={100} alt="" />
                                <div className="detailofitem">
                                    <p style={{ marginBottom: "-6px" }}>{item.b_title}</p>
                                    <p style={{ marginBottom: "5px" }}>{item.a_title}</p>
                                    <span className="text-yellow-600 mr-2">${item.price}</span>
                                    <span className="line-through">${item.a_price}</span>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="deals">
                    <h2>Hot Deal</h2>
                    {/* <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <div className="cards">{carouselUI}</div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="cards">{carouselUI}</div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="cards">{carouselUI}</div>

                        </Carousel.Item>
                    </Carousel> */}
                    {/* <br /> */}
                    {/* <Carousel data-bs-theme="dark">
                        <Carousel.Item>
                            <div className="cards">{carouseldealUI}</div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="cards">{carouseldealUI}</div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="cards">{carouseldealUI}</div>

                        </Carousel.Item>
                    </Carousel> */}
                    <div id="carouselExampleCaptions" data-bs-ride="carousel" className="carousel slide">
                        <div className="img-cards carousel-inner">
                            <div className="carousel-item ng-star-inserted active one">
                                <div className="cards">{carouselUI}</div>
                            </div>
                            <div className="carousel-item ng-star-inserted two">
                                <div className="cards">{carouselUI}</div>
                            </div>
                            <div className="carousel-item ng-star-inserted three ">
                                <div className="cards">{carouselUI}</div>

                            </div>
                        </div>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"
                            className="carousel-control-prev">
                            <IoIosArrowBack size={35} aria-hidden="true" className="carousel-control-prev-icon bg-black text-[#0f5069e8] w-12 h-12" />
                            <span className="hidden">Previous</span>
                        </button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"
                            className="carousel-control-next">
                            <IoIosArrowForward size={35} aria-hidden="true" className="carousel-control-next-icon bg-black text-[#0f5069e8] w-12 h-12" />
                            <span className="hidden">Next</span>
                        </button>
                    </div>
                    <br />
                    <div id="carouselExampleCaptionss" data-bs-ride="carousel" className="carousel slide">
                        <div className="img-cards carousel-inner">
                            <div className="carousel-item ng-star-inserted active one">
                                <div className="cards">{carouseldealUI}</div>
                            </div>
                            <div className="carousel-item ng-star-inserted two">
                                <div className="cards">{carouseldealUI}</div>
                            </div>
                            <div className="carousel-item ng-star-inserted three ">
                                <div className="cards">{carouseldealUI}</div>

                            </div>
                        </div>
                        <button type="button" data-bs-target="#carouselExampleCaptionss" data-bs-slide="prev"
                            className="carousel-control-prev">
                            <IoIosArrowBack size={35} aria-hidden="true" className="carousel-control-prev-icon bg-black text-[#0f5069e8] w-12 h-12" />
                            <span className="hidden">Previous</span>
                        </button>
                        <button type="button" data-bs-target="#carouselExampleCaptionss" data-bs-slide="next"
                            className="carousel-control-next">
                            <IoIosArrowForward size={35} aria-hidden="true" className="carousel-control-next-icon bg-black text-[#0f5069e8] w-12 h-12" />
                            <span className="hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
// const Hotdeal = () => {

//     return (
//         <>
//             <div>Hotdeal</div>
//         </>
//     )
// }
export default Hotdeal