import React from 'react'
import './ChooseUs.css'
import Image1 from '../../../../assets/mechanic.png'
import Image2 from '../../../../assets/car-shampoo.png'
import Image3 from '../../../../assets/glass-coating.png'
import Image4 from '../../../../assets/pressure-washer.png'
import Image5 from '../../../../assets/About-Us-foto-.png'
import Image6 from '../../../../assets/About-Us-foto-3.png.png'
import Image7 from '../../../../assets/raunder-why-choose-us.png'
const ChooseUs = () => {
    return (
        <section className="choose-us">
            <div className="overlay">
                <h3>why choose us</h3>
                <h2>why we stand out?</h2>
                <p>more than a decade of exellence in car care</p>
                <div className="cards">
                    <div className="card">
                        <img className="card-img" src={Image1} alt="" />
                        <h2 className="card-title">10+ Years</h2>
                        <p className="card-desc">with trained professionals</p>
                    </div>
                    <div className="card">
                        <img className="card-img" src={Image2} alt="" />
                        <h2 className="card-title">Eco-Friendly </h2>
                        <p className="card-desc">Gentle on the environment products</p>
                    </div>
                    <div className="card">
                        <img className="card-img" src={Image3} alt="" />
                        <h2 className="card-title">Quality</h2>
                        <p className="card-desc">Standards guaranteeing satisfaction </p>
                    </div>
                    <div className="card">
                        <img className="card-img" src={Image4} alt="" />
                        <h2 className="card-title">Efficiency</h2>
                        <p className="card-desc">Quick, timely services </p>
                    </div>
                </div>
                <div className="images">
                    <div className="cell-img">
                        <img src={Image5} alt="" />
                        <img src={Image6} alt="" />
                    </div>
                    <img src={Image7} alt="" />
                </div>
            </div>

        </section>)
}

export default ChooseUs