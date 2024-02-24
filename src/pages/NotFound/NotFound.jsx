import React, { memo } from 'react'
import './notfound.css'
import four from '../../assets/Number-4.png'
import wheel from '../../assets/Wheel-With-Red-Rim-1.png'
import { Link, useNavigate } from 'react-router-dom'
const NotFound = memo(() => {
    const navigate = useNavigate()
    return (
        <>
            <div className="notfound">
                <div className="images">
                    <img src={four} alt="" />
                    <img src={wheel} alt="" />
                    <img src={four} alt="" />
                </div>
                <h2>page not found</h2>
                <button onClick={() => navigate('/')}>back to home</button>
            </div>
        </>
    )
})

export default NotFound