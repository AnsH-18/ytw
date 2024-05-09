import { createSlice } from "@reduxjs/toolkit";


let  initialState = JSON.parse(localStorage.getItem("userInfo"))

if(!initialState){
    initialState = {
        data: {
            userName: "",
            fullName: "",
            email: "",
            avatar: "",
            coverImage: "",
            accessToken: "",
            refreshToken: "",
        },
        status: false,
    }
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            //set auth state
          const {userName, fullName, email, avatar, coverImage, accessToken, refreshToken} = action.payload
          console.log(action.payload)
          state.status = true
          state.data = {
            userName,
            fullName,
            email,
            avatar,
            coverImage,
            accessToken,
            refreshToken
          }
          localStorage.setItem("userInfo", JSON.stringify(state))
          return state

        },
        logout: (state, action) => {
            //clear auth state
            state.data = {
                userName : "",
                fullName : "",
                email: "",
                avatar: "",
                coverImage: "",
                accessToken: "",
                refreshToken: ""
              }
              state.status = false
              localStorage.setItem("userInfo", JSON.stringify(state))
              return state
        }
    }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer

// register: (state, action) => {
//     const formData = new FormData()
//     //don't set auth state 
//     const {userName, fullName, email, password, avatar, coverImage} = action.payload
//     const url = "http://localhost:8000/api/v1/users/register"
//     formData.append('userName', userName)
//     formData.append('fullName', fullName),
//     formData.append('email', email)
//     formData.append('password', password)
//     formData.append('avatar', avatar)
//     formData.append('coverImage', coverImage)
//     fetch(url, {
//         method: 'POST',
//         body: formData,
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//          },
//     }).then((res) => {
//         res.json()
//     }).then(data => {
//         console.log(data)
//         // console.log("reached")
//     })
//     return state

// },