import { login } from "../redux/slices/auth/authSlice";

export const isLogIn = (dispatch, navigate)=>{
    const loggedInUser = localStorage.getItem("authToken");
        if (loggedInUser) {
            dispatch(login({isAuthenticated:true}))
            // navigate('/')
        }
        else{
            navigate('/login') 
            dispatch(login({isAuthenticated:false}))
        }
}