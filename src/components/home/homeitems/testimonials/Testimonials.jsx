import React from 'react'
import './Testimonials.css'
import Image1 from '../../../../assets/Testi-Profile-4.png'
import Image2 from '../../../../assets/Testi-Profile-3.png'
import Image3 from '../../../../assets/Testi-Profile-2.png'
import Image4 from '../../../../assets/Test-iProfile-1.png'

const Testimonials = () => {
    return (
        <section className="testimonials">
            {/* <div className="overlay"> */}
            <h3>testimonials</h3>
            <h2>why we stand out?</h2>
            <p>more than a decade of exellence in car care</p>
            <div className="cards">
                <div className="card">
                    <div className="card-left">
                        <img className="card-img" src={Image1} alt="" />
                        <h3 className="card-name">mohamed</h3>
                        <p>customer</p>
                    </div>
                    <div className="card-right">
                        <p className="card-icon">,,</p>
                        <h2 className="card-title">Transformed To Brand New!</h2>
                        <p className="card-desc">I've been to a number of car washes in the area, but the Premium Detail
                            service here is by
                            far the best
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-left">
                        <img className="card-img" src={Image2} alt="" />
                        <h3 className="card-name">mohamed</h3>
                        <p>customer</p>
                    </div>
                    <div className="card-right">
                        <p className="card-icon">,,</p>
                        <h2 className="card-title">Transformed To Brand New!</h2>
                        <p className="card-desc">I've been to a number of car washes in the area, but the Premium Detail
                            service here is by
                            far the best
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-left">
                        <img className="card-img" src={Image3} alt="" />
                        <h3 className="card-name">mohamed</h3>
                        <p>customer</p>
                    </div>
                    <div className="card-right">
                        <p className="card-icon">,,</p>
                        <h2 className="card-title">Transformed To Brand New!</h2>
                        <p className="card-desc">I've been to a number of car washes in the area, but the Premium Detail
                            service here is by
                            far the best
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-left">
                        <img className="card-img" src={Image4} alt="" />
                        <h3 className="card-name">mohamed</h3>
                        <p>customer</p>
                    </div>
                    <div className="card-right">
                        <p className="card-icon">,,</p>
                        <h2 className="card-title">Transformed To Brand New!</h2>
                        <p className="card-desc">I've been to a number of car washes in the area, but the Premium Detail
                            service here is by
                            far the best
                        </p>
                    </div>
                </div>
            </div>
            <button>all testimonials</button>
            {/* </div> */}
        </section>
    )
}

export default Testimonials