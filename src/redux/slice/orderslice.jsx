import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    orderhistory: [],
    selectedorder: [],
    earning: 0
}
export const getorders = createAsyncThunk("order/getorders", () => {
    return fetch("https://lava-11a9b-default-rtdb.firebaseio.com//orders.json")
        .then((respons) => { return respons.json() })
})
const orderslice = createSlice({
    name: "order",
    initialState,
    reducers: {
        detailofselectedorder(state, action) {
            const temp = state.orderhistory.filter((order) => order.id === action.payload);
            state.selectedorder = temp;
        },
        calcearning(state) {
            let temp = [];
            state.orderhistory.map((order) => temp.push(order.orderamount));
            const totalearn = temp.reduce((a, b) => {
                return a + b;
            }, 0)
            state.earning = totalearn;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getorders.pending, () => { })
        builder.addCase(getorders.fulfilled, (state, action) => {
            state.orderhistory = []
            for (const key in action.payload) {
                state.orderhistory.push({
                    id: key,
                    orderamount: action.payload[key].orderamount,
                    orderitem: action.payload[key].orderitem,
                    orderdate: action.payload[key].orderdate,
                    uid: action.payload[key].uid,
                })
            }
        })
        builder.addCase(getorders.rejected, () => { })
    }
});
export const ordershistory = (state) => state.order.orderhistory;
export const selectedorder = (state) => state.order.selectedorder;
export const earning = (state) => state.order.earning;
export const { detailofselectedorder, calcearning } = orderslice.actions
export default orderslice