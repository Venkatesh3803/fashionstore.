import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from "react-toastify"

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "",
    isLoading: false,
    error: false,
    message: "",
    token: ""
}

export const registerUser = createAsyncThunk("registeruser", async (body) => {
    try {
        const res = await fetch("https://shopping-backend-cmc7.onrender.com/api/auth/register", {
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

export const loginUser = createAsyncThunk("loginuser", async (body) => {
    try {
        const res = await fetch("https://shopping-backend-cmc7.onrender.com/api/auth/login", {
            method: "put",
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

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.user = localStorage.getItem("user")
        },
        addToken: (state, action) => {
            state.user = localStorage.getItem("token")
        },
        logOut: (state, action) => {
            localStorage.clear()
            state.user = ""
            state.token = ""
            toast.success("Logout Sucess",{
                position: 'bottom-left'
            })
        }
    },
    extraReducers: {

        [registerUser.pending]: (state, action) => {
            state.isLoading = true
        },
        [registerUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.message = action.payload.message
            if (action.payload.message === "Registered Sucessfully") {
                toast.success(action.payload.message,{
                    position:'bottom-center'
                })
            } else {
                toast.error(action.payload.message,{
                    position:'bottom-center'
                })
            }
        },
        [registerUser.rejected]: (state, action) => {
            state.error = true
        },
        //loginuser
        [loginUser.pending]: (state, action) => {
            state.isLoading = true
        },
        [loginUser.fulfilled]: (state, action) => {
            state.isLoading = false
            state.user = action.payload.others
            state.token = action.payload.token
            state.message = action.payload.message
            if (action.payload.message === "Login Sucessfull") {
                toast.success(action.payload.message,{
                    position:'bottom-center'
                })
            } else {
                toast.error(action.payload.message,{
                    position:'bottom-center'
                })
            }
            if (action.payload.others) {
                localStorage.setItem("user", JSON.stringify(action.payload.others))
                localStorage.setItem("token", (action.payload.token))
            }
        },
        [loginUser.rejected]: (state, action) => {
            state.error = true
        }
    }
})

// Action creators are generated for each case reducer function
export const { addUser, addToken, logOut } = authSlice.actions

export default authSlice.reducer