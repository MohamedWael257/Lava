import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    favourititem: []
}
const favouritslice = createSlice({
    name: "favourit",
    initialState,
    reducers: {
        addtofavourit(state, action) {
            const itemindex = state.favourititem.findIndex((item) => item.id === action.payload.id);
            if (itemindex < 0) {
                const tempitem = { ...action.payload, favourit: true };
                state.favourititem.push(tempitem);
                toast.success(`${action.payload.title} added to favourit`, {
                    position: "top-left",
                });
            }
            else {
                const objWithIdIndex = state.favourititem.findIndex((item) => item.id === action.payload.id)
                state.favourititem.splice(objWithIdIndex, 1)
                toast.success(`${action.payload.title} removed from favourit list`, {
                    position: "top-left",
                });

            }
        },
        decrease(state, action) {
            const itemindex = state.favourititem.findIndex((item) => item.id === action.payload.id);
            const theitemquantity = state.favourititem[itemindex].itemquantity;
            if (theitemquantity === 1) {
                const removeitem = state.favourititem.filter((item) => item.id !== action.payload.id);
                state.favourititem = removeitem;
                state.totalquantity -= 1
                state.totalprice -= (+action.payload.price)
                toast.success(`${action.payload.title} removed from favourit`, {
                    position: "top-left",
                });
            } else {
                state.favourititem[itemindex].itemquantity -= 1;
                state.totalquantity -= 1
                state.totalprice -= state.favourititem[itemindex].price
                toast.info(`${action.payload.title} decreased by one`, {
                    position: "top-left",
                })
            }

        },
        clearfavourit(state) {
            state.favourititem = [];
            state.totalprice = 0;
            state.totalquantity = 0;
            toast.info(`favourit cleared`, {
                position: "top-left",
            });
        },
        removefromfavourit(state, action) {
            const removeitem = state.favourititem.filter((item) => item.id !== action.payload.id);
            state.favourititem = removeitem;
            state.totalquantity -= action.payload.itemquantity
            state.totalprice -= action.payload.price
            toast.success(`${action.payload.title} removed from favourit`, {
                position: "top-left",
            });
        },
    },
})
export default favouritslice
export const { addtofavourit, decrease, removefromfavourit, clearfavourit } = favouritslice.actions;
export const favourititem = (state) => state.favourit.favourititem;
