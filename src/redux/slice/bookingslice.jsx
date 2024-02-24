import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    bookingitem: [],
    totalprice: 0,
    date: null,
    bookinghistory: [],
    selectedbooking: [],
    earning: 0
}
export const getbooking = createAsyncThunk("booking/getbooking", () => {
    return fetch("https://lava-11a9b-default-rtdb.firebaseio.com//booking.json")
        .then((respons) => { return respons.json() })
})
const bookingslice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        addservicetobooking(state, action) {
            state.bookingitem = []
            const itemindex = state.bookingitem.findIndex((item) => item.id === action.payload.id);
            if (itemindex < 0) {
                const tempitem = { ...action.payload };
                state.bookingitem.push(tempitem);
                // state.totalquantity += 1
                state.totalprice += (+action.payload.totprice)
                toast.success(`${action.payload.title} added to booking`, {
                    position: "top-left",
                });
            }
            else {
                toast.info(`${action.payload.title} is already added `, {
                    position: "top-left",
                });
            }
        },
        confirmbookingdetails(state, action) {
            const { selected, hour } = action.payload;
            state.date = selected + ' : ' + hour;
            state.bookingitem.map(ele => {
                ele.time = selected + ' : ' + hour
            })
        },
        clearcart(state, action) {
            state.bookingitem = [];
            state.totalprice = 0;
            state.date = null
            toast.info(`Booking cleared`, {
                position: "top-left",
            });
        },
        detailofselectbooking(state, action) {
            const temp = state.bookinghistory.filter((order) => order.id === action.payload);
            state.selectedbooking = temp;
        },
        calcearning(state) {
            let temp = [];
            state.bookinghistory.map((order) => temp.push(order.orderamount));
            const totalearn = temp.reduce((a, b) => {
                return a + b;
            }, 0)
            state.earning = totalearn;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getbooking.pending, () => { })
        builder.addCase(getbooking.fulfilled, (state, action) => {
            state.bookinghistory = []
            for (const key in action.payload) {
                state.bookinghistory.push({
                    id: key,
                    orderamount: action.payload[key].orderamount,
                    orderitem: action.payload[key].orderitem,
                    orderdate: action.payload[key].orderdate,
                    uid: action.payload[key].uid,
                })
            }
        })
        builder.addCase(getbooking.rejected, () => { })
    }
})
export const bookingitem = (state) => state.booking.bookingitem;
export const totalprice = (state) => state.booking.totalprice;
export const datetime = (state) => state.booking.date;
export const bookingshistory = (state) => state.booking.bookinghistory;
export const selectedbooking = (state) => state.booking.selectedbooking;
export const earning = (state) => state.booking.earning;
export const { addservicetobooking, confirmbookingdetails, clearcart, detailofselectbooking, calcearning } = bookingslice.actions
export default bookingslice