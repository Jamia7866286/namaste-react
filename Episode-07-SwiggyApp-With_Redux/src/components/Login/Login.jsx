import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const LoginComponent = () => {
    return (
        <div className="flex flex-col justify-between space-y-4 pl-12 pr-20 w-[462px]">
            <div className="">
                <AiOutlineClose
                    size={22}
                    onClick={() => {}}
                    className="mt-6 mb-2 cursor-pointer"
                />
            </div>
            <p className="text-2xl font-semibold">Login</p>
            <p className="flex flex-row items-center text-[14px]">
                or
                <span className="text-rose-600 font-medium ml-1">
                    <button type="button" onClick={() => {}}>
                        {" "}
                        create an account
                    </button>
                </span>
            </p>
            <input
                type="text"
                placeholder="Enter your email address"
                className="mt-12 border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm placeholder:pb-2"
                // value={emailAddress}
                onChange={(e) => {}}
            />
            <input
                type="password"
                placeholder="Enter your password"
                className="border rounded-sm px-2 py-4 placeholder:text-xs placeholder:-translate-y-4 text-sm"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
            />
            <div className="text-red-500">Error</div>
            <button
                type="submit"
                className="bg-red-600 text-white text-sm p-4 font-semibold rounded-sm"
                // onClick={handleLogin}
            >
                LOGIN
            </button>
        </div>
    );
};

export default LoginComponent;
