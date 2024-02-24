import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
    cartitem: [],
    totalquantity: 0,
    totalprice: 0
}
const cartslice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtocart(state, action) {
            const itemindex = state.cartitem.findIndex((item) => item.id === action.payload.id);
            if (itemindex < 0) {
                const tempitem = { ...action.payload, itemquantity: 1 };
                state.cartitem.push(tempitem);
                state.totalquantity += 1
                state.totalprice += (+action.payload.price)
                toast.success(`${action.payload.title} added to cart`, {
                    position: "top-left",
                });
            }
            else {
                state.cartitem[itemindex].itemquantity += 1;
                state.totalquantity += 1
                state.totalprice += (+state.cartitem[itemindex].price)
                toast.info(`${action.payload.title} increased by one`, {
                    position: "top-left",
                });
            }
        },
        decrease(state, action) {
            const itemindex = state.cartitem.findIndex((item) => item.id === action.payload.id);
            const theitemquantity = state.cartitem[itemindex].itemquantity;
            if (theitemquantity === 1) {
                const removeitem = state.cartitem.filter((item) => item.id !== action.payload.id);
                state.cartitem = removeitem;
                state.totalquantity -= 1
                state.totalprice -= (+action.payload.price)
                toast.success(`${action.payload.title} removed from cart`, {
                    position: "top-left",
                });
            } else {
                state.cartitem[itemindex].itemquantity -= 1;
                state.totalquantity -= 1
                state.totalprice -= state.cartitem[itemindex].price
                toast.info(`${action.payload.title} decreased by one`, {
                    position: "top-left",
                })
            }

        },
        clearcart(state) {
            state.cartitem = [];
            state.totalprice = 0;
            state.totalquantity = 0;
            toast.info(`Cart cleared`, {
                position: "top-left",
            });
        },
        removefromcart(state, action) {
            const removeitem = state.cartitem.filter((item) => item.id !== action.payload.id);
            state.cartitem = removeitem;
            state.totalquantity -= action.payload.itemquantity
            state.totalprice -= action.payload.price
            toast.success(`${action.payload.title} removed from cart`, {
                position: "top-left",
            });
        },
    },
})
export default cartslice
export const { addtocart, decrease, removefromcart, clearcart } = cartslice.actions;
export const cartitem = (state) => state.cart.cartitem;
export const totalquantity = (state) => state.cart.totalquantity;
export const totalprice = (state) => state.cart.totalprice;
