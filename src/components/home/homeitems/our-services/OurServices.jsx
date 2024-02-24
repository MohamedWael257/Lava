import React, { useEffect, useRef, useState } from 'react'
import './OurServices.css'
import Icon1 from '../../../../assets/Icon-3-Our-Service.png'
import Icon2 from '../../../../assets/Our-Service-Icon.png'
import Icon3 from '../../../../assets/Our-Service-Icon2.png'
import Icon4 from '../../../../assets/Our-Service-Icon4.png'
import data from '../../../../../public/data.json'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addservicetobooking } from '../../../../redux/slice/bookingslice'
const OurServices = () => {
  const [services, setServices] = useState([])
  useEffect(() => {
    if (data) {
      setServices(data.booking_services)
    }
  }, [data])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const ourservicesref = useRef()
  const [active, setActive] = useState(true)
  const addservicebooking = (ele) => {
    dispatch(addservicetobooking(ele))
    navigate(`/bookingdetails/${ele.id}`)
  }
  // window.onscroll = () => {
  //   let ourservicescontaintop = ourservicesref.current.offsetTop;
  //   let ourservicesheight = ourservicesref.current.offsetHeight;
  //   let screenheight = window.innerHeight;
  //   let scrollaction = window.pageYOffset;
  //   if (scrollaction > (ourservicescontaintop + (0.5 * ourservicesheight) - screenheight)) {
  //     setActive(true)
  //   } else {
  //     setActive(false)
  //   }
  // }
  return (
    <section className="our-services" ref={ourservicesref}>
      {/* <div className="elementor-shape elementor-shape-top" data-negative="false">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path className="elementor-shape-fill"
                    d="M1000,4.3V0H0v4.3C0.9,23.1,126.7,99.2,500,100S1000,22.7,1000,4.3z"></path>
            </svg>
        </div>  */}
      <h3>our services</h3>
      <h2>our comprehensive services</h2>
      <div className="container-cards">
        {/* <div className={`${active ? "card active" : "card"}`}>
          <img className="card-icon" src={Icon1} alt="img" />
          <h3 className="card-title">automatic car wash</h3>
          <p className="card-desc">Lorem ipsum dolor sit amet consectetur. Mauris mauris tortor aliquam adipiscing.
          </p>
          <button className="card-btn">Read more</button>
        </div>
        <div className={`${active ? "card active" : "card"}`}>
          <img className="card-icon" src={Icon2} alt="img" />
          <h3 className="card-title">Interior Detailing</h3>
          <p className="card-desc">Lorem ipsum dolor sit amet consectetur. Mauris mauris tortor aliquam adipiscing.
          </p>
          <button className="card-btn">Read more</button>
        </div>
        <div className={`${active ? "card active" : "card"}`}>
          <img className="card-icon" src={Icon3} alt="img" />
          <h3 className="card-title">Body Scratch Remover</h3>
          <p className="card-desc">Lorem ipsum dolor sit amet consectetur. Mauris mauris tortor aliquam adipiscing.
          </p>
          <button className="card-btn">Read more</button>
        </div>
        <div className={`${active ? "card active" : "card"}`}>
          <img className="card-icon" src={Icon4} alt="img" />
          <h3 className="card-title">car engine wash</h3>
          <p className="card-desc">Lorem ipsum dolor sit amet consectetur. Mauris mauris tortor aliquam adipiscing.
          </p>
          <button className="card-btn">Read more</button>
        </div> */}
        {
          services &&
          services.map((ele, index) => {
            return (
              <div className={`${active ? "card active" : "card"}`} key={index}>
                <img className="card-icon" src={ele.ImageUrl} alt="img" />
                <h3 className="card-title">{ele.title}</h3>
                <p className="card-desc">{ele.description}</p>
                <button className="card-btn" onClick={() => addservicebooking(ele)}>Add booking</button>
              </div>
            )
          })
        }
      </div>
      <button>more services</button>
    </section>
  )
}

export default OurServices