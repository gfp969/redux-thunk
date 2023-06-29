import { createSlice } from "@reduxjs/toolkit";

const estadoInicial={
    totalCont:0,
    productsList:[],
}

export const cartSlice=createSlice({
    name:"cart",
    initialState:estadoInicial,
    reducers:{
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.fullName = action.payload.fullName;
            state.token = action.payload.token;
        },
        unSetUser: (state, action) => {
            state.email = "";
            state.fullName = "";
            state.token = "";
        }
    },
})

export const{
    incrementar,
    decrementar,
    incrementarPorCantidad,
}=cartSlice.actions

export default cartSlice.reducer;