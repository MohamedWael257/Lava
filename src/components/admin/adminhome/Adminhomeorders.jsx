import React, { useEffect } from "react";
// import Infobox from "../../ui/Infobox";
import styles from "./Home.module.css"
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { productdata } from "../../../redux/slice/productslice"
import { ordershistory, earning, calcearning } from "../../../redux/slice/orderslice"
import { useSelector, useDispatch } from "react-redux";
import Chart from "../chart/Chart"
const Adminhomeorders = () => {
    const earningIcon = <AiFillDollarCircle size={30} color="#b624ff" />;
    const productIcon = <BsCart4 size={30} color="#1f93ff" />;
    const ordersIcon = <FaCartArrowDown size={30} color="orangered" />
    const dispatch = useDispatch();
    const product = useSelector(productdata);
    const orders = useSelector(ordershistory);
    const earn = useSelector(earning)
    useEffect(() => {
        dispatch(calcearning());
    })
    return (
        <div className={styles.container}>
            <h2>Admin Home</h2>
            <div className={styles.infobox}>
                <div className={`${styles.box} ${styles.card1}`}>
                    <p>Earning</p>
                    <div className={styles.content}>
                        <p>{earn}</p>
                        {earningIcon}
                    </div>
                </div>
                <div className={`${styles.box} ${styles.card2}`}>
                    <p>Products</p>
                    <div className={styles.content}>
                        <p>{product.length}</p>
                        {productIcon}
                    </div>
                </div>
                <div className={`${styles.box} ${styles.card3}`}>
                    <p>Orders</p>
                    <div className={styles.content}>
                        <p>{orders.length}</p>
                        {ordersIcon}
                    </div>
                </div>

            </div>
            <div className={styles.chart}>
                <Chart order={orders} />
            </div>
        </div>
    )
}
export default Adminhomeorders