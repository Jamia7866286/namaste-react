import { login, loginFailure, loginSuccess } from "../redux/slices/auth/authSlice";

export const isLogIn = (dispatch, navigate)=>{
    const loggedInUser = localStorage.getItem("authToken");
        if (loggedInUser) {
            dispatch(loginSuccess({ isAuthenticated: true }));
            navigate("/");
        }
        else{
            dispatch(loginFailure({ isAuthenticated: false }));
            navigate("/login");
        }
}
//   const token = sessionStorage.getItem("authToken"); // Use sessionStorage instead of localStorage

//   if (token) {
//     // Validate the token by making a request to your authentication server
//     fetch("/api/auth/validate", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.valid) {
//           dispatch(loginSuccess({ isAuthenticated: true }));
//           navigate("/");
//         } else {
//           dispatch(loginFailure({ isAuthenticated: false }));
//           navigate("/login");
//         }
//       })
//       .catch((error) => {
//         dispatch(loginFailure({ isAuthenticated: false }));
//         navigate("/login");
//       });
//   } else {
//     dispatch(loginFailure({ isAuthenticated: false }));
//     navigate("/login");
//   }
// };