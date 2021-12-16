import React from "react";

import { Link as LinkRouter } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="bg-green-700  pt-10 h-screen font-encodeSans">
      <div>
        <LinkRouter
          to="/"
          className="font-bold text-white text-2xl ml-6 cursor-pointer"
        >
          Bankist
        </LinkRouter>
      </div>
      <div className="container w-96 mx-auto mt-8 ">
        <form action="#" className="flex flex-col text-white p-9  bg-gray-900">
          <h1 className="text-xl font-normal text-center mb-10">
            Sign in to your account
          </h1>
          <label htmlFor="for" className="mb-2 text-sm \">
            Email
          </label>
          <input type="email" required className="rounded p-4 mb-8" />
          <label htmlFor="for" className="mb-2 text-sm ">
            Password
          </label>
          <input type="password" required className="rounded p-4 mb-8" />
          <button type="submit" className="form-btn">
            Continue{" "}
          </button>
          <text className="text-center mt-6 text-sm">Forget password</text>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
