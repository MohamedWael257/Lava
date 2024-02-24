import React from 'react'
import './Ourtrust.css'
const Ourtrust = () => {
    return (
        <section className="our-trust">
            <div className="our-trust-left">
                <h3>we are the best</h3>
                <h2>Trust the professionals for Car Wash</h2>
                <p>E-Learning Adventures is committed to transforming the traditional learning landscape. With a blend of
                    engaging content, interactive exercises, and cutting-edge technology, we ensure every learner finds
                    their path to success </p>
                <br />
                <a href="#" className="learn">learn more</a>
                <a href="contact" className="contact">contact us</a>
            </div>
            <div className="our-trust-right">
                <div className="card">
                    <img src="images/glass-coating.png" className="card-img" alt="" />
                    <div className="card-desc">
                        <h2>our vision</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Mauris mauris tortor aliquam adipiscing. </p>
                        <button>read more</button>
                    </div>
                </div>
                <div className="card">
                    <img src="images/car-shampoo.png" className="card-img" alt="" />
                    <div className="card-desc">
                        <h2>our vision</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Mauris mauris tortor aliquam adipiscing. </p>
                        <button>read more</button>
                    </div>
                </div>
                <div className="card">
                    <img src="images/glass-coating.png" className="card-img" alt="" />
                    <div className="card-desc">
                        <h2>our vision</h2>
                        <p>Lorem ipsum dolor sit amet consectetur. Mauris mauris tortor aliquam adipiscing. </p>
                        <button>read more</button>
                    </div>
                </div>
            </div>
            <div className="our-trust-slider">
                <p>logoipsum</p>
                <p>logoipsum</p>
                <p>logoipsum</p>
                <p>logoipsum</p>
            </div>
        </section>)
}

export default Ourtrust