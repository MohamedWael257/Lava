import React, { useRef, useState } from 'react'
import "./Pricing.css"
import Image1 from '../../../../assets/full-deep-Icon.png'
import Image2 from '../../../../assets/glass-coating.png'

const Pricing = () => {
    const pricingref = useRef()
    const [active, setActive] = useState(true)
    // window.onscroll = () => {
    //     let pricingcontaintop = pricingref.current.offsetTop;
    //     let pricingheight = pricingref.current.offsetHeight;
    //     let screenheight = window.innerHeight;
    //     let scrollaction = window.pageYOffset;
    //     if (scrollaction > (pricingcontaintop + (0.5 * pricingheight) - screenheight)) {
    //         setActive(true)
    //     } else {
    //         setActive(false)
    //     }
    // }
    return (
        <section className="pricing" ref={pricingref}>
            <div className="overlay">
                <h3>pricing</h3>
                <div className="cont1">
                    <h2>pricing plan</h2>
                    <div>
                        <p>custom plan</p>
                        <p>ic +1 234567890</p>
                    </div>
                </div>
                <div className="cont2">

                    <div className={`${active ? "cont2-left active" : "cont2-left"}`}>
                        <div className="pricing-icon">
                            <img src={Image1} alt="" />
                        </div>
                        <h2 className="pricing-title">full deep detail package</h2>
                        <p className="pricing-desc">Those wanting a complete rejuvenation for their vehicle or prepping for a
                            special occasion.
                        </p>
                        <ul className="pricing-adv">
                            <li>car bar treatment</li>
                            <li>high-end ws/sealant</li>
                            <li>deep interior shampoo & conditioning</li>
                            <li> engine bay cleaning</li>
                        </ul>
                        <hr />
                        <div className="pricing-pay">
                            <p>$99.99</p>
                            <button>book now</button>
                        </div>
                    </div>
                    <div className={`${active ? "cont2-right active" : "cont2-right"}`}>
                        <div className="cont2-right-top">
                            <div className="cell">
                                <div className="pricing-icon">
                                    <img src={Image2} alt="" />
                                </div>
                                <div>
                                    <h2 className="pricing-title">standard detail</h2>
                                    <p className="pricing-desc">Those wanting a complete rejuvenation for their vehicle or
                                        prepping
                                        for a special occasion.
                                    </p>
                                </div>
                            </div>
                            <ul className="pricing-adv">
                                <li>Interior Detailing</li>
                                <li>Exterior Wax Protection </li>
                                <li>Quick Interior Vacuum </li>
                                <li>High-end Wax/Sealant</li>
                            </ul>
                            <hr />
                            <div className="pricing-pay">
                                <p>$49.99</p>
                                <button>book now</button>
                            </div>
                        </div>
                        <div className="cont2-right-bottom">
                            <h2 className="pricing-title">full deep detail package</h2>
                            <ul className="pricing-adv">
                                <li>Interior Detailing</li>
                                <li>Exterior Wax Protection </li>
                                <li>Quick Interior Vacuum </li>
                                <li>High-end Wax/Sealant</li>
                            </ul>
                            <hr />
                            <div className="pricing-pay">
                                <p>$19.99</p>
                                <button>book now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing