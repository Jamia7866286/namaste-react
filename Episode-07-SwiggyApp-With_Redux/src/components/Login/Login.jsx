import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { json, useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/auth/authSlice";
import ErrorMessage from "../../common/Error/Error";
import * as yup from 'yup'
import { useFormik } from "formik";
import { useLogin } from "../../api/login/useLogin";
import { isLogIn } from "../../utils/commonFunctions";

let userInfoSchema = yup.object({
    email: yup.string().required("Please fill this field!").email(),
    password: yup.string().required("Please fill this field!"),
});

const LoginComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [apiError, setApiError] = useState('')

    // const authData = useSelector((store) => store.auth);

    const { handleSubmit, values, handleChange, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        enableReinitialize: true,
        validationSchema: userInfoSchema,
        onSubmit: async (values) => {
            useLogin(values, setApiError, dispatch)
            navigate('/')
            // localStorage.setItem('userEmail', result?.email)
            // localStorage.setItem('userPassword', result?.password)
        },
    })

    return (
        <form onSubmit={handleSubmit} className="w-full flex justify-center pt-20">
            <div className="flex flex-col justify-between space-y-4 pl-12 pr-20 w-[462px]">
                <p className="text-2xl font-semibold">Login</p>
                <p className="flex flex-row items-center text-[14px]">
                    or
                    <span className="text-rose-600 font-medium ml-1">
                        <button type="button" onClick={() => navigate('/signup')}>
                            {" "}
                            create an account
                        </button>
                    </span>
                </p>
                <input
                    type="text"
                    placeholder="Enter your email address"
                    className="mt-12 border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm placeholder:pb-2"
                    name="email"
                    value={values.email}
                    onChange={(e)=>{
                        handleChange(e)
                        setApiError('')
                    }}
                    autoComplete="on"
                />
                {errors.email && touched.email && <ErrorMessage message={errors.email} />}

                <input
                    type="password"
                    placeholder="Enter your password"
                    className="border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm"
                    name="password"
                    value={values.password}
                    onChange={(e)=>{
                        handleChange(e)
                        setApiError('')
                    }}
                    autoComplete="on"
                />
                {errors.password && touched.password && <ErrorMessage message={errors.password} />}
                {apiError && <ErrorMessage message={apiError} />}
                <button
                    type="submit"
                    className="bg-red-600 text-white text-sm p-4 font-semibold rounded-sm">
                    LOGIN
                </button>
            </div>
        </form>
    );
};

export default LoginComponent;
