import React from "react";
import styles from "./Chart.module.css"
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { useSelector } from "react-redux";
import { ordershistory } from "../../../redux/slice/orderslice";
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Chart = (props) => {
    const { order } = props;
    const mintwo = order.filter((ord) => ord.orderamount <= 2000).length
    const maxtwo = order.filter((ord) => ord.orderamount > 2000 && ord.orderamount < 5000).length
    const maxten = order.filter((ord) => ord.orderamount > 5000 && ord.orderamount <= 10000).length
    const maxfifteen = order.filter((ord) => ord.orderamount > 10000 && ord.orderamount <= 15000).length
    const maxtwenty = order.filter((ord) => ord.orderamount > 15000 && ord.orderamount <= 20000).length

    const data = {
        labels: ["2000>order>0", "5000>order>2000", "10000>order>5000", "15000>order>10000", "20000>order>15000",],
        datasets: [
            {
                label: "Order earn",
                data: [mintwo, maxtwo, maxten, maxfifteen, maxtwenty],
                backgroundColor: ["orangered", "#ff7722", "#1f93ff", "#9d0191", "#ff7722"],
            },
        ],
    }
    return (
        <div>
            <Bar data={data} />
        </div>
    )
}
export default Chart;