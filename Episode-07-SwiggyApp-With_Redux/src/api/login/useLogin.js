import { loginSuccess } from '../../redux/slices/auth/authSlice';
import { BASE_URL } from '../../utils/constants';

export const useLogin = async (values, setApiError, dispatch) => {
    try {
        const res = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        });
        const result = await res.json();
        if (result.status >= 200 && result.status <= 202) {
            console.log('result in',result)
            dispatch(loginSuccess({isAuthenticated:true}))
            localStorage.setItem('authToken', result?.token)
        }
        else {
            setApiError(result?.error)
        }
    }
    catch (error) {
        console.log(error)
    }
};
