import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const initialState = {
    servicesdata: [],
    minPrice: 5,
    maxPrice: 5,
}
export const getservices = createAsyncThunk('services/getservices', async () => {
    return fetch("https://lava-11a9b-default-rtdb.firebaseio.com//services.json")
        .then((respons) => { return respons.json() })
});
const serviceslice = createSlice({
    name: "services",
    initialState,
    reducers: {
        pricerange(state) {
            const pricearray = [];
            state.servicesdata.map((pro) => {
                const price = pro.price;
                return pricearray.push(price);
            })
            const max = Math.max(...pricearray);
            const min = Math.min(...pricearray);
            state.minPrice = min;
            state.maxPrice = max;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(getservices.pending, () => { })
        builder.addCase(getservices.fulfilled, (state, action) => {
            state.servicesdata = []
            for (const key in action.payload) {
                state.servicesdata.push({
                    id: key,
                    title: action.payload[key].title,
                    description: action.payload[key].description,
                    serviceprice: action.payload[key].serviceprice,
                    serviceduration: action.payload[key].serviceduration,
                    ImageUrl: action.payload[key].ImageUrl,
                })
            }

        })
        builder.addCase(getservices.rejected, () => { })
    }
});
export default serviceslice;
export const { pricerange, shuffle } = serviceslice.actions
export const servicesdata = (state) => state.service.servicesdata;
export const suffledata = (state) => state.service.suffleservices;
export const minrange = (state) => state.service.minPrice;
export const maxringe = (state) => state.service.maxPrice;
