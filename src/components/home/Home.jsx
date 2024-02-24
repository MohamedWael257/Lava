import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Car_Hero from '../../assets/Car-Hero.png'
import About from './homeitems/about/About'
import OurServices from './homeitems/our-services/OurServices'
import Pricing from './homeitems/pricing/Pricing'
import ChooseUs from './homeitems/chooseus/ChooseUs'
import Testimonials from './homeitems/testimonials/Testimonials'
import Hotdeal from './homeitems/Hotdeal/Hotdeal'
import Fashiondigital from './homeitems/Fashiondigital/Fashiondigital'
const Home = () => {

    // const aboutref = useRef()
    // const [activeabout, setActiveabout] = useState(false)

    // const ourservicesref = useRef()
    // const [activeouerservices, setActiveouerservices] = useState(false)

    // const pricingref = useRef()
    // const [activepricing, setActivepricing] = useState(false)

    // window.onscroll = () => {
    //     let aboutcontaintop = aboutref.current.offsetTop;
    //     let aboutheight = aboutref.current.offsetHeight;
    //     let screenheight = window.innerHeight;
    //     let scrollaction = window.pageYOffset;
    //     if (scrollaction > (aboutcontaintop + (0.5 * aboutheight) - screenheight)) {
    //         setActiveabout(true)
    //     } else {
    //         setActiveabout(false)
    //     }
    //     ///////////////////////////////////////////
    //     let ourservicescontaintop = ourservicesref.current.offsetTop;
    //     let ourservicesheight = ourservicesref.current.offsetHeight;
    //     if (scrollaction > (ourservicescontaintop + (0.5 * ourservicesheight) - screenheight)) {
    //         setActiveouerservices(true)
    //     } else {
    //         setActiveouerservices(false)
    //     }
    //     ///////////////////////////////////////////
    //     let pricingcontaintop = pricingref.current.offsetTop;
    //     let pricingheight = pricingref.current.offsetHeight;
    //     if (scrollaction > (pricingcontaintop + (0.5 * pricingheight) - screenheight)) {
    //         setActivepricing(true)
    //     } else {
    //         setActivepricing(false)
    //     }
    // }
    return (
        <>
            <section className="home">
                <p className="home-title">carwash</p>
                <div className="cont1">
                    <h2 className="cont1-left">the best car wash</h2>
                    <div className="cont1-right">
                        <p>Lorem ipsum dolor sit amet consectetur. Elementum enim malesuada ultrices neque adipiscing
                            aenean vel orci pellentesque. Mauris id tincidunt sed egestas lorem aliquam sed elit.
                        </p>
                        <button className="booknow">book now!</button>
                    </div>
                </div>
                <div className="cont2">
                    <img src={Car_Hero} alt="" />
                </div>
                <div className="cont3">
                    <Link className="play-btn" to="/#"></Link>
                </div>

            </section>
            <About />
            <OurServices />
            <Hotdeal />
            <Fashiondigital />
            <Pricing />
            {/* <About aboutref={aboutref} activeabout={activeabout} />
            <OurServices ourservicesref={ourservicesref} activeouerservices={activeouerservices} />
            <Pricing pricingref={pricingref} activepricing={activepricing} /> */}
            <ChooseUs />
            <Testimonials />
        </>
    )
}

export default Home