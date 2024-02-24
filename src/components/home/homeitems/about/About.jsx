import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import Foto1 from '../../../../assets/About-Us-foto-.png'
import Foto2 from '../../../../assets/About-Us-foto-2.png'
import Foto3 from '../../../../assets/About-Us-foto-3.png.png'

import Foto4 from '../../../../assets/About-us-image.png'
import Foto5 from '../../../../assets/About-us-image2.png'
import Foto6 from '../../../../assets/About-us-image3.png'


const About = () => {
    const aboutref = useRef()
    const [active, setActive] = useState(true)
    // window.onscroll = () => {
    //     let aboutcontaintop = aboutref.current.offsetTop;
    //     let aboutheight = aboutref.current.offsetHeight;
    //     let screenheight = window.innerHeight;
    //     let scrollaction = window.pageYOffset;
    //     if (scrollaction > (aboutcontaintop + (0.5 * aboutheight) - screenheight)) {
    //         setActive(true)
    //     } else {
    //         setActive(false)

    //     }
    // }
    return (
        <section className="about" ref={aboutref}>
            <div className={`${active ? "about-left active" : "about-left"}`} >
                <img src={Foto1} alt="" />
                <img src={Foto2} alt="" />
                <img src={Foto3} alt="" />
            </div>
            <div className={`${active ? "about-right active" : "about-right"}`}>
                <div className="about-right-top">
                    <div className="clients">
                        <img src={Foto4} alt="" />
                        <img src={Foto5} alt="" />
                        <img src={Foto6} alt="" />
                    </div>
                    <p>Mostly clients happy!</p>
                </div>
                <div className="about-right-bottom">
                    <h2>about us</h2>
                    <p>more than just a car wash</p>
                    <p>E-Learning Adventures is committed to transforming the traditional learning landscape. With a blend
                        of engaging content, interactive exercises, and cutting-edge technology, we ensure every learner
                        finds their path to success
                    </p>
                    <button className="learn-more">learn more!</button>
                </div>
            </div>
        </section>
    )
}

export default About