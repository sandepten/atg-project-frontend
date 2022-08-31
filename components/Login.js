import { useRecoilState } from "recoil";
import {
  loginState,
  navLoginState,
  resetPasswordState,
  signupState,
} from "../atoms/signAtoms";
import React, { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = "http://localhost:8000/api/user";

const Login = () => {
  const [login, setLogin] = useRecoilState(loginState);
  const [signup, setSignup] = useRecoilState(signupState);
  const [resetPass, setResetPass] = useRecoilState(resetPasswordState);
  const [username, setUsername] = useState({ username: "" });
  const [password, setPassword] = useState({ password: "" });
  const [invalidUser, setInvalidUser] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [navLogin, setNavLogin] = useRecoilState(navLoginState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseUrl}/signin`, {
        username,
        password,
      });
      if (data.success) {
        // router.push({ pathname: "/reset" }, undefined, { shallow: true });
        setSuccess(true);
      }
    } catch (error) {
      if (error?.response?.data) {
        const { data } = error.response;
        console.log(data);
        if (!data.success) return setInvalidUser(data.error);
        return console.log(error.response.data);
      }
      console.log(error);
    }
  };

  if (invalidUser)
    return (
      <div>
        <section className="bg-gray-50 dark:bg-gray-900 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg dark:bg-gray-800 dark:border-gray-700 sm:p-8">
              <h2 className="text-xl font-bold leading-tight text-center mb-8 tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {invalidUser}
              </h2>
              <div className="text-center">
                <button
                  onClick={() => {
                    setLogin(false);
                  }}
                  className="w-1/2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Home
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );

  if (success)
    return (
      <div>
        <section className="bg-gray-50 dark:bg-gray-900 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg dark:bg-gray-800 dark:border-gray-700 sm:p-8">
              <h2 className="text-xl font-bold leading-tight text-center tracking-tight mb-8 text-gray-900 md:text-2xl dark:text-white">
                You have been Successfully logged in
              </h2>
              <div className="text-center">
                <button
                  onClick={() => {
                    setLogin(false);
                    setNavLogin(true);
                  }}
                  className="w-1/2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Home
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );

  return (
    <section className="bg-gray-50 dark:bg-gray-900 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex justify-between items-center mb-6 space-x-72">
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            ATGWORLD
          </p>
          <button
            onClick={() => {
              setLogin(false);
            }}
          >
            <img src="/x-icon.svg" alt="" className="" />
          </button>
        </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  onChange={({ target }) => setUsername(target.value)}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  onChange={({ target }) => setPassword(target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start"></div>
                <button
                  onClick={() => {
                    setLogin(false);
                    setResetPass(true);
                  }}
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </button>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <button
                  onClick={() => {
                    setLogin(false);
                    setSignup(true);
                  }}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
