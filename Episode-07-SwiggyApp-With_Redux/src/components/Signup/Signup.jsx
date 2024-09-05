import { ErrorMessage, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import ErrorMessage from "../../common/Error/Error";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/auth/authSlice";
import { useSignup } from "../../api/signup/useSignup";

let userInfoSchema = yup.object({
  username: yup.string().required("Please fill this field!"),
  email: yup.string().required("Please fill this field!").email(),
  password: yup.string().required("Please fill this field!"),
  referralcode: yup.string().nullable(),
});

const SignupComponent = () => {
  const navigate = useNavigate();
  const [isReferral, setIsrefferal] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [apiError, setApiError] = useState("");

  const { handleSubmit, values, handleChange, errors, touched } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      referralcode: "",
    },
    enableReinitialize: true,
    validationSchema: userInfoSchema,
    onSubmit: (values) => {
      useSignup(values, setApiError, navigate);
    },
  });

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center pt-20">
      <div className="flex flex-col justify-between space-y-4 pl-12 pr-20 w-[462px]">
        <p className="text-2xl font-semibold">Sign Up</p>
        <p className="flex flex-row items-center text-[13px] mb-12">
          or
          <span className="text-rose-600 font-semibold ml-1">
            <button type="button" onClick={() => navigate("/login")}>
              login to your account
            </button>
          </span>
        </p>

        <input
          type="text"
          placeholder="Enter your user name"
          className="border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm"
          name="username"
          onChange={handleChange}
          value={values.username}
          autoComplete="on"
        />
        {errors.username && touched.username && (
          <ErrorMessage message={errors.username} />
        )}

        <input
          type="text"
          placeholder="Enter your email address"
          className="mt-12 border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm placeholder:pb-2"
          name="email"
          onChange={(e) => {
            handleChange(e);
            setApiError("");
          }}
          value={values.email}
          autoComplete="on"
        />
        {errors.email && touched.email && (
          <ErrorMessage message={errors.email} />
        )}

        <input
          type="password"
          placeholder="Enter your password"
          className="border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm"
          name="password"
          onChange={(e) => {
            handleChange(e);
          }}
          value={values.password}
          autoComplete="on"
        />
        {errors.password && touched.password && (
          <ErrorMessage message={errors.password} />
        )}

        {isReferral && (
          <input
            type="text"
            placeholder="Referral code"
            className="border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm"
            name="referralcode"
            onChange={handleChange}
            value={values.referralcode}
            autoComplete="on" 
          />
        )}
        {apiError && <ErrorMessage message={apiError} />}
        <button
          type="button"
          className="text-blue-500 text-left text-sm font-semibold"
          onClick={() => setIsrefferal((prev) => !prev)}
        >
          Have a referral code?
        </button>

        <button
          type="submit"
          className="bg-red-600 text-white text-sm p-4 font-semibold rounded-sm"
        >
          SIGN UP
        </button>
      </div>
    </form>
  );
};

export default SignupComponent;
