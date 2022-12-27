import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: [],
    isLoading: false,
    error: false,
    message: "",
    token: ""
}

export const createProduct = createAsyncThunk("createproduct", async (body) => {
    try {
        const res = await fetch("https://shopping-backend-cmc7.onrender.com/api/post/create", {
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
        const res = await fetch(`https://shopping-backend-cmc7.onrender.com/api/post/single/${id}`, {
            method: "get"
        })
        return await res.json()
    } catch (error) {
        console.log(error)
    }
})

export const deleteProduct = createAsyncThunk("deletingproduct", async ({ id }) => {
    try {
        const res = await fetch(`http://localhost:8000/api/post/${id}`, {
            method: "delete",
        })
        return res
    } catch (error) {

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