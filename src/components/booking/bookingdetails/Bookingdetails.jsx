import React, { useEffect, useState } from 'react'
import '../Booking.css'
import { ToastContainer, toast } from 'react-toastify'
import data from '../../../../public/data.json'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addservicetobooking, bookingitem, confirmbookingdetails, datetime, totalprice } from '../../../redux/slice/bookingslice'
import { addtocart } from '../../../redux/slice/cartslice'
import image1 from '../../../assets/sedan.png'
import image2 from '../../../assets/crossover.png'
import image3 from '../../../assets/van.png'
import image4 from '../../../assets/car.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { servicesdata } from '../../../redux/slice/serviceslice'

const Bookingdetails = () => {
    // const [active, setActive] = useState(false)
    // const [services, setServices] = useState([])
    const services = useSelector(servicesdata)
    const [cars, setCars] = useState([])
    const [bodystyle, setBodystyle] = useState(null)
    const [typebrand, setTypebrand] = useState('')
    const [typemodel, setTypemodel] = useState('')
    const [model, setModel] = useState([])
    const [platenumber, setPlatenumber] = useState('')
    const [typecolor, setTypecolor] = useState('')
    const [color, setColor] = useState('')
    const [totprice, setTotprice] = useState('')
    const [hour, setHour] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const bookingservices = useSelector(bookingitem)
    useEffect(() => {
        bookingservices.map(ele => {
            if (ele.time) {
                navigate('/Bookingconfirm')
            }
        })
    }, [bookingservices])
    useEffect(() => {
        if (data) {
            // setServices(data.booking_services)
            setCars(data.cars)
        }
    }, [data])
    const { id } = useParams();
    const productdetails = services.filter((pro) => pro.id === id);
    const serviceprice = +productdetails[0]?.serviceprice
    const selectBodyStyle = (ele) => {
        setTypebrand('')
        setTypemodel('')
        setTypecolor('')
        // dispatch(adddetailstobooking(ele));
        const res = cars.filter(obj => obj.name === ele)
        setBodystyle(res)
    }
    useEffect(() => {
        if (!productdetails) {
            // console.log('found')
            navigate('/booking')
        }
    }, [productdetails])
    const brand = [
        "Brand",
        ...new Set(bodystyle?.map((car) => car.brand)),
    ];
    const selectBrand = (ele) => {
        setTypebrand(ele)
        // dispatch(adddetailstobooking(ele));
        const resmodel = bodystyle.filter(obj => obj.brand === ele)
        resmodel.map(ele => setModel(ele.model))
        const rescolor = bodystyle.filter(obj => obj.brand === ele)
        rescolor.map(ele => setColor(ele.color))
        const resprice = bodystyle.filter(obj => obj.brand === ele)
        resprice.map(ele => setTotprice(+ele.price + +serviceprice))
        // totprice += resmodel.map(ele => ele.price)
        // resmodel.push(res)
        // console.log('resmodel', resmodel);
    }
    const confirmservices_details = () => {
        let services_details = {
            id: productdetails[0]?.id,
            title: productdetails[0]?.title,
            serviceprice: productdetails[0]?.serviceprice,
            serviceduration: productdetails[0]?.serviceduration,
            serviceduration: productdetails[0]?.serviceduration,
            brand: typebrand,
            color: typecolor,
            model: typemodel,
            tax: (+totprice - (+productdetails[0]?.serviceprice)),
            totprice: totprice
        }
        // console.log(services_details);
        dispatch(addservicetobooking(services_details))
        // navigate('/Bookingconfirm')
        // setActive(true)
    }
    // const [selectedDate, setSelectedDate] = useState(null);
    // const renderCalendar = () => {
    //     const date = new Date();
    //     const year = date.getFullYear();
    //     const month = date.getMonth();

    //     const firstDayOfMonth = new Date(year, month, 1).getDay();
    //     const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    //     // var today = new Date();
    //     // var datee = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    //     // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //     // var dateTime = datee + ' ' + time;
    //     const days = [];
    //     for (let i = 1; i <= lastDayOfMonth; i++) {
    //         days.push(
    //             <div
    //                 key={i}
    //                 className={`day ${selectedDate === i ? 'selected' : ''}`}
    //                 onClick={() => handleDayClick(i)}
    //             >
    //                 {i}
    //             </div>
    //         );
    //     }

    //     const emptyDays = [];
    //     for (let i = 0; i < firstDayOfMonth; i++) {
    //         emptyDays.push(<div key={`empty-${i}`} className="empty-day"></div>);
    //     }

    //     return [...emptyDays, ...days];
    // };
    // const handleDayClick = (day) => {
    //     // const options = { weekday: 'long' };
    //     // const myday = day.toLocaleString('en-US', options)
    //     // console.log(myday);
    //     setSelectedDate(day);
    // };
    // const getCurrentDayName = () => {
    //     const currentDate = new Date();
    //     const options = { weekday: 'long' };
    //     return currentDate.toLocaleString('en-US', options);
    // };
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selected, setSelected] = useState(null);
    const handleDateChange = (date) => {
        // var date = new Date();
        var day = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
        var dateTime = day;
        setSelected(dateTime)
        setSelectedDate(date);
    };
    let hoursAm = ['08:00', '09:00', '10:00', '11:00']
    let hoursPm = ['12:00', '01:00', '02:00', '03:00',]
    const confirmbooking = () => {
        dispatch(confirmbookingdetails({ selected: selected, hour: hour }))
        navigate('/Bookingconfirm')
    }
    return (
        <>
            {/* <ToastContainer /> */}
            <section className='booking'>
                {bookingservices.length === 0 ?
                    <>
                        <div className="booking-details">
                            <div className="head">
                                <h2><b>Booking Details</b></h2>
                                <Link to="/booking">&larr; Back To Services</Link>
                            </div>
                            <div className="content" >
                                <div className="image">
                                    <img src={productdetails[0]?.ImageUrl} alt="detail" />
                                </div>
                                <div className="text">
                                    <p className="title">{productdetails[0]?.title}</p>
                                    <h5 className="price">{productdetails[0]?.serviceprice} EGB</h5>
                                    <p className="description">{productdetails[0]?.description}</p>
                                    {/* <h5 className="category">{productdetails[0]?.category}</h5> */}
                                    {/* <p><b className="title">Brand: {productdetails[0]?.brand}</b></p> */}
                                    {/* <button onClick={additem} className="addingbtn">Add to Booking</button> */}
                                </div>
                            </div>
                        </div>
                        <div className="booking-form">
                            <div className="body-style">
                                <h2>Body Style</h2>
                                <div className="styles">
                                    {/* {cars &&
                                cars.map(ele => {
                                    return (
                                        <img src={ele.ImageUrl} onClick={() => selectBodyStyle(ele)} alt="detail" />

                                    )
                                })
                            } */}
                                    <img className='bg-white p-3 rounded-xl cursor-pointer' src={image1} onClick={() => selectBodyStyle("sedan")} alt="detail" />
                                    <img className='bg-white p-3 rounded-xl cursor-pointer' src={image2} onClick={() => selectBodyStyle("suv")} alt="detail" />
                                    <img className='bg-white p-3 rounded-xl cursor-pointer' src={image3} onClick={() => selectBodyStyle("van")} alt="detail" />
                                    <img className='bg-white p-3 rounded-xl cursor-pointer' src={image4} onClick={() => selectBodyStyle("pickup")} alt="detail" />
                                    <img className='bg-white p-3 rounded-xl cursor-pointer' src={image1} onClick={() => selectBodyStyle("sport")} alt="detail" />
                                </div>
                            </div>
                            {bodystyle &&
                                <div className="card-details">
                                    <select aria-label="Default select example" className='bg-transparent border p-3 rounded-xl text-xl form-select' onChange={(e) => {
                                        // setTypebrand(e.target.value);
                                        selectBrand(e.target.value)
                                        // filterbycategory(e.target.value);
                                    }}>
                                        {brand.map((cat, index) => {
                                            return (
                                                <option key={index} value={cat}>{cat}</option>
                                            )
                                        })}
                                    </select>
                                    {typebrand &&
                                        <>
                                            <select aria-label="Default select example" className='bg-transparent border p-3 rounded-xl text-xl form-select' onChange={(e) => {
                                                setTypemodel(e.target.value);
                                                // filterbycategory(e.target.value);
                                            }}>
                                                <option value="model">Model</option>
                                                {model.map((cat, index) => {
                                                    return (
                                                        <option key={index} value={cat}>{cat}</option>
                                                    )
                                                })}
                                            </select>
                                            <input type="text" className='bg-transparent border p-3 rounded-xl text-xl' value={platenumber} placeholder='Plate Number' onChange={(e) => setPlatenumber(e.target.value)} />
                                            <br />
                                        </>
                                    }
                                    {typemodel && platenumber &&
                                        <>
                                            <label htmlFor="">car Color</label>
                                            <div className="color flex">
                                                {color.map((cat, index) => {
                                                    return (
                                                        <p key={index} className={`w-10 h-10 mx-2 rounded-full cursor-pointer border-white  border-2`} style={{ backgroundColor: `${cat}` }} onClick={() => setTypecolor(cat)}></p>
                                                        // <option key={index} value={cat}>{cat}</option>
                                                    )
                                                })}
                                            </div>
                                        </>
                                    }
                                    {typecolor &&
                                        <div className='bg-gray-400 w-[400px] flex justify-between items-center px-2 my-6 rounded-xl'>
                                            <span >{totprice} EGB</span>
                                            <button className='confirm rounded-xl text-2xl py-3 px-6 bg-sky-700' onClick={confirmservices_details}>Next</button>
                                        </div>
                                    }
                                </div>
                            }


                        </div>
                    </>
                    :
                    // <div>
                    //     <h2>Select Day</h2>
                    //     <div className="calendar">
                    //         <div className="weekdays">
                    //             <div className='weekday'>Sat</div>
                    //             <div className='weekday'>Sun</div>
                    //             <div className='weekday'>Mon</div>
                    //             <div className='weekday'>Tues</div>
                    //             <div className='weekday'>Wedn</div>
                    //             <div className='weekday'>Thurs</div>
                    //             <div className='weekday'>Fri</div>
                    //         </div>
                    //         <div className="days">{renderCalendar()}</div>
                    //     </div>
                    //     {selectedDate && (
                    //         <div>
                    //             <h3>Selected Date:</h3>
                    //             <p>{selectedDate}</p>
                    //             {/* <p>Today is {getCurrentDayName()}</p> */}
                    //         </div>

                    //     )}
                    // </div>
                    < >
                        <h1 className='my-4'>Select Day</h1>
                        <Calendar
                            className={`custom-calendar`}
                            value={selectedDate}
                            onChange={handleDateChange}
                            locale="en-US"
                            showWeekNumbers
                            showNeighboringMonth
                        />
                        <div className="hours">
                            {
                                hoursAm.map((ele, index) => {
                                    return (
                                        <>
                                            <p key={index} onClick={() => setHour(ele + " AM")}>{ele}AM</p>
                                        </>
                                    )
                                })

                            }
                            {
                                hoursPm.map((ele, index) => {
                                    return (
                                        <>
                                            <p key={index} onClick={() => setHour(ele + " PM")}>{ele}PM</p>
                                        </>
                                    )
                                })

                            }
                        </div>
                        {selected && hour &&
                            <>
                                <p className='my-4'>{selected + ' : ' + hour}</p>
                                {/* <p>{selectedDate}</p> */}
                                <button className='confirm rounded-xl text-2xl py-3 px-6 bg-sky-700' onClick={confirmbooking}>Next</button>
                            </>
                        }
                    </>
                }
            </section>


        </>
    )
}

export default Bookingdetails