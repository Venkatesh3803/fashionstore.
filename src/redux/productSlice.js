import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify"

const initialState = {
    product: [],
    isLoading: false,
    error: false,
    message: "",
    token: ""
}

export const createProduct = createAsyncThunk("createproduct", async (body) => {
    try {
        const res = await fetch("https://fashionstorebackend.onrender.com/api/post/create", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        return await res.json()
    } catch (error) {
        console.log(error)
    }
})
export const fetchingSinglePost = createAsyncThunk("fetchingsinglepost", async ({ id }) => {
    try {
        const res = await fetch(`https://fashionstorebackend.onrender.com/api/post/single/${id}`, {
            method: "get"
        })
        return await res.json()
    } catch (error) {
        console.log(error)
    }
})

export const deleteProduct = createAsyncThunk("deletingproduct", async ({ id }) => {
    try {
        const res = await fetch(`https://fashionstorebackend.onrender.com/api/post/${id}`, {
            method: "delete",
        })
        return res
    } catch (error) {
        console.log(error)
    }
})

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addpost: (state, action) => {
            state.user = localStorage.getItem("user")
        },

    },
    extraReducers: {

        [createProduct.pending]: (state, action) => {
            state.isLoading = true
        },
        [createProduct.fulfilled]: (state, action) => {
            state.isLoading = false
            state.product = action.payload
            toast.success("Product Uploaded Sucessfully")
        },
        [createProduct.rejected]: (state, action) => {
            state.error = true
        },

        // get products

        [fetchingSinglePost.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchingSinglePost.fulfilled]: (state, action) => {
            state.isLoading = false
            state.product = action.payload
        },
        [fetchingSinglePost.rejected]: (state, action) => {
            state.error = true
        },
    }
})

// Action creators are generated for each case reducer function
export const { addUser } = productSlice.actions

export default productSlice.reducer